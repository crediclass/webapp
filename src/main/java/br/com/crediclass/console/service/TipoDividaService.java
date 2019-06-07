/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.TipoDivida;
import br.com.crediclass.console.repository.TipoDividaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class TipoDividaService {
    
    @Autowired
    private TipoDividaRepository service;
    
    
    public TipoDivida save(TipoDivida value){
        return service.save(value);
    }
    
    public TipoDivida findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<TipoDivida> findAll() {
        return service.findAll();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(TipoDivida value) {
        service.delete(value);
    }
    
}
