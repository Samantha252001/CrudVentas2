package edu.yavirac.productosbackend.feature.person;
import org.springframework.data.annotation.Id;

import lombok.Data;
@Data
public class Person {
    @Id private long id;
    private String name;
    
}
