package com.remets.miniOnlineMarket.service.admin;

import com.remets.miniOnlineMarket.domain.Admin;
import com.remets.miniOnlineMarket.domain.Seller;
import com.remets.miniOnlineMarket.repository.AdminRepo;
import com.remets.miniOnlineMarket.repository.SellerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepo adminRepo;

    @Autowired
    SellerRepo sellerRepo;

    @Override
    public List<Admin> getAll() {
        return adminRepo.findAll();
    }

    @Override
    public void addAdmin(Admin admin) {
        adminRepo.save(admin);
    }

    @Override
    public Optional<Admin> getById(Long id) {
        return adminRepo.findById(id);
    }

    @Override
    public void deleteById(long id) {
        adminRepo.deleteById(id);
    }

    @Override
    public void approveSeller(Long id) {
        Seller seller = sellerRepo.findById(id).get();
        seller.setApproved(true);
        sellerRepo.save(seller);
    }
}

