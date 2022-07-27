package edu.yavirac.productosbackend.related;

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
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/related")
@CrossOrigin({"*"})
public class RelatedController {

    @Autowired
    RelatedService relatedService;

    @PostMapping("/save")
    public Related save(@RequestBody Related related){
        return relatedService.save(related);
    }

    @GetMapping("/findById/{id}")
    public Related findById(@PathVariable long id){
        return relatedService.findById(id);
    }

    @PutMapping("/update")
    public Related update(@RequestBody Related related){
        return relatedService.save(related);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable long id)
    {
        relatedService.deleteById(id);
    }

    @GetMapping("/all")
    public List<Related> findAll(){
        return relatedService.findAll();
    }

    @GetMapping("/findByName/{term}")
    public List<Related> findByName(@PathVariable String term){
        System.out.println("Backend:"+term);
        return relatedService.findByName(term);
    }
    
    
}
