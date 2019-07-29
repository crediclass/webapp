/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crediclass.console.controller;

import br.com.crediclass.console.domain.Administradora;
import br.com.crediclass.console.service.AdministradoraService;
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
@RequestMapping("/api/consorcio/administradoras")
public class AdministradoraController {

    @Autowired
    private AdministradoraService administradoraService;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(administradoraService.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{userId}") // call ... console/consorcio/administradoras/1
    public ResponseEntity<Administradora> findById(@PathVariable Long userId) {
       
        return new ResponseEntity<>(administradoraService.findById(userId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Administradora> save(@RequestBody Administradora administradora) {
        return new ResponseEntity<>(administradoraService.save(administradora), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Administradora> update(@RequestBody Administradora administradora) {
        return new ResponseEntity<>(administradoraService.save(administradora), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestBody Administradora administradora) {
        administradoraService.delete(administradora);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @DeleteMapping(path = "/{userId}")
    public ResponseEntity<?> deleteById(@PathVariable Long userId) {
        administradoraService.delete(administradoraService.findById(userId));
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
