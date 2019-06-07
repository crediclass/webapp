/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.CreditoGrupo;
import br.com.crediclass.console.repository.CreditoGrupoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class CreditoGrupoService {
    
    @Autowired
    private CreditoGrupoRepository service;
    
    public CreditoGrupo save(CreditoGrupo credito){
        return service.save(credito);
    }
    
    public CreditoGrupo findById(Long id){
        return service.findById(id).get();
    }
    
    public List<CreditoGrupo> findAll(){
        return service.findAll();
    }
    
    public void deleteById(Long id){
        service.deleteById(id);
    }
    
    public void delete(CreditoGrupo credito) {
        service.delete(credito);
    }
    
}
