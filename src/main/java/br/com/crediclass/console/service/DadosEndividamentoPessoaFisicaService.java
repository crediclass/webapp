/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.DadosEndividamentoPessoaFisica;
import br.com.crediclass.console.domain.Nacionalidade;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class DadosEndividamentoPessoaFisicaService {
    
    @Autowired
    private DadosEndividamentoPessoaFisicaService service;
    
    
    public DadosEndividamentoPessoaFisica save(DadosEndividamentoPessoaFisica value){
        return service.save(value);
    }
    
    public DadosEndividamentoPessoaFisica findById(Long id) {
        return service.findById(id);
    }
    
    public List<DadosEndividamentoPessoaFisica> findAll() {
        return service.findAll();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(DadosEndividamentoPessoaFisica value) {
        service.delete(value);
    }
    
}
