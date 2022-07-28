package edu.yavirac.crmbackend.feature.equipo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface EquipoRepository extends CrudRepository <Equipo, Long>{

    List<Equipo> findAll();
    

}












