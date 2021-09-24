package com.remets.miniOnlineMarket.controller;

import com.remets.miniOnlineMarket.domain.Address;
import com.remets.miniOnlineMarket.service.address.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/addresses")
public class AddressController {

    @Autowired
    AddressService addressService;

    @GetMapping
    public List<Address> getAll() {
        return addressService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Address> getById(@PathVariable long id) {
        return addressService.getById(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void addAddress(@RequestBody Address address) {
        addressService.addAddress(address);

    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable long id) {
        addressService.deleteById(id);

    }

//    @PostMapping
//    public void updateAddress(@RequestBody Address address, long id) {
//        addressService.updateAddress(address, id);
//    }
}


