package edu.yavirac.crmbackendproyectointegrador.Ventas.equipoVentas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class EquipoVentasService {

    @Autowired
    EquipoVentasRepository equipoVentasRepository;

    public List<EquipoVentas> findAll(){
        return equipoVentasRepository.findAll();
    }
    
}
