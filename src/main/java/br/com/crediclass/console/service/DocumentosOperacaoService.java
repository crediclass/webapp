/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.DocumentosOperacao;
import br.com.crediclass.console.repository.DocumentosOperacaoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class DocumentosOperacaoService {
    
    @Autowired
    private DocumentosOperacaoRepository service;
    
    
    public DocumentosOperacao save(DocumentosOperacao value){
        return service.save(value);
    }
    
    public DocumentosOperacao findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<DocumentosOperacao> findAll() {
        return service.findByOrderByOrdenamentoAsc();
    }
    
    public List<DocumentosOperacao> listarTodos() {
        return service.listarTodos();
    }    
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(DocumentosOperacao value) {
        service.delete(value);
    }
    
}
