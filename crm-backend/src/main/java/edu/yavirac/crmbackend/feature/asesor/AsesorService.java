package edu.yavirac.crmbackend.feature.asesor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // con esta anotacion se puede decorar y esta clase va a tener
// funcionalidades extras y poder llamar en cualquier parte

// es una clase especial que se coloca la logica del negocio por ejemplo esa
// clase que nos va a ayudar
// a llamar a los repositorios para que guarden la informacion
public class AsesorService {

    @Autowired // inyecta dentro de su cuerpo en este caso un interfas que es asesorrepository
    // clase o tipo en mayuscual //objeto en minuscula
    AsesorRepository asesorRepository;

    // CREATE= CREAR
    public Asesor save(Asesor asesor) {
        return asesorRepository.save(asesor);
    }

    // READ=LEER

    public Asesor findById(long id) {
        return asesorRepository.findById(id).orElse(new Asesor());
    }

    // UPDATE=ACTUALIZAR
    // UPDATE ES IGUAL AL CREAD O CREAR
    // POR ESO NO SE HACE NADA

    // DELETE=ELIMINAR

    public void deleteById(long id) { // para indicar que no nos retorne nada colocamos un void
        asesorRepository.deleteById(id);
    }

    //TODO LO DE MI BASE DE DATOS
    
    public List<Asesor> findAll() {
        return asesorRepository.findAll();
    }

    public List<Asesor> findByName(String term){
        return asesorRepository.findByNombreLikeIgnoreCase(term);
    }

}
