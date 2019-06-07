/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.Usuario;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Usuario findUsuarioByEmail(String email);

    Usuario findByUsername(String username);

    @Query("Select u from Usuario u where upper(u.nome) like concat('%',upper(:nome),'%')  or upper(u.email) like concat('%',upper(:email),'%') ")
    List<Usuario> findUsers(@Param("nome") String nome, @Param("email") String email);

}
