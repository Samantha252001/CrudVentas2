package edu.yavirac.crmbackendproyectointegrador.Ventas.equipoVentas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/equipoVentas")
@CrossOrigin({"*"})
public class EquipoVentasController {
    
    @Autowired
    EquipoVentasService equipoVentasService;

    @GetMapping("/findAll")
    public List<EquipoVentas> findAll(){
        return equipoVentasService.findAll();
    }

}