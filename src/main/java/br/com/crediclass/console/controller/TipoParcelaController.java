/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crediclass.console.controller;

import br.com.crediclass.console.domain.Administradora;
import br.com.crediclass.console.domain.TipoParcela;
import br.com.crediclass.console.service.TipoParcelaService;
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
@RequestMapping("/api/consorcio/tipo-parcela")
public class TipoParcelaController {

    @Autowired
    private TipoParcelaService service;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{userId}") // call ... console/consorcio/administradoras/1
    public ResponseEntity<TipoParcela> findById(@PathVariable Long userId) {
       
        return new ResponseEntity<>(service.findById(userId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TipoParcela> save(@RequestBody TipoParcela value) {
        return new ResponseEntity<>(service.save(value), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<TipoParcela> update(@RequestBody TipoParcela value) {
        return new ResponseEntity<>(service.save(value), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestBody TipoParcela value) {
        service.delete(value);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @DeleteMapping(path = "/{userId}")
    public ResponseEntity<?> deleteById(@PathVariable Long userId) {
        service.delete(service.findById(userId));
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
