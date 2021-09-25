package com.remets.miniOnlineMarket.controller;

import com.remets.miniOnlineMarket.domain.Review;
import com.remets.miniOnlineMarket.service.review.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/review")
public class ReviewController {
    @Autowired
    ReviewService reviewService;
    @GetMapping
    public List<Review> getAll() {
        return reviewService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Review> getById(@PathVariable long id) {
        return reviewService.getById(id);
    }
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable long id) {
        reviewService.deleteById(id);
    }

    @PostMapping
    public void addReview(@RequestBody Review review) {
        reviewService.addReview(review);
    }

    @GetMapping("{id}/reviews")
    Review approveReview(@PathVariable  long id){
        return reviewService.approveReview(id);
    }

}
