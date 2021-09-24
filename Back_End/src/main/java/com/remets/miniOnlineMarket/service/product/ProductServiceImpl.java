package com.remets.miniOnlineMarket.service.product;

import com.remets.miniOnlineMarket.domain.Product;
import com.remets.miniOnlineMarket.domain.Review;
import com.remets.miniOnlineMarket.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class ProductServiceImpl implements ProductService{
    @Autowired
    ProductRepo productRepo;
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
        productRepo.deleteById(id);
    }

   // public void updateProduct(Product product, long id) {
//        Product product1 = getById(id).get();
//        product1.setReviews(product.getReviews());
//        product1.setCategory(product.getCategory());
//        product1.setDescription(product.getDescription());
//        product1.setName(product.getName());
//        productRepo.save(product, id);
//
//    }
    @Override
    public List<Review> getReviewByProduct(long id){
       return getById(id).get().getReviews();

    }
}
