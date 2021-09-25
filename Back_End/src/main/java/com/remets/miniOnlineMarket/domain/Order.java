package com.remets.miniOnlineMarket.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.Valid;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "order_")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private OrderStatus orderStatus;

    @ManyToOne
    @JoinTable(name = "Order_buyer")
    private Buyer buyer;

    @ManyToOne
    @JoinColumn(name="shipping_address_id")
    @JsonIgnore
    private Address shippingAddress;

    @ManyToOne
    @JoinColumn(name="billing_address_id")
    private Address billingAddress;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "order_product")
    @JsonIgnore
    private Set<Product> products;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="reciept_id")
    private Receipt receipt;

    @ManyToOne
    @JsonIgnore
    private Seller seller;
}
