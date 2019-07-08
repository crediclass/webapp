/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.controller;

import br.com.crediclass.console.domain.DocumentosVendedorDados;
import br.com.crediclass.console.service.DocumentosVendedorDadosService;
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
@RequestMapping("api/modulo-gi/doc-vendedor-dados")
public class DocumentosVendedorDadosController {

    @Autowired
    private DocumentosVendedorDadosService service;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{userId}")
    public ResponseEntity<DocumentosVendedorDados> findById(@PathVariable Long userId) {

        return new ResponseEntity<>(service.findById(userId), HttpStatus.OK);
    }

//    @GetMapping(path = "/listar") // call api/modulo-gi/doc-proponente-dados/listar?documento=2&pessoa=1
//    public ResponseEntity<?> findByDocumentoAndPessoa(@RequestParam(value = "documento") Long documento, @RequestParam(value = "pessoa") Long pessoa) {
//
//        return new ResponseEntity<>(service.findByDocumentoAndPessoa(documento, pessoa), HttpStatus.OK);
//    }

    @PostMapping
    public ResponseEntity<DocumentosVendedorDados> save(@RequestBody DocumentosVendedorDados value) {
        return new ResponseEntity<>(service.save(value), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<DocumentosVendedorDados> update(@RequestBody DocumentosVendedorDados value) {
        return new ResponseEntity<>(service.save(value), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestBody DocumentosVendedorDados value) {
        service.delete(value);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(path = "/{userId}")
    public ResponseEntity<?> deleteById(@PathVariable Long userId) {
        service.delete(service.findById(userId));
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
