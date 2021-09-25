package com.remets.miniOnlineMarket.domain;


import javax.validation.constraints.NotEmpty;

public enum OrderStatus {
    ORDERED ("orderd"),
    SHIPPED ("shipped"),
    DELIVERED("delivered"),
    CANCELLED("cancelled");
    private String orderStatus;

    OrderStatus(String orderStatus){
        this.orderStatus =orderStatus;
    }
}
