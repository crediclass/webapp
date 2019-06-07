/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.Administradora;
import br.com.crediclass.console.repository.AdministradoraRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class AdministradoraService {
    
    @Autowired
    private AdministradoraRepository service;
    
    
    public Administradora save(Administradora administradora){
        return service.save(administradora);
    }
    
    public Administradora findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<Administradora> findAll() {
        return service.findAllByOrderByIdAsc();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(Administradora administradora) {
        service.delete(administradora);
    }
    
}
