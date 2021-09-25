package com.remets.miniOnlineMarket.service.product;


import com.remets.miniOnlineMarket.domain.Product;
import com.remets.miniOnlineMarket.domain.Review;
import java.util.List;
import java.util.Optional;

public interface ProductService {
    public List<Product> getAll();
    public Optional<Product> getById(Long id);
    public void addProduct(Product product);
    public void deleteById(long id);
    public List<Review> getReviewByProduct(long id);
    public void updateProduct(Product product, long id);
}
