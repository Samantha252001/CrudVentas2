package edu.yavirac.productosbackend.feature.product;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long>{
    List<Product> findAll();

    List<Product> findByNameLikeIgnoreCase(String term);
    
}