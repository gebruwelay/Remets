package com.remets.miniOnlineMarket.service.product;

import com.remets.miniOnlineMarket.domain.Order;
import com.remets.miniOnlineMarket.domain.Product;
import com.remets.miniOnlineMarket.domain.Review;
import com.remets.miniOnlineMarket.domain.Seller;
import com.remets.miniOnlineMarket.repository.OrderRepository;
import com.remets.miniOnlineMarket.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class ProductServiceImpl implements ProductService{
    @Autowired
    ProductRepo productRepo;

    @Autowired
    OrderRepository orderRepository;
    @Override
    public List<Product> getAll() {
        return productRepo.findAll();
    }

    @Override
    public Optional<Product> getById(Long id) {
        return productRepo.findById(id);
    }

    @Override
    public void addProduct(Product product) {
        productRepo.save(product);
    }

    @Override
    public void deleteById(long id) {
        Product product = getById(id).get();

        Set<Seller> sellers = product.getSellers();

        sellers.forEach(s-> s.getProducts()
                .forEach(p-> {
                    if (p.getId() == id) {
                        s.getProducts().remove(p);
                    }
                } ));

        List<Review> reviews = product.getReviews();
        reviews.forEach(r-> {
            if(r.getProduct().getId() == id){
                r.setProduct(null);
            }
        });

        Set<Order> orders = product.getOrders();
        orders.forEach(o-> o.getProducts()
                .forEach(p-> {
                    if (p.getId() == id) {
                        o.getProducts().remove(p);
                    }
                } ));

        productRepo.deleteById(id);
    }

    @Override
    public void updateProduct(Product product, long id) {
        Product product1 = getById(id).get();
        product1.setReviews(product.getReviews());
        product1.setCategory(product.getCategory());
        product1.setDescription(product.getDescription());
        product1.setName(product.getName());
        product1.setPrice(product.getPrice());
        product1.setQuantity(product.getQuantity());
        productRepo.save(product1);
    }

    @Override
    public List<Review> getReviewByProduct(long id){
       return getById(id).get().getReviews();

    }
}
