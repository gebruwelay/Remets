package com.remets.miniOnlineMarket.service.receipt;

import com.remets.miniOnlineMarket.domain.Receipt;
import com.remets.miniOnlineMarket.repository.ReceiptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class ReceiptServiceImpl implements ReceiptService{

    @Autowired
    ReceiptRepository receiptRepository;
    @Override
    public Optional<Receipt> getById(Long id) {
        return receiptRepository.findById(id);
    }

    @Override
    public List<Receipt> getAll() {
        return receiptRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        receiptRepository.deleteById(id);
    }

    @Override
    public void addReceipt(Receipt receipt) {
        receiptRepository.save(receipt);
    }
}
