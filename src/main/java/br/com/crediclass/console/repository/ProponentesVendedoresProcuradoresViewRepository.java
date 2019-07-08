/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.ProponentesVendedoresProcuradoresView;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
public interface ProponentesVendedoresProcuradoresViewRepository extends JpaRepository<ProponentesVendedoresProcuradoresView, Long> {
    
    
    @Query("SELECT c FROM ProponentesVendedoresProcuradoresView c WHERE c.oportunidade_id = :oportunidade_id")
    List<ProponentesVendedoresProcuradoresView> findByOportunidadeId(@Param("oportunidade_id") Long oportunidade_id);
    

}
