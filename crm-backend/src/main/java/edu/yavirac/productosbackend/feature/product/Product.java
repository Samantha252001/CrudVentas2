package edu.yavirac.productosbackend.feature.product;


import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("products")
public class Product {

    @Id
    private long id;   
    private String name;
    private String description;
    private String brand;
    private String model;
    private String image;
    private Date created;
    private Date update;
    private Boolean enable;
    private Long personId;

    @MappedCollection(idColumn = "product_id")
    private Set<ProductRelated> relateds = new HashSet<>();
    
}
