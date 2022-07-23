package edu.yavirac.crmbackend.feature.customer;

import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("customers")
public class Customer {
    
    @Id
    @Column("customer_id")
    private long customerId;
    private String name;
    private String dni;
    private String phone;
    private String email;
    private Timestamp created;
    private Timestamp updated;
    private boolean enable;

}
//Samantha