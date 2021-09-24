package com.remets.miniOnlineMarket.service.order;

import com.remets.miniOnlineMarket.domain.Buyer;
import com.remets.miniOnlineMarket.domain.Order;
import com.remets.miniOnlineMarket.domain.OrderStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface OrderService {
    public Optional<Order> getById(Long id);
    public List<Order> getAll();
    public void deleteById(Long id);
    public void addOrder(Order order);
    public Order cancelOrder(long orderId);
    public Order shipStatus(long orderId);
    public Order deliverStatus(long orderId);
}
