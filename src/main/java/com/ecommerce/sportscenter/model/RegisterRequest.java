package com.ecommerce.sportscenter.model;

import lombok.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

@Setter
@Getter
public class RegisterRequest {

    private String username;
    private String password;
    private String email;

}
