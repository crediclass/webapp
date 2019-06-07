/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crediclass.console.controller;

import br.com.crediclass.console.domain.Usuario;
import br.com.crediclass.console.service.UsuarioService;
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
@RequestMapping("/console/administracao/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(usuarioService.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{userId}") // call ... console/consorcio/administradoras/1
    public ResponseEntity<Usuario> findById(@PathVariable Long userId) {

        return new ResponseEntity<>(usuarioService.findById(userId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Usuario> save(@RequestBody Usuario usuario) {
        return new ResponseEntity<>(usuarioService.save(usuario), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Usuario> update(@RequestBody Usuario usuario) {
        return new ResponseEntity<>(usuarioService.save(usuario), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestBody Usuario usuario) {
        usuarioService.delete(usuario);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(path = "/{userId}")
    public ResponseEntity<?> deleteById(@PathVariable Long userId) {
        usuarioService.delete(usuarioService.findById(userId));
        return new ResponseEntity<>(HttpStatus.OK);
    }



}
