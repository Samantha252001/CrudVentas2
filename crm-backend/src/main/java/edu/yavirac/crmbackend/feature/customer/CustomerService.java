package edu.yavirac.crmbackend.feature.customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    //Create
    public Customer save(Customer customer){
        return customerRepository.save(customer);
    }

    //Read
    public Customer findById(long id){
        return customerRepository.findById(id).orElse(new Customer());
    }

    //Update = Create

    //Delete
    public void deleteById(long id){
        customerRepository.deleteById(id);
    }

    public List<Customer> findAll(){
        return customerRepository.findAll();
    }

    public List<Customer> findByName(String term){
        return customerRepository.findByNameLikeIgnoreCase(term);
    }
    
}