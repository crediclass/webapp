/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.PessoaFisica;
import br.com.crediclass.console.repository.PessoaFisicaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class PessoaFisicaService {
    
    @Autowired
    private PessoaFisicaRepository service;
    
    
    public PessoaFisica save(PessoaFisica value){
        return service.save(value);
    }
    
    public PessoaFisica findById(Long id) {
        return service.findById(id).get();
    }
    
    public PessoaFisica findByCpf(String cpf) {
        return service.findByCpf(cpf);
    }
    
    public List<PessoaFisica> findAll() {
        return service.findAllByOrderByIdDesc();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(PessoaFisica value) {
        service.delete(value);
    }
    
}
