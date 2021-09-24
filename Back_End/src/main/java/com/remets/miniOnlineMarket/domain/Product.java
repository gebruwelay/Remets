package com.remets.miniOnlineMarket.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.context.annotation.ComponentScan;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
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

//    @NotNull
    private long productId;

//    @NotBlank
//    @NotEmpty
    @Column(name = "product_name")
    private String name;


    private String category;
    // @Digits(integer = 5, fraction = 2, message = "exceed the given limit")
    private double price;

    // @NotNull
    private int quantity;

    private String description;

    //    @ManyToOne
    // private Buyer buyer;
    // @Valid
    @ManyToMany(mappedBy = "products")
    // private Set<@Valid Seller> sellers;
    private Set<Seller> sellers;

    // @Valid
    @ManyToMany(mappedBy = "products")
    @JsonIgnore
    // private Set<@Valid Order> orders;
    private Set<Order> orders;

    // @Valid
    //@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @OneToMany(mappedBy = "product")
//    @JoinTable(name = "product_review")
//    @JsonIgnore
    // private List<@Valid Review> reviews;
    private List<Review> reviews;


}

