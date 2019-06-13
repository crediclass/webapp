/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.Vendedor;
import br.com.crediclass.console.repository.VendedorRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class VendedorService {
    
    @Autowired
    private VendedorRepository service;
    
    
    public Vendedor save(Vendedor value){
        return service.save(value);
    }
    
    public Vendedor findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<Vendedor> findAll() {
        return service.findAll();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(Vendedor value) {
        service.delete(value);
    }
    
}
