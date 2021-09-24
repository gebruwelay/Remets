package com.remets.miniOnlineMarket.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Address {
    @Id
    private long id;
    private String country;
    private String state_;
    private  String city;
    @Column(name="street_address")
    private String streetAddress;
    @Column(name="zip_code")
    private String zipCode;
    @Column(name="address_type")
    private AddressType addressType;

}
