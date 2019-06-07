/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.controller;

import br.com.crediclass.console.domain.PessoaJuridica;
import br.com.crediclass.console.service.PessoaJuridicaService;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@RestController
@RequestMapping("/api/modulo-gi/pessoa-juridica")
public class PessoaJuridicaController {

    @Autowired
    private PessoaJuridicaService service;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{userId}") // call ... api/consorcio/indexadores/1
    public ResponseEntity<PessoaJuridica> findById(@PathVariable Long userId) {

        return new ResponseEntity<>(service.findById(userId), HttpStatus.OK);
    }

    @GetMapping(path = "/cnpj") // call ... api/modulo-gi/pessoa-juridica/cnpj?cnpj=222.222.222/2222-22
    public ResponseEntity<PessoaJuridica> findByCpf(@RequestParam(value="cnpj") String cnpj) {

        return new ResponseEntity<>(service.findByCnpj(cnpj), HttpStatus.OK);
    }
       

    @PostMapping
    public ResponseEntity<PessoaJuridica> save(@RequestBody PessoaJuridica value) {
        return new ResponseEntity<>(service.save(value), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<PessoaJuridica> update(@RequestBody PessoaJuridica value) {
        return new ResponseEntity<>(service.save(value), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestBody PessoaJuridica value) {
        service.delete(value);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(path = "/{userId}")
    public ResponseEntity<?> deleteById(@PathVariable Long userId) {
        service.delete(service.findById(userId));
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
