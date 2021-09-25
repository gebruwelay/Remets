package com.remets.miniOnlineMarket.service.order;

import com.remets.miniOnlineMarket.domain.Order;
import com.remets.miniOnlineMarket.domain.OrderStatus;
import com.remets.miniOnlineMarket.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class OrderServiceImpl implements OrderService{
    @Autowired
    OrderRepository orderRepository;

    @Override
    public Optional<Order> getById(Long id) {
        return orderRepository.findById(id);
    }

    @Override
    public List<Order> getAll() {
        return orderRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        orderRepository.deleteById(id);

    }
    @Override
    public void addOrder(Order order) {
        orderRepository.save(order);

    }

    @Override
    public Order cancelOrder(long orderId) {
        Order order = orderRepository.findById(orderId).get();
        if(order.getOrderStatus()== OrderStatus.ORDERED) {
            order.setOrderStatus(OrderStatus.CANCELLED);
        }
        return order;
    }

    @Override
    public Order changeStatus(long orderId){
        Order order = orderRepository.findById(orderId).get();
        if(order.getOrderStatus()== OrderStatus.ORDERED) {
            order.setOrderStatus(OrderStatus.CANCELLED);
        }
        else if(order.getOrderStatus()== OrderStatus.ORDERED) {
            order.setOrderStatus(OrderStatus.SHIPPED);
        }
        else  {
            order.setOrderStatus(OrderStatus.DELIVERED);
        }

        orderRepository.save(order);
        return order;
    }


}
