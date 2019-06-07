/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.controller;

import br.com.crediclass.console.domain.PessoaFisica;
import br.com.crediclass.console.service.PessoaFisicaService;
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
@RequestMapping("/api/modulo-gi/pessoa-fisica")
public class PessoaFisicaController {

    @Autowired
    private PessoaFisicaService service;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{userId}") // call ... api/consorcio/indexadores/1
    public ResponseEntity<PessoaFisica> findById(@PathVariable Long userId) {

        return new ResponseEntity<>(service.findById(userId), HttpStatus.OK);
    }
    
    @GetMapping(path = "/cpf/{cpf}") // call ... api/modulo-gi/pessoa-fisica/cpf/264.350.028-86
    public ResponseEntity<PessoaFisica> findByCpf(@PathVariable String cpf) {

        return new ResponseEntity<>(service.findByCpf(cpf), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PessoaFisica> save(@RequestBody PessoaFisica value) {
        
        
        //System.out.println(value.getDadosRenda());
        //return new ResponseEntity<>(new PessoaFisica(), HttpStatus.OK);
        return new ResponseEntity<>(service.save(value), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<PessoaFisica> update(@RequestBody PessoaFisica value) {
        return new ResponseEntity<>(service.save(value), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestBody PessoaFisica value) {
        service.delete(value);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(path = "/{userId}")
    public ResponseEntity<?> deleteById(@PathVariable Long userId) {
        service.delete(service.findById(userId));
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
