/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.ComposicaoParcelas;
import br.com.crediclass.console.repository.ComposicaoParcelasRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class ComposicaoParcelasService {
    
    @Autowired
    private ComposicaoParcelasRepository service;
    
    
    public ComposicaoParcelas save(ComposicaoParcelas parcela){
        return service.save(parcela);
    }
    
    public ComposicaoParcelas findById(Long id) {
        return service.findById(id).get();
    }
    
    public List<ComposicaoParcelas> findAll() {
        return service.findAllByOrderByParcelaAsc();
    }
    
    public void deleteById(Long id) {
        service.deleteById(id);
    }
    
    public void delete(ComposicaoParcelas parcela) {
        service.delete(parcela);
    }
    

    
}
