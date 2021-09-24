package com.remets.miniOnlineMarket.service.address;

import com.remets.miniOnlineMarket.domain.Address;
import com.remets.miniOnlineMarket.repository.AddressRepo;
import com.remets.miniOnlineMarket.service.address.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AddressServiceImpl implements AddressService {
    @Autowired
    AddressRepo addressRepo;

    @Override
    public List<Address> getAll() {
        return addressRepo.findAll();
    }

    @Override
    public Optional<Address> getById(Long id) {
        return addressRepo.findById(id);
    }

    @Override
    public void addAddress(Address address) {
        addressRepo.save(address);

    }

    @Override
    public void deleteById(long id) {
        addressRepo.deleteById(id);
    }

    @Override
    public void updateAddress(Address address, long id) {
        Address updatedAddress = addressRepo.findById(id).get();
        updatedAddress.setAddressType(address.getAddressType());
        updatedAddress.setStreetAddress(address.getStreetAddress());
        updatedAddress.setCity(address.getCity());
        updatedAddress.setCountry(address.getCountry());
        updatedAddress.setZipCode(address.getZipCode());
        updatedAddress.setState_(address.getState_());
        addressRepo.save(updatedAddress);
    }


}
