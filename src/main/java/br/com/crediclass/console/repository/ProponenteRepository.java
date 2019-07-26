/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.Proponente;
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
public interface ProponenteRepository extends JpaRepository<Proponente, Long> {
    
    @Query(value = "SELECT * FROM view_docs_vencidos WHERE periodo <= 5", nativeQuery = true)
    List<?> getDocumentosVencidos();
    
    @Query(value = "SELECT * FROM console_proponente WHERE pessoa_fisica_id = :pessoa_id AND oportunidade_id = :oportunidade_id", nativeQuery = true)
    public Proponente getPropontente(@Param("pessoa_id") Long pessoa_id, @Param("oportunidade_id") Long oportunidade_id);
    
    
}
