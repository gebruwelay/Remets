package com.remets.miniOnlineMarket.service.receipt;

import com.remets.miniOnlineMarket.domain.Buyer;
import com.remets.miniOnlineMarket.domain.Receipt;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface ReceiptService {

    public Optional<Receipt> getById(Long id);
    public List<Receipt> getAll();
    public void deleteById(Long id);
    public void addReceipt(Receipt receipt);
}
