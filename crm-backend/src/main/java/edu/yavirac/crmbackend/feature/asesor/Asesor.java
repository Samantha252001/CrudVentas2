
package edu.yavirac.crmbackend.feature.asesor;


import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data//para no tener que escribir los geteres y seteres
@Table("asesores")//esta anotacion es para cuando las tablas son difereste 

public class Asesor {

    @Id// para decorar y especifique cual es mi primary kid
    @Column("vendedor_id")//es esta anotacion puedo decir como se llama la columna en posgrest
    private long vendedorId;
    private String nombre;
    private String telefono;
    private String correo;
    @Column("equipo_ventas_id")
    private long  equipoVentasId;
    private Timestamp created;//fecha de creacion
    private Timestamp updated;//fecha de actualizacion
    private boolean  enable;//si esta activo o no el registro
    private long clienteId;
    private long id; //idperson

    //funciona nuestros geteres y seteres 
    @MappedCollection(idColumn = "vendedor_id")
    private Set<AsesorCliente> cliente = new HashSet<>();
    //set es un conjunto
}

