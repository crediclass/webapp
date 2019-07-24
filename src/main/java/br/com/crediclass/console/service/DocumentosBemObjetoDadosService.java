/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.DocumentosBemObjetoDados;
import br.com.crediclass.console.repository.DocumentosBemObjetoDadosRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Service
public class DocumentosBemObjetoDadosService {

    @Autowired
    private DocumentosBemObjetoDadosRepository service;

    public DocumentosBemObjetoDados save(DocumentosBemObjetoDados value) {
        return service.save(value);
    }

    public DocumentosBemObjetoDados findById(Long id) {
        return service.findById(id).get();
    }

    public List<DocumentosBemObjetoDados> findAll() {
        return service.findAll();
    }

//    public List<DocumentosProponenteDados> findByDocumentoAndPessoa(Long documento_id, Long pessoa_id) {
//        return service.findByDocumentoAndPessoa(documento_id, pessoa_id);
//    }

    public void deleteById(Long id) {
        service.deleteById(id);
    }

    public void delete(DocumentosBemObjetoDados value) {
        service.delete(value);
    }

}
