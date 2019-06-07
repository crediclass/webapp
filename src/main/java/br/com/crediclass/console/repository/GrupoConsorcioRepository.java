/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.GrupoConsorcio;
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
public interface GrupoConsorcioRepository extends JpaRepository<GrupoConsorcio, Long> {

    @Query("SELECT c FROM GrupoConsorcio c WHERE c.administradora.id = :administradora_id")
    List<GrupoConsorcio> findAdminisradoraId(@Param("administradora_id") Long administradora_id);
    

    
    @Query("select g from GrupoConsorcio g left join g.lances LanceConsorcio join LanceConsorcio.periodo PeriodoLances WHERE g.administradora.id = :administradora_id OR PeriodoLances.valor = :valor")
    List<GrupoConsorcio> findAdministradoraAndLances(@Param("administradora_id") Long administradora_id, @Param("valor") String valor);
    
    
    @Query("select g from GrupoConsorcio g join g.lances LanceConsorcio join LanceConsorcio.periodo PeriodoLances WHERE PeriodoLances.valor = :valor")
    List<GrupoConsorcio> findPeriodoLances(@Param("valor") String valor);


}
