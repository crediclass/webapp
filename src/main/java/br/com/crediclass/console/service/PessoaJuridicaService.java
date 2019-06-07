/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.PessoaJuridica;
import br.com.crediclass.console.repository.PessoaJuridicaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class PessoaJuridicaService {
    
    @Autowired
    private PessoaJuridicaRepository service;
    
    
    public PessoaJuridica save(PessoaJuridica value){
        return service.save(value);
    }
    
    public PessoaJuridica findById(Long id) {
        return service.findById(id).get();
    }
    
    public PessoaJuridica findByCnpj(String cnpj) {
        return service.findByCnpj(cnpj);
    }
    
    
    public List<PessoaJuridica> findAll() {
        return service.findAllByOrderByIdDesc();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(PessoaJuridica value) {
        service.delete(value);
    }
    
}
