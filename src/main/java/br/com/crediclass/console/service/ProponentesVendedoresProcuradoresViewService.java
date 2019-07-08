/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.ProponentesVendedoresProcuradoresView;
import br.com.crediclass.console.repository.ProponentesVendedoresProcuradoresViewRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class ProponentesVendedoresProcuradoresViewService {
    
    @Autowired
    private ProponentesVendedoresProcuradoresViewRepository service;
    
    

    
    public ProponentesVendedoresProcuradoresView findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<ProponentesVendedoresProcuradoresView> findAll() {
        return service.findAll();
    }
    
    public List<ProponentesVendedoresProcuradoresView> findByOportunidadeId(Long oportunidade_id) {
        return service.findByOportunidadeId(oportunidade_id);
    }
    

    
}
