package com.remets.miniOnlineMarket.service.product;

import com.remets.miniOnlineMarket.domain.Person;
import com.remets.miniOnlineMarket.domain.Product;
import com.remets.miniOnlineMarket.domain.Review;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    public List<Product> getAll();

    public Optional<Product> getById(Long id);

    public void addProduct(Product product);

    public void deleteById(long id);

   // public void updateProduct(Product product, long id);

    public List<Review> getReviewByProduct(long id);
}
