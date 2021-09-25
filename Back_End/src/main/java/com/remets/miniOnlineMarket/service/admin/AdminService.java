package com.remets.miniOnlineMarket.service.admin;


import com.remets.miniOnlineMarket.domain.Admin;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface AdminService {
    public List<Admin> getAll();

    void addAdmin(Admin admin);

    public Optional<Admin> getById(Long id);

    public void deleteById(long id);

    public void approveSeller(Long id);
}
