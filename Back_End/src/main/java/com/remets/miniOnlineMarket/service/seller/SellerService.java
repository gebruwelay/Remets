package com.remets.miniOnlineMarket.service.seller;

import com.remets.miniOnlineMarket.domain.Product;
import com.remets.miniOnlineMarket.domain.Seller;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface SellerService {
    public List<Seller> getAll();

    public Optional<Seller> getById(Long id);

    public void addSeller(Seller seller);

    public void deleteById(long id);

    public void addProduct( long id,  Product product);

    public Set<Product> getProducts(long id);

    public Product getProduct(long sellerId, long id);

    public void deleteProduct(long sellerId, long id);

    // public void updateProduct(long sellerId, Product product);
}
