package com.remets.miniOnlineMarket.repository;

import com.remets.miniOnlineMarket.domain.Receipt;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReceiptRepository extends CrudRepository<Receipt, Long> {
    List<Receipt> findAll();
}
