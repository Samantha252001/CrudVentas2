package edu.yavirac.crmbackendproyectointegrador.Ventas.equipoVentas;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.Data;

@Data
public class EquipoVentas {

     @Id 
     @Column("equipo_ventas_id")

     private long equipoVentasId;
    private String nombre;

    
}
