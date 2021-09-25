package com.remets.miniOnlineMarket.controller;

import com.remets.miniOnlineMarket.domain.*;
import com.remets.miniOnlineMarket.service.buyer.BuyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/buyers")
public class BuyerController {
    @Autowired
    BuyerService buyerService;

    @GetMapping
    public List<Buyer> getAll() {
        return buyerService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Buyer> getById(@PathVariable Long id) {
        return buyerService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        buyerService.deleteById(id);
    }

    @PostMapping
    public void addBuyer(@RequestBody Buyer buyer) {
        buyerService.addBuyer(buyer);

    }
    @GetMapping("/{buyerId}/sellers")
    public Set<Seller> getSellers(@PathVariable long buyerId)
    {
        return  buyerService.getSellers(buyerId);
    }


    @PostMapping("/{buyerId}/sellers/{sellerId}/follow")
    public Set<Seller> followSeller(@PathVariable long buyerId, @PathVariable long sellerId) {
        return buyerService.followSeller(buyerId, sellerId);
    }

    @PostMapping("/{buyerId}/sellers/{sellerId}/unfollow")
    public Set<Seller> unFollowSeller(@PathVariable long buyerId, @PathVariable long sellerId) {
        return buyerService.unFollowSeller(buyerId, sellerId);
    }

    @GetMapping("/{buyerId}/orders")
    public Set<Order> getOrdersByBuyerId(@PathVariable long buyerId) {
        return buyerService.getOrdersByBuyerId(buyerId);
    }

    @PostMapping("/{id}/carts/products")
    public List<Product> addProductToCart(@PathVariable long id, @RequestBody Product product) {
        return buyerService.addProductToCart(id, product);
    }

    @DeleteMapping("/{id}/carts/products/{productId}")
    public List<Product> removeProductFromCart(@PathVariable long id, @PathVariable long  productId) {
        return buyerService.removeProductFromCart(id, productId);
    }

    @GetMapping("/{buyerId}/carts/products")
    public List<Product> getAllProductsInCart(@PathVariable long buyerId) {
        return buyerService.getAllProductsInCart(buyerId);
    }

    @DeleteMapping("/{buyerId}/carts")
    public void clearCart(@PathVariable long buyerId) {
        buyerService.clearCart(buyerId);
    }

    @PostMapping("/{buyerId}/products/{productId}/review")
    public void addReviewByBuyerId(@PathVariable long buyerId, @RequestBody Review review, @PathVariable long productId) {
        buyerService.addReviewByBuyerId(buyerId, review, productId);
    }

    @GetMapping("/{buyerId}/processcart/{sellerId}")
    public Receipt processCart(@PathVariable long buyerId, @PathVariable long sellerId) {
        return buyerService.processCart(buyerId, sellerId);

    }
    @PostMapping("/{buyerId}/carts")
    public void createCart (@PathVariable long buyerId) {
        buyerService.createCart(buyerId);

    }

    @DeleteMapping("/{buyerId}/orders/{orderId}")
    public void cancelOrder(@PathVariable long buyerId, @PathVariable long orderId){
        buyerService.cancelOrder(buyerId, orderId);
    }
    @PostMapping("/{buyerId}/orders/baddresses/orderId")
    public Address changeBillingAddress(@PathVariable long buyerId, @PathVariable long orderId, @RequestBody Address address){
        return buyerService.changeBillingAddress(buyerId,orderId, address);
    }
    @PostMapping("/{buyerId}/orders/saddresses/orderId")
    public Address changeShippingAddress(@PathVariable long buyerId, @PathVariable long orderId, @RequestBody Address address){
        return buyerService.changeShippingAddress(buyerId,orderId, address);
    }
}
