package com.remets.miniOnlineMarket.repository;

import com.remets.miniOnlineMarket.domain.Buyer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BuyerRepository extends CrudRepository<Buyer, Long> {
    List<Buyer> findAll();
}
