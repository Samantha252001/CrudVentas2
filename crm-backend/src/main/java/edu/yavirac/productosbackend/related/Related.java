package edu.yavirac.productosbackend.related;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("relateds")

public class Related {
    @Id
    @Column("related_id")
    private long relatedId;
    private String name;
    
}
