/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.DocumentoAgrupamento;
import br.com.crediclass.console.repository.DocumentoAgrupamentoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Service
public class DocumentoAgrupamentoService {

    @Autowired
    private DocumentoAgrupamentoRepository service;

    public DocumentoAgrupamento save(DocumentoAgrupamento value) {
        return service.save(value);
    }

    public DocumentoAgrupamento findById(Long id) {
        return service.findById(id).get();
    }

    public List<DocumentoAgrupamento> listarTodos() {
        return service.listarTodos();
    }

    public List<DocumentoAgrupamento> findAll() {
        return service.findByOrderByOrdenamentoAsc();
    }

    public List<DocumentoAgrupamento> findByDocumentosProponenteDocumentoPessoaFisicaId(Long id) {
        return service.findByDocumentosProponenteDocumentoPessoaFisicaId(id);
    }
    public List<DocumentoAgrupamento> findByDocumentosVendedorDocumentoPessoaFisicaId(Long id) {
        return service.findByDocumentosVendedorDocumentoPessoaFisicaId(id);
    }
    public List<DocumentoAgrupamento> findByDocumentosProcuradorDocumentoPessoaFisicaId(Long id) {
        return service.findByDocumentosProcuradorDocumentoPessoaFisicaId(id);
    }
    public List<DocumentoAgrupamento> findByDocumentosBemObjetoDocumentoOportunidadeId(Long id) {
        return service.findByDocumentosBemObjetoDocumentoOportunidadeId(id);
    }
    public List<DocumentoAgrupamento> findByDocumentosOperacaoDocumentoOportunidadeId(Long id) {
        return service.findByDocumentosOperacaoDocumentoOportunidadeId(id);
    }

    public void deleteById(Long id) {
        service.deleteById(id);
    }

    public void delete(DocumentoAgrupamento value) {
        service.delete(value);
    }

}
