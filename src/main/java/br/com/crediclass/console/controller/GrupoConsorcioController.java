/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crediclass.console.controller;

import br.com.crediclass.console.domain.GrupoConsorcio;
import br.com.crediclass.console.service.GrupoConsorcioService;
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
@RequestMapping("/console/consorcio/grupos")
public class GrupoConsorcioController {

    @Autowired
    private GrupoConsorcioService grupoConsorcioService;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(grupoConsorcioService.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{userId}") // call ... console/consorcio/administradoras/1
    public ResponseEntity<GrupoConsorcio> findById(@PathVariable Long userId) {

        return new ResponseEntity<>(grupoConsorcioService.findById(userId), HttpStatus.OK);
    }

    @GetMapping(path = "/administradora/{administradoraId}") // call ... console/consorcio/administradoras/1
    public ResponseEntity<?> findByAdministradoraId(@PathVariable Long administradoraId) {

        return new ResponseEntity<>(grupoConsorcioService.findAdminisradoraId(administradoraId), HttpStatus.OK);
    }

    @GetMapping(path = "/periodo/{valor}") // call ... console/consorcio/administradoras/1
    public ResponseEntity<?> findPeriodoLances(@PathVariable String valor) {

        return new ResponseEntity<>(grupoConsorcioService.findPeriodoLances(valor), HttpStatus.OK);
    }
    
    @GetMapping(path = "/administradora/periodo") // call console/consorcio/grupos/administradora/periodo?administradora=2&periodo=Mar-19
    public ResponseEntity<?> findAdministradoraAndLances(@RequestParam(value="administradora") Long administradora, @RequestParam(value="periodo") String periodo) {

        return new ResponseEntity<>(grupoConsorcioService.findAdministradoraAndLances(administradora,periodo), HttpStatus.OK);
    }
    
      
    
  

    @PostMapping
    public ResponseEntity<GrupoConsorcio> save(@RequestBody GrupoConsorcio grupo) {
        return new ResponseEntity<>(grupoConsorcioService.save(grupo), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<GrupoConsorcio> update(@RequestBody GrupoConsorcio grupo) {
        return new ResponseEntity<>(grupoConsorcioService.save(grupo), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestBody GrupoConsorcio grupo) {
        grupoConsorcioService.delete(grupo);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
