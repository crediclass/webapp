/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.Banco;
import br.com.crediclass.console.repository.BancoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class BancoService {
    
    @Autowired
    private BancoRepository service;
    
    
    public Banco save(Banco value){
        return service.save(value);
    }
    
    public Banco findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<Banco> findAll() {
        return service.findAll();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(Banco value) {
        service.delete(value);
    }
    
}
