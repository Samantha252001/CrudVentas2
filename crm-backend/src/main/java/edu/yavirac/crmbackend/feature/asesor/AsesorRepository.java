package edu.yavirac.crmbackend.feature.asesor;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface AsesorRepository extends CrudRepository<Asesor, Long>{
    
    List<Asesor> findAll();

    List<Asesor> findByNombreLikeIgnoreCase(String term);
    

}
