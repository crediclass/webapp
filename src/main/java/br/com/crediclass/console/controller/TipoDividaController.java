/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.controller;

import br.com.crediclass.console.domain.TipoDivida;
import br.com.crediclass.console.service.TipoDividaService;
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
@RequestMapping("api/modulo-gi/tipo-divida")
public class TipoDividaController {

    @Autowired
    private TipoDividaService service;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{userId}") // call ... api/consorcio/indexadores/1
    public ResponseEntity<?> findById(@PathVariable Long userId) {

        return new ResponseEntity<>(service.findById(userId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody TipoDivida value) {
        return new ResponseEntity<>(service.save(value), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> update(@RequestBody TipoDivida value) {
        return new ResponseEntity<>(service.save(value), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestBody TipoDivida value) {
        service.delete(value);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(path = "/{userId}")
    public ResponseEntity<?> deleteById(@PathVariable Long userId) {
        service.deleteById(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
