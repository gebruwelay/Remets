package com.remets.miniOnlineMarket.service.seller;

import com.remets.miniOnlineMarket.domain.Order;
import com.remets.miniOnlineMarket.domain.Product;
import com.remets.miniOnlineMarket.domain.Seller;
import com.remets.miniOnlineMarket.repository.SellerRepo;
import com.remets.miniOnlineMarket.service.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;
@Service
@Transactional
public class SellerServiceImpl implements  SellerService{
    @Autowired
    SellerRepo sellerRepo;
    @Autowired
    OrderService orderService;
    @Override
    public List<Seller> getAll() {
        return sellerRepo.findAll();
    }

    @Override
    public Optional<Seller> getById(Long id) {
        return sellerRepo.findById(id);
    }

    @Override
    public void addSeller(Seller seller) {
        sellerRepo.save(seller);
    }

    @Override
    public void deleteById(long id) {
        sellerRepo.deleteById(id);
    }
    @Override
    public void addProduct( long id,  Product product){
        Seller seller = getById(id).get();
        Set<Product> products = new HashSet<>();
        products = seller.getProducts();
        products.add(product);
        seller.setProducts(products);
    }

    @Override
    public Set<Product> getProducts(long id) {
        return  getById(id).get().getProducts();
    }

    @Override
    public Product getProduct(long sellerId, long id) {
        return getProducts(sellerId).stream()
                .filter(p->p.getProductId() == id)
                .collect(Collectors.toList()).get(0);
    }

    @Override
    public void deleteProduct(long sellerId, long id) {
        Set<Product> products = getProducts(sellerId);
        products.remove(getProduct(sellerId, id));

        Seller seller = getById(sellerId).get();
        seller.setProducts(products);

    }

    @Override
    public Set<Order> getOrders(long sellerId) {
        Seller seller = getById(sellerId).get();
        return seller.getOrders();
    }

    @Override
    public Product updateProduct(long sellerId, long productId) {
        return null;
    }


    @Override
    public Order changeStatus(long orderId, long sellerId){
        return orderService.changeStatus(orderId);

    }


}
