/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.DocumentosVendedorDados;
import br.com.crediclass.console.repository.DocumentosVendedorDadosRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Service
public class DocumentosVendedorDadosService {

    @Autowired
    private DocumentosVendedorDadosRepository service;

    public DocumentosVendedorDados save(DocumentosVendedorDados value) {
        return service.save(value);
    }

    public DocumentosVendedorDados findById(Long id) {
        return service.findById(id).get();
    }

    public List<DocumentosVendedorDados> findAll() {
        return service.findAll();
    }

//    public List<DocumentosProponenteDados> findByDocumentoAndPessoa(Long documento_id, Long pessoa_id) {
//        return service.findByDocumentoAndPessoa(documento_id, pessoa_id);
//    }

    public void deleteById(Long id) {
        service.deleteById(id);
    }

    public void delete(DocumentosVendedorDados value) {
        service.delete(value);
    }

}
