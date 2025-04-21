package dev.eduardo.register;

//import dev.eduardo.register.Pessoa;
//import dev.eduardo.register.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestParam;



@CrossOrigin(origins = "http://localhost:3000") // define o origem de acesso na porta 3000, sempre usar para ligar o react
@RestController  
@RequestMapping 
public class pessoacontroller {

    @Autowired  
    private PessoaRepository pessoaRepository; 

    @GetMapping("/")
    public String Root() {
        return new String();
    }

    @GetMapping("/pessoas")
    public List<Pessoa> listarTodas() {
        return pessoaRepository.findAll();
    }

    @GetMapping("/nomes")
    public List<exibirnome> listarnomes() {
        return pessoaRepository.findAllBy();
    }

    
    
}
