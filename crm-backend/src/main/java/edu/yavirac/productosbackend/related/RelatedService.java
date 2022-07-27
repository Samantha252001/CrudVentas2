package edu.yavirac.productosbackend.related;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RelatedService {

    @Autowired
    RelatedRepository relatedRepository;

    //Create
    public Related save(Related related){
        return relatedRepository.save(related);
    }

    //Read
    public Related findById(long id){
        return relatedRepository.findById(id).orElse(new Related());
    }

    //Update = Create

    //Delete
    public void deleteById(long id){
        relatedRepository.deleteById(id);
    }

    public List<Related> findAll(){
        return relatedRepository.findAll();
    }
    
    public List<Related> findByName(String term){
        return relatedRepository.findByNameLikeIgnoreCase(term+"%");
    }
    
}
