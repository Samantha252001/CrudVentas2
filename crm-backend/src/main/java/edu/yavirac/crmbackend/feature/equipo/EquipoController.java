package edu.yavirac.crmbackend.feature.equipo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/equipoVentas")
@CrossOrigin({"*"})

public class EquipoController {

    @Autowired
    EquipoService equipoService;

    @GetMapping("/findAll")
    public List<Equipo> findAll(){
        return equipoService.findAll();
    }

    
    
}
