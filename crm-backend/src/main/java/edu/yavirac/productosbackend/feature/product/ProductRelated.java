package edu.yavirac.productosbackend.feature.product;

import org.springframework.data.annotation.Id;

import lombok.Data;
@Data
public class ProductRelated {
    @Id
    private long id;
    private Long productId;
    private Long relatedId;
    
}
