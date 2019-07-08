/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.DocumentosProponente;
import br.com.crediclass.console.repository.DocumentosProponenteRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class DocumentosProponenteService {
    
    @Autowired
    private DocumentosProponenteRepository service;
    
    
    public DocumentosProponente save(DocumentosProponente value){
        return service.save(value);
    }
    
    public DocumentosProponente findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<DocumentosProponente> findAll() {
        return service.findByOrderByOrdenamentoAsc();
    }
    
    public List<DocumentosProponente> listarTodos() {
        return service.listarTodos();
    }    
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(DocumentosProponente value) {
        service.delete(value);
    }
    
}
