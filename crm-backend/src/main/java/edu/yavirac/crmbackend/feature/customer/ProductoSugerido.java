package edu.yavirac.crmbackend.feature.customer;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("producto_sugerido")
public class ProductoSugerido {
    
    @Id
    private long id;
    private Long customerId;
    private Long productoId;
}