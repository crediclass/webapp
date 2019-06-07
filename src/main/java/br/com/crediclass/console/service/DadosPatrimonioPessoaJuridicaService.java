/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.DadosPatrimonioPessoaFisica;
import br.com.crediclass.console.domain.DadosPatrimonioPessoaJuridica;
import br.com.crediclass.console.repository.DadosPatrimonioPessoaJuridicaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class DadosPatrimonioPessoaJuridicaService {
    
    @Autowired
    private DadosPatrimonioPessoaJuridicaRepository service;
    
    
    public DadosPatrimonioPessoaJuridica save(DadosPatrimonioPessoaJuridica value){
        return service.save(value);
    }
    
    public DadosPatrimonioPessoaJuridica findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<DadosPatrimonioPessoaJuridica> findAll() {
        return service.findAll();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(DadosPatrimonioPessoaJuridica value) {
        service.delete(value);
    }
    
}
