/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.ComposicaoParcelasView;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
public interface ComposicaoParcelasViewRepository extends JpaRepository<ComposicaoParcelasView, Long> {
    
  
    
    @Query("SELECT c FROM ComposicaoParcelasView c WHERE c.grupo_id = :grupo_id")
    List <ComposicaoParcelasView> findGroupId(@Param("grupo_id") Long grupo_id);
    
}
