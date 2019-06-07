/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.PessoaFisica;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
public interface PessoaFisicaRepository extends JpaRepository<PessoaFisica, Long> {
    
    public List<PessoaFisica> findAllByOrderByIdDesc();
    
    public PessoaFisica findByCpf(String cpf);
    
}
