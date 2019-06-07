/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crediclass.console.controller;

import br.com.crediclass.console.service.ComposicaoParcelasViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@RestController
@RequestMapping("/api/consorcio/composicao-parcelas")
public class ComposicaoParcelasViewController {

    @Autowired
    private ComposicaoParcelasViewService service;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{grupoId}") // call ... /api/consorcio/composicao-parcelas/1
    public ResponseEntity<?> findGroupId(@PathVariable Long grupoId ){
       
        return new ResponseEntity<>(service.findGroupId(grupoId), HttpStatus.OK);
    }



}
