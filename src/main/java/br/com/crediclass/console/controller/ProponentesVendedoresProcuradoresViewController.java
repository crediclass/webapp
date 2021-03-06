/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crediclass.console.controller;

import br.com.crediclass.console.service.ProponentesVendedoresProcuradoresViewService;
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
@RequestMapping("api/modulo-gi/proponentes-vendedores-procuradores")
public class ProponentesVendedoresProcuradoresViewController {

    @Autowired
    private ProponentesVendedoresProcuradoresViewService service;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{oportunidadeId}") // call ... console/consorcio/administradoras/1
    public ResponseEntity<?> findById(@PathVariable Long oportunidadeId ){
       
        return new ResponseEntity<>(service.findByOportunidadeId(oportunidadeId), HttpStatus.OK);
    }



}
