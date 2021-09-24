package com.remets.miniOnlineMarket.service.review;

import com.remets.miniOnlineMarket.domain.Review;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface ReviewService {
    public List<Review> getAll();
    public Optional<Review> getById(long id);
    public void deleteById(long id);
    public void addReview(Review review);
    public Review approveReview(long id);
}
