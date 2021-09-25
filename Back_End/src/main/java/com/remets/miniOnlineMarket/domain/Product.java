package com.remets.miniOnlineMarket.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long productId;

    @Column(name = "product_name")
    private String name;


    private String category;

    private double price;

    private int quantity;

    private String description;

    @ManyToMany(mappedBy = "products")
    private Set<Seller> sellers;

    @ManyToMany(mappedBy = "products")
    @JsonIgnore
    private Set<Order> orders;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<Review> reviews;


}

