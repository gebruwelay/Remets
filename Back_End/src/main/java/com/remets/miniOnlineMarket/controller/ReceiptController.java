package com.remets.miniOnlineMarket.controller;

import com.remets.miniOnlineMarket.domain.Receipt;
import com.remets.miniOnlineMarket.service.receipt.ReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class ReceiptController {
    @Autowired
    ReceiptService receiptService;

    @GetMapping("/receipts")
    public List<Receipt> getAll(){
        return receiptService.getAll();
    }

    @GetMapping("/receipts/{id}")
    public Optional<Receipt> getById(@PathVariable Long id) {
        return receiptService.getById(id);
    }

    @DeleteMapping("/receipts/{id}")
    public void deleteById(@PathVariable Long id) {
        receiptService.deleteById(id);
    }
    @PostMapping("/receipts")
    public void addReceipt(@RequestBody Receipt receipt) {
        receiptService.addReceipt(receipt);
    }
}
