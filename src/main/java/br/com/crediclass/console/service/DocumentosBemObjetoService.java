/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.DocumentosBemObjeto;
import br.com.crediclass.console.repository.DocumentosBemObjetoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class DocumentosBemObjetoService {
    
    @Autowired
    private DocumentosBemObjetoRepository service;
    
    
    public DocumentosBemObjeto save(DocumentosBemObjeto value){
        return service.save(value);
    }
    
    public DocumentosBemObjeto findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<DocumentosBemObjeto> findAll() {
        return service.findByOrderByOrdenamentoAsc();
    }
    
    public List<DocumentosBemObjeto> listarTodos() {
        return service.listarTodos();
    }    
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(DocumentosBemObjeto value) {
        service.delete(value);
    }
    
}
