package edu.yavirac.crmbackend.feature.asesor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AsesorService {

    @Autowired
    AsesorRepository asesorRepository;

    public List<Asesor> findAll(){
        return asesorRepository.findAll();
    }
    
    
}