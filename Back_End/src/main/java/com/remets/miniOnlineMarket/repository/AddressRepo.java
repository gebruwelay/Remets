package com.remets.miniOnlineMarket.repository;

import com.remets.miniOnlineMarket.domain.Address;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface AddressRepo extends CrudRepository<Address, Long> {
    public List<Address> findAll();
}
