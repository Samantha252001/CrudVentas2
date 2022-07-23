package edu.yavirac.crmbackendproyectointegrador.Ventas.AsesorComercial;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class AsesorAuthority {

    @Id
    private long id;
    private Long personId;
    private Long authorityId;
    
}
