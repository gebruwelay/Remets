package com.remets.miniOnlineMarket.repository;

import com.remets.miniOnlineMarket.domain.Buyer;
import com.remets.miniOnlineMarket.domain.Cart;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CartRepo extends CrudRepository<Cart,Long> {
    public List<Cart> findAll();

    Cart findCartByBuyer(Buyer buyer);
}
