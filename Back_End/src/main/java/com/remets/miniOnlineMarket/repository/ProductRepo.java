package com.remets.miniOnlineMarket.repository;

import com.remets.miniOnlineMarket.domain.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProductRepo extends CrudRepository<Product, Long> {

    public List<Product> findAll();

}
