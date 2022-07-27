package edu.yavirac.crmbackend.feature.asesor;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("asesor_cliente")
public class AsesorCliente {

    @Id
    @Column("asesor_person_id")
    private long asesorPersonaId;
    private Long vendedorId;
    private Long clienteId;
    private long id;
    
}

