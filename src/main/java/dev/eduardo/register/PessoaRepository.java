package dev.eduardo.register;

//import dev.eduardo.register.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

interface exibirnome {
    String getNome();     
}

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

    List<exibirnome> findAllBy();

}

