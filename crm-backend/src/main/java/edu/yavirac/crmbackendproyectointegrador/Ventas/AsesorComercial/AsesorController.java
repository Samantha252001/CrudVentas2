//es la clase especial donde va a escuchar las rutas especificas para
//prosesar peticiones para ciertas entidades. lo que hace una clase 
//en java spring que pueda escuchar todo lo que tiene que ver con Rest
//es que se note con restcontroller

package edu.yavirac.crmbackendproyectointegrador.Ventas.AsesorComercial;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin({"*"}) //con esto podremos indicar un areglor de quellas direcciones//en las que nosotros vamos a permitir el acceso por el momento se dejara asi 
//con el * para que venga de todas parate pero se puede colocar el url que deseamos 
@RequestMapping("/api/asesor")
public class AsesorController {

    @Autowired
    AsesorService asesorService;

    // CRUD = CREAR, LEER, ACTUALIZAR, ELIMINAR
    // CREATE, READ, UPDATE, DELETE

    // CREATE=CREAR

    @PostMapping("/save")
    public Asesor save(@RequestBody Asesor asesor) {
        return asesorService.save(asesor);
    }

    // READ=LEER
    @GetMapping("/{id}")
    public Asesor findById(@PathVariable long id) {
        return asesorService.findById(id);
    }

    // UPDATE=ACTUALIZAR
    @PutMapping("/update")
    public Asesor update(@RequestBody Asesor asesor) {
        return asesorService.save(asesor);
    }

    // DELETE=ELIMINAR
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public String deleteByID(@PathVariable long id) {
        asesorService.deleteById(id);
        return "Registro eliminado";
    }

    @GetMapping("/findall")
    public List<Asesor> findAll() {
        return asesorService.findAll();
    }

    @GetMapping("/findByName/{term}")
    public List<Asesor> findByName(@PathVariable String term){
        return asesorService.findByName(term+"%");
    }
}
