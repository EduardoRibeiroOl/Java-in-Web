package dev.eduardo.register.routes;
import org.springframework.data.jpa.repository.JpaRepository;
//import dev.eduardo.register.Pessoa;
//import dev.eduardo.register.routes.Quotedata;
import java.util.List;

interface exibirnome {
    String getNome();     
}

public interface Quote extends JpaRepository<Quotedata, Long> {

    List<exibirnome> findAllBy();

}   

