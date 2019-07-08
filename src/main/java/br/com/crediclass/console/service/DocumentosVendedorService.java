/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.DocumentosVendedor;
import br.com.crediclass.console.repository.DocumentosVendedorRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class DocumentosVendedorService {
    
    @Autowired
    private DocumentosVendedorRepository service;
    
    
    public DocumentosVendedor save(DocumentosVendedor value){
        return service.save(value);
    }
    
    public DocumentosVendedor findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<DocumentosVendedor> findAll() {
        return service.findByOrderByOrdenamentoAsc();
    }
    
    public List<DocumentosVendedor> listarTodos() {
        return service.listarTodos();
    }    
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(DocumentosVendedor value) {
        service.delete(value);
    }
    
}
