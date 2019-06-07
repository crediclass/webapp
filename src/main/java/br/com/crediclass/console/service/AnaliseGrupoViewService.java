/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.AnaliseGrupoView;
import br.com.crediclass.console.repository.AnaliseGrupoViewRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class AnaliseGrupoViewService {
    
    @Autowired
    private AnaliseGrupoViewRepository service;
    
    

    
    public AnaliseGrupoView findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<AnaliseGrupoView> findAll() {
        return service.findAll();
    }
    

    
}
