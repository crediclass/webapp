/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.TipoSituacaoDoc;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.crediclass.console.repository.TipoSituacaoDocRepository;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class TipoSituacaoDocService {
    
    @Autowired
    private TipoSituacaoDocRepository service;
    
    
    public TipoSituacaoDoc save(TipoSituacaoDoc value){
        return service.save(value);
    }
    
    public TipoSituacaoDoc findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<TipoSituacaoDoc> findAll() {
        return service.findAll();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(TipoSituacaoDoc value) {
        service.delete(value);
    }
    
}
