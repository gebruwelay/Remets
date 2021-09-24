package com.remets.miniOnlineMarket.repository;

import com.remets.miniOnlineMarket.domain.Review;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends CrudRepository<Review, Long> {
    List<Review> findAll();
}
