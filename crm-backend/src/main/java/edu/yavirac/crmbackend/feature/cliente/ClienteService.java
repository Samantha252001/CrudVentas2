package edu.yavirac.crmbackend.feature.cliente;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    //Create
    public Cliente save(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    //Read
    public Cliente findById(long id){
        return clienteRepository.findById(id).orElse(new Cliente());
    }

    //Update = Create

    //Delete
    public void deleteById(long id){
        clienteRepository.deleteById(id);
    }

    public List<Cliente> findAll(){
        return clienteRepository.findAll();
    }

    public List<Cliente> findByName(String term){
        return clienteRepository.findByNameLikeIgnoreCase(term+"%");
    }
    
}