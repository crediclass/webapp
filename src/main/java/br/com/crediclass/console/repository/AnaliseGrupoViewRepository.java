/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.AnaliseGrupoView;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
public interface AnaliseGrupoViewRepository extends JpaRepository<AnaliseGrupoView, Long> {
    
}
