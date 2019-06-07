/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.Usuario;
import br.com.crediclass.console.repository.UsuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;
 
    public Usuario save(Usuario usuario) {

        return usuarioRepository.save(usuario);
    }

    public Usuario findByUsername(String username) {
        return usuarioRepository.findByUsername(username);
    }

    public Usuario findById(Long id) {
        return usuarioRepository.findById(id).get();
    }

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public void deleteById(Long id) {
        usuarioRepository.deleteById(id);
    }

    public void delete(Usuario usuario) {
        usuarioRepository.delete(usuario);
    }
}
