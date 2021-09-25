package com.remets.miniOnlineMarket.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@MappedSuperclass
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    @NotEmpty
    private String firstName;
    @NotBlank
    @NotEmpty
    private String lastName;

    private String phoneNumber;

    private String userName;

    @JsonIgnore
    @NotBlank
    private String password;

    @Email
    private String email;

    @NotEmpty
    @NotBlank
    private String role_;

    @OneToOne
    private Address address;
}