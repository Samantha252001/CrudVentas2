package edu.yavirac.crmbackend.feature.asesor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
@RequestMapping("/api/asesor")
@CrossOrigin({"*"})

public class AsesorController {

    @Autowired
    AsesorService asesorService;

    @GetMapping("/findAll")
    public List<Asesor> findAll(){
        return asesorService.findAll();
    }

    
}