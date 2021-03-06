/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.controller;

import br.com.crediclass.console.domain.DocumentoAgrupamento;
import br.com.crediclass.console.service.DocumentoAgrupamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@RestController
@RequestMapping("api/modulo-gi/doc-agrupamento")
public class DocumentoAgrupamentoController {

    @Autowired
    private DocumentoAgrupamentoService service;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }
    @GetMapping(path = "doc-pessoa/{userId}")
    public ResponseEntity<?> findByDocumentosProponenteDocumentoPessoaFisicaId(@PathVariable Long userId) {
        return new ResponseEntity<>(service.findByDocumentosProponenteDocumentoPessoaFisicaId(userId), HttpStatus.OK);
    }
    @GetMapping(path = "doc-vendedor/{userId}")
    public ResponseEntity<?> findByDocumentosVendedorDocumentoPessoaFisicaId(@PathVariable Long userId) {
        return new ResponseEntity<>(service.findByDocumentosVendedorDocumentoPessoaFisicaId(userId), HttpStatus.OK);
    }
    @GetMapping(path = "doc-procurador/{userId}")
    public ResponseEntity<?> findByDocumentosProcuradorDocumentoPessoaFisicaId(@PathVariable Long userId) {
        return new ResponseEntity<>(service.findByDocumentosProcuradorDocumentoPessoaFisicaId(userId), HttpStatus.OK);
    }
    @GetMapping(path = "doc-bem-objeto/{userId}")
    public ResponseEntity<?> findByDocumentosBemObjetoDocumentoOportunidadeId(@PathVariable Long userId) {
        return new ResponseEntity<>(service.findByDocumentosBemObjetoDocumentoOportunidadeId(userId), HttpStatus.OK);
    }
    @GetMapping(path = "doc-operacao/{userId}")
    public ResponseEntity<?> findByDocumentosOperacaoDocumentoOportunidadeId(@PathVariable Long userId) {
        return new ResponseEntity<>(service.findByDocumentosOperacaoDocumentoOportunidadeId(userId), HttpStatus.OK);
    }

    @GetMapping(path = "/{userId}") // call ... api/consorcio/indexadores/1
    public ResponseEntity<DocumentoAgrupamento> findById(@PathVariable Long userId) {

        return new ResponseEntity<>(service.findById(userId), HttpStatus.OK);
    }
    @GetMapping(path = "todos") // call ... api/consorcio/indexadores/1
     public ResponseEntity<?> listarTodos() {
        return new ResponseEntity<>(service.listarTodos(), HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<DocumentoAgrupamento> save(@RequestBody DocumentoAgrupamento value) {
        return new ResponseEntity<>(service.save(value), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<DocumentoAgrupamento> update(@RequestBody DocumentoAgrupamento value) {
        return new ResponseEntity<>(service.save(value), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestBody DocumentoAgrupamento value) {
        service.delete(value);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(path = "/{userId}")
    public ResponseEntity<?> deleteById(@PathVariable Long userId) {
        service.delete(service.findById(userId));
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
