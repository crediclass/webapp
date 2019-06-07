/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.PessoaJuridica;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
public interface PessoaJuridicaRepository extends JpaRepository<PessoaJuridica, Long> {
    
    public List<PessoaJuridica> findAllByOrderByIdDesc();
    
    
        public PessoaJuridica findByCnpj(String cnpj);
       
    
}
