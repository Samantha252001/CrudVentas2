package edu.yavirac.crmbackendproyectointegrador.Ventas.AsesorComercial;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


public interface AsesorRepository extends CrudRepository<Asesor, Long>{
    
    List<Asesor> findAll();

    List<Asesor> findByNameLikeIgnoreCase(String term);
    

}
