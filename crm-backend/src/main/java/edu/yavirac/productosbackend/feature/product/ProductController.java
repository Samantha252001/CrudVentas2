package edu.yavirac.productosbackend.feature.product;

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
@RequestMapping("/api/product")
@CrossOrigin({"*"})
public class ProductController {


    @Autowired
    ProductService productService;

//CRUD = Crear, Leer, Actualizar, Eliminar
//      Create  Read   Update      Delete

//Crete
    @PostMapping("/save")
    public Product save(@RequestBody Product product){
        return productService.save(product);
    }

    @GetMapping("/{id}")
    public Product findById(@PathVariable long id){
        return productService.findById(id);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Product update(@RequestBody Product product){
        return productService.save(product);
    }

    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable long id){
        productService.deleteById(id);
        
    }
    

    @GetMapping("/findAll")
    public List findAll(){
        return productService.findAll();
    }


    @GetMapping("/findByName/{term}")
    public List<Product> findByName(@PathVariable String term){
        return productService.findByName(term+"%");
    }
        
    
    
}
