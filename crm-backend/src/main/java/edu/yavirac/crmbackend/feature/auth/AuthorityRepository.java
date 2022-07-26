package edu.yavirac.crmbackend.feature.auth;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface AuthorityRepository extends CrudRepository<Authority, Long> {
    
    List<Authority> findAll();
    List<Authority> findByNameLikeIgnoreCase(String term);

}