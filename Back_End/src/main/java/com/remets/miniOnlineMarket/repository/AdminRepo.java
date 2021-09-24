package com.remets.miniOnlineMarket.repository;

import com.remets.miniOnlineMarket.domain.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminRepo extends CrudRepository<Admin, Long> {
    public List<Admin> findAll();
}
