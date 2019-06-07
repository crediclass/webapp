/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.Indexador;
import br.com.crediclass.console.repository.IndexadorRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class IndexadorService {
    
    @Autowired
    private IndexadorRepository service;
    
    
    public Indexador save(Indexador indexador){
        return service.save(indexador);
    }
    
    public Indexador findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<Indexador> findAll() {
        return service.findAll();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(Indexador indexador) {
        service.delete(indexador);
    }
    
}
