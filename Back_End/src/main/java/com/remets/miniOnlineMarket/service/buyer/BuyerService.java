package com.remets.miniOnlineMarket.service.buyer;

import com.remets.miniOnlineMarket.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public interface BuyerService {
    public Optional<Buyer> getById(Long id);

    public List<Buyer> getAll();

    public void deleteById(Long id);

    public void addBuyer(Buyer buyer);

    public Set<Seller> followSeller(long buyerId, long sellerId);

    public Set<Seller> unFollowSeller(long buyerId, long sellerId);

    public void placeOrder(long buyerId, long orderId);

    public Set<Order> getOrdersByBuyerId(long buyerId);

    public List<Product> addProductToCart(long id, Product product);

    public  List<Product> removeProductFromCart(long id, long  productId);

    public List<Product> getAllProductsInCart(long buyerId);

    public List<Product> clearCart(long buyerId);

    public void addReviewByBuyerId(long buyerId, Review review, long productId);

    public Receipt processCart(long buyerId);

    public Set<Seller> getSellers(long buyerId);

    public void createCart(long buyerId);
}
