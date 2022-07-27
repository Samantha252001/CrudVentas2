package edu.yavirac.productosbackend.feature.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/person")
@CrossOrigin({"*"})

public class PersonController {
    @Autowired
    PersonService personService;

    @GetMapping("/findAll")
    public List<Person> findAll(){
        return personService.findAll();
    }
}
