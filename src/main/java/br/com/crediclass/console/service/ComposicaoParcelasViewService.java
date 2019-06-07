/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.ComposicaoParcelasView;
import br.com.crediclass.console.repository.ComposicaoParcelasViewRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class ComposicaoParcelasViewService {
    
    @Autowired
    private ComposicaoParcelasViewRepository service;
    
   
    
    public List<ComposicaoParcelasView> findGroupId(Long id) {
        return service.findGroupId(id);
    }
    
    public List<ComposicaoParcelasView> findAll() {
        return service.findAll();
    }
    

    
}
