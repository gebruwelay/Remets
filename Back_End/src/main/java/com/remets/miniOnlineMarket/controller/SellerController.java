package com.remets.miniOnlineMarket.controller;


import com.remets.miniOnlineMarket.domain.Order;
import com.remets.miniOnlineMarket.domain.Product;
import com.remets.miniOnlineMarket.domain.Seller;
import com.remets.miniOnlineMarket.service.order.OrderService;
import com.remets.miniOnlineMarket.service.seller.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/sellers")
public class SellerController {

    @Autowired
    SellerService sellerService;

    @Autowired
    OrderService orderService;

    @GetMapping
    public List<Seller> getAll() {
        return sellerService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Seller> getById(@PathVariable long id) {
        return sellerService.getById(id);
    }

    @PostMapping
    public void addProduct(@RequestBody Seller seller) {
        sellerService.addSeller(seller);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable long id) {
        sellerService.deleteById(id);
    }

    @PostMapping("{sellerId}/products")
    public void addProduct(@PathVariable long sellerId, @RequestBody Product product){
        sellerService.addProduct(sellerId, product);
    }

    @GetMapping("{sellerId}/products")
    public Set<Product> getProducts(@PathVariable long sellerId){
        return sellerService.getProducts(sellerId);
    }

    @GetMapping("{sellerId}/products/{id}")
    public Product getProduct(@PathVariable long sellerId, @PathVariable long id){
        return sellerService.getProduct(sellerId, id);
    }

    @DeleteMapping("{sellerId}/products/{id}")
    public void deleteProduct(@PathVariable long sellerId, @PathVariable long id){
        sellerService.deleteProduct(sellerId, id);
    }

    @GetMapping("{sellerId}/orders")
    public Set<Order> getOrders(@PathVariable long sellerId){
        return sellerService.getOrders(sellerId);
    }


    @GetMapping("{sellerId}/orders/{orderId}")
    public Order changeOrderStatus(@PathVariable long sellerId, @PathVariable long orderId){
        return sellerService.changeStatus(sellerId, orderId);
    }
    @PutMapping("{sellerId}/produts/{productId}")
    public Product updateProduct(@PathVariable long sellerId, @PathVariable long productId){
        return sellerService.updateProduct(sellerId, productId);
    }

}
