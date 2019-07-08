/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.DocumentosProcurador;
import br.com.crediclass.console.repository.DocumentosProcuradorRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class DocumentosProcuradorService {
    
    @Autowired
    private DocumentosProcuradorRepository service;
    
    
    public DocumentosProcurador save(DocumentosProcurador value){
        return service.save(value);
    }
    
    public DocumentosProcurador findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<DocumentosProcurador> findAll() {
        return service.findByOrderByOrdenamentoAsc();
    }
    
    public List<DocumentosProcurador> listarTodos() {
        return service.listarTodos();
    }    
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(DocumentosProcurador value) {
        service.delete(value);
    }
    
}
