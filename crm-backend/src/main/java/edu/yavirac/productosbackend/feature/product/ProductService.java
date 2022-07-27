package edu.yavirac.productosbackend.feature.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    
    @Autowired
    ProductRepository productRepository;

    //Create
    public Product save(Product product){
        return productRepository.save(product);
    }

    //Read
    public Product findById(Long id){
        return productRepository.findById(id).orElse(new Product());
    }

    //Update = Create (PUT)

    //Delete
    public void deleteById(Long id){
        productRepository.deleteById(id);
    }

    public List<Product> findAll(){
        return productRepository.findAll();
    }

    public List<Product> findByName(String term){
        return productRepository.findByNameLikeIgnoreCase(term);
    }
}