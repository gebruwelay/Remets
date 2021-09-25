package com.remets.miniOnlineMarket.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.tomcat.jni.Address;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Buyer extends Person {

    private double point;

    @OneToMany(mappedBy = "buyer")
    @JsonIgnore
    private Set<Order> orders;
    @OneToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "buyer_seller")
    @JsonIgnore
    private Set<Seller> sellers;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cart_id")
    private Cart cart;

}
