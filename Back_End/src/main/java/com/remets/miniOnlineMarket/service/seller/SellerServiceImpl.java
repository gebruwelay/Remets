package com.remets.miniOnlineMarket.service.seller;

import com.remets.miniOnlineMarket.domain.Product;
import com.remets.miniOnlineMarket.domain.Seller;
import com.remets.miniOnlineMarket.repository.SellerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
public class SellerServiceImpl implements  SellerService{
    @Autowired
    SellerRepo sellerRepo;
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

//    @Override
//    public void updateProduct(long sellerId, Product product) {
//        Set<Product> products = getProducts(sellerId);
//        Product product1 = products.stream()
//                .filter(p->p.getProductId() == product.getProductId())
//                .collect(Collectors.toList()).get(0);
//        products.remove(product1);
//        products.add(product);
//
//        Seller seller = getById(sellerId).get();
//        seller.setProducts(products);
//        sellerRepo.save(sellerId, seller);
//    }

}
