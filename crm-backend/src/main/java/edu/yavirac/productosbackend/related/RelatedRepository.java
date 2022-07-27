package edu.yavirac.productosbackend.related;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface RelatedRepository extends CrudRepository<Related, Long> {
    
    List<Related> findAll();
    List<Related> findByNameLikeIgnoreCase(String term);

}

