/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.Indexador;
import br.com.crediclass.console.domain.PeriodoLances;
import br.com.crediclass.console.repository.PeriodoLancesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class PeriodoLancesService {
    
    @Autowired
    private PeriodoLancesRepository service;
    
    
    public PeriodoLances save(PeriodoLances value){
        return service.save(value);
    }
    
    public PeriodoLances findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<PeriodoLances> findAll() {
        return service.findAllByOrderByIdDesc();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(PeriodoLances value) {
        service.delete(value);
    }
    
}
