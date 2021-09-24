package com.remets.miniOnlineMarket.domain;

import lombok.*;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.PastOrPresent;
import java.util.Date;
import java.util.List;

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
    // @NotEmpty
    // @NotBlank
    private String productName;
    private int quantity;
    private double totalPrice;
    //    @NotEmpty
    //    @NotBlank
    //    private String sellerName;

    // @PastOrPresent
    @Column(name = "receipt_date")
    private Date date;

    // @Valid
//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "buyer_id")
//    private Buyer buyer;

    Receipt(String productName, int quantity, double totalPrice
    ) {
        this.productName = productName;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

}
