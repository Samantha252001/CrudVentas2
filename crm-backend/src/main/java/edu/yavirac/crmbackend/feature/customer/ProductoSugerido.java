package edu.yavirac.crmbackend.feature.customer;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class ProductoSugerido {
    
    @Id
    private long id;
    private Long customerId;
    private Long productId;
}