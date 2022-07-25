package edu.yavirac.crmbackend.feature.asesor;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("asesores")
public class Asesor {
    
    @Id
    @Column("vendedor_id")
    private long vendedorId;
    private String name;
    private String phone;
}