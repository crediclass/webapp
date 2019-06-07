/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.Administradora;
import br.com.crediclass.console.domain.LanceConsorcio;
import br.com.crediclass.console.repository.LanceConsorcioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Service
public class LanceConsorcioService {

    @Autowired
    private LanceConsorcioRepository service;

    public LanceConsorcio save(LanceConsorcio lance) {
        return service.save(lance);
    }

    public LanceConsorcio findById(Long id) {
        return service.findById(id).get();
    }
    public List<LanceConsorcio> findGroupId(Long id) {
        return service.findByGrupoId(id);
    }

    public List<LanceConsorcio> findAll() {
        return service.findAll();
    }

    public void deleteById(Long id) {
        service.deleteById(id);
    }

    public void delete(LanceConsorcio lance) {
        service.delete(lance);
    }

}
