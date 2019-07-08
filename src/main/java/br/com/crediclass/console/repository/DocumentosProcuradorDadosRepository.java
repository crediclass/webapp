/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.DocumentosProcuradorDados;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Repository
public interface DocumentosProcuradorDadosRepository extends JpaRepository<DocumentosProcuradorDados, Long> {
    
    
//    @Query("SELECT d FROM DocumentosProponenteDados d WHERE d.documento.id = :documento_id AND d.pessoaFisica.id = :pessoa_id")
//    List<DocumentosProponenteDados> findByDocumentoAndPessoa(@Param("documento_id") Long documento_id, @Param("pessoa_id") Long pessoa_id);
//     
//    
}
