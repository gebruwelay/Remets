package com.remets.miniOnlineMarket.service.address;

import com.remets.miniOnlineMarket.domain.Address;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface AddressService {
    public List<Address> getAll();

    public Optional<Address> getById(Long id);

    public void addAddress(Address address);

    public void deleteById(long id);

    public void updateAddress(Address address, long id);

}
