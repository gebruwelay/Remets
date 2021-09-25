package com.remets.miniOnlineMarket.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.Valid;
import java.util.List;
import java.util.Set;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Data
public class Seller extends Person{

    private boolean isApproved;
    @ManyToMany(cascade = CascadeType.ALL, fetch= FetchType.EAGER)
    @JoinTable(name="seller_products")
    @JsonIgnore
    private Set<Product> products;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name="seller_order")
    @JsonIgnore
    private Set<Order> orders;
}
