/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.DadosPatrimonioPessoaFisica;
import br.com.crediclass.console.repository.DadosPatrimonioPessoaFisicaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class DadosPatrimonioPessoaFisicaService {
    
    @Autowired
    private DadosPatrimonioPessoaFisicaRepository service;
    
    
    public DadosPatrimonioPessoaFisica save(DadosPatrimonioPessoaFisica value){
        return service.save(value);
    }
    
    public DadosPatrimonioPessoaFisica findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<DadosPatrimonioPessoaFisica> findAll() {
        return service.findAll();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(DadosPatrimonioPessoaFisica value) {
        service.delete(value);
    }
    
}
