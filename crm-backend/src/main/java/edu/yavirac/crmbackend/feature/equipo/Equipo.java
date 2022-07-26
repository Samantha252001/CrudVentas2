package edu.yavirac.crmbackend.feature.equipo;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("equipos")

public class Equipo {
    
    @Id
    @Column("equipo_ventas_id")
    
    private long equipoVentasId;
    private String nombre;

}
