package com.remets.miniOnlineMarket.controller;


import com.remets.miniOnlineMarket.domain.Order;
import com.remets.miniOnlineMarket.service.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/orders")

public class OrderController {
    @Autowired
    OrderService orderService;

    @GetMapping
    public List<Order> getAll(){
        return orderService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Order> getById(@PathVariable Long id) {
        return orderService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        orderService.deleteById(id);
    }

    @PostMapping
    public void addBuyer(@RequestBody Order order) {
        orderService.addOrder(order);
    }
    @GetMapping("/{orderId}/cancel")
    public Order changeStatus(@PathVariable  long orderId){
        return orderService.changeStatus(orderId);
    }


}
