

package edu.yavirac.crmbackend.feature.cliente;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("clientes")
public class Cliente {
    @Id 
    private long clienteId;
    private String name;




}
    
    



