package com.remets.miniOnlineMarket.domain;

import lombok.*;
import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Receipt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String productName;
    private int quantity;
    private double totalPrice;

    @Column(name = "receipt_date")
    private Date date;


    Receipt(String productName, int quantity, double totalPrice) {
        this.productName = productName;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
}
