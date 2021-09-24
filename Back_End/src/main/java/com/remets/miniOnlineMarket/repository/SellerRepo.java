package com.remets.miniOnlineMarket.repository;

import com.remets.miniOnlineMarket.domain.Seller;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface SellerRepo extends CrudRepository<Seller, Long> {
    public List<Seller> findAll();
   // public void save(long sellerId, Seller seller);
}
