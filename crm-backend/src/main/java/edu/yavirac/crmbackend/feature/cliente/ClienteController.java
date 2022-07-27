package edu.yavirac.crmbackend.feature.cliente;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cliente")
@CrossOrigin({"*"})
public class ClienteController {

    @Autowired
    ClienteService clienteService;

    @PostMapping("/save")
    public Cliente save(@RequestBody Cliente cliente){
        return clienteService.save(cliente);
    }

    @GetMapping("/findById/{id}")
    public Cliente findById(@PathVariable long id){
        return clienteService.findById(id);
    }

    @PutMapping("/update")
    public Cliente update(@RequestBody Cliente cliente){
        return clienteService.save(cliente);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable long id)
    {
        clienteService.deleteById(id);
    }

   
    @GetMapping("/all")
    public List<Cliente> findAll(){
        return clienteService.findAll();
    }
    
    @GetMapping("/findByName/{term}")
    public List<Cliente> findByName(@PathVariable String term){
        System.out.println("Backend:"+term);
        return clienteService.findByName(term);
    }
    
}