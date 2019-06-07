/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.Permissao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.crediclass.console.repository.PermissaoRepository;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Service
public class PermissaoService {

    @Autowired
    private PermissaoRepository repository;

    public Permissao save(Permissao grupo) {
        return repository.save(grupo);
    }

    public Permissao findById(Long id) {
        return repository.findById(id).get();
    }

    public List<Permissao> findAll() {
        return repository.findAll();
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    public void delete(Permissao grupo) {
        repository.delete(grupo);
    }

}
