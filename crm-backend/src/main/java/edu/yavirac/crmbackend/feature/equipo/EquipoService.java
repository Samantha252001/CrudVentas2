package edu.yavirac.crmbackend.feature.equipo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class EquipoService {

    @Autowired
    EquipoRepository equipoRepository;

    public List<Equipo> findAll(){
        return equipoRepository.findAll();
    }
    
}
