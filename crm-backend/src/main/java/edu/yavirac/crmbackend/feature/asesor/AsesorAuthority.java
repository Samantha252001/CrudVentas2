package edu.yavirac.crmbackend.feature.asesor;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class AsesorAuthority {

    @Id
    private long id;
    private Long vendedorId;
    private Long authorityId;
    
}

