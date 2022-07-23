//ASESOR ES UNA ENTIDAD O DOMINIO ES UNA REPRESENTACION DE NUESTRA 
//BASE DE DATOS LO IMPORTANTE DE ESTA ENTIDAD ES QUE PUDIERAMOS 
//ASEGURARNOS DE QUE SI EL NOMBRE EN LA CLASE EN JAVA FUERA DISTINTO 
// A LA TABLA EN BASE DE DATOS EN POSTGRES SE LO HACE CON LA ANOTACION 

package edu.yavirac.crmbackendproyectointegrador.Ventas.AsesorComercial;

import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
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
    private String equipoVentasId;
    private Timestamp created;//fecha de creacion
    private Timestamp updated;//fecha de actualizacion
    private boolean  enable;//si esta activo o no el registro
    
}
