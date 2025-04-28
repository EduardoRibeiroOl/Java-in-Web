package dev.eduardo.register.routes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") 
@RestController
public class Controller {

    @Autowired  
    private Quote quoteRepository; 

    @GetMapping("/")
    public String getRoot() {
        return "Servidor Funcionando!";
    }
    
    @GetMapping("/register")
    public List<Quotedata> getRegister() {
        return quoteRepository.findAll();
    }

    @PostMapping("/register")
    public String postRegister(@RequestBody String entity) {
        return entity;
    }
    
    @GetMapping("/login")
    public List<Quotedata> getLogin() {
        return quoteRepository.findAll(); 
    }

    @PostMapping("/login")
    public String postLogin(@RequestBody String entity) {
        return entity;
    }
    
    @GetMapping("/user")
    public String getUser(@RequestParam String param) {
        return "Usuário: " + param;
    }
    
    @GetMapping("/search")
    public List<Quotedata> getSearch() {
    return quoteRepository.findAll();
}  
}
