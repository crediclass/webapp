/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.DocumentoAgrupamento;
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
public interface DocumentoAgrupamentoRepository extends JpaRepository<DocumentoAgrupamento, Long> {
    List<DocumentoAgrupamento> findByOrderByOrdenamentoAsc();
    
   
    @Query("SELECT c "
            + "FROM DocumentoAgrupamento as c "
            + "JOIN c.documentosProponente DocumentosProponente "
            + "JOIN DocumentosProponente.documento DocumentosProponenteDados "
            + "JOIN DocumentosProponenteDados.pessoaFisica PessoaFisica  "
            + "WHERE PessoaFisica.id = :pessoa")
    List<DocumentoAgrupamento> findByDocumentosProponenteDocumentoPessoaFisicaId(@Param("pessoa") Long pessoa);
    
    @Query("SELECT c "
            + "FROM DocumentoAgrupamento as c "
            + "JOIN c.documentosVendedor DocumentosVendedor "
            + "JOIN DocumentosVendedor.documento DocumentosVendedorDados "
            + "JOIN DocumentosVendedorDados.pessoaFisica PessoaFisica  "
            + "WHERE PessoaFisica.id = :pessoa")
    List<DocumentoAgrupamento> findByDocumentosVendedorDocumentoPessoaFisicaId(@Param("pessoa") Long pessoa);
    
    @Query("SELECT c "
            + "FROM DocumentoAgrupamento as c "
            + "JOIN c.documentosProcurador DocumentosProcurador "
            + "JOIN DocumentosProcurador.documento DocumentosProcuradorDados "
            + "JOIN DocumentosProcuradorDados.pessoaFisica PessoaFisica  "
            + "WHERE PessoaFisica.id = :pessoa")
    List<DocumentoAgrupamento> findByDocumentosProcuradorDocumentoPessoaFisicaId(@Param("pessoa") Long pessoa);
    
    @Query("SELECT c.id as  id, c.ordenamento as ordenamento, c.nomeAgrupamento as nomeAgrupamento FROM DocumentoAgrupamento as c ORDER BY 2")
    List<DocumentoAgrupamento> listarTodos();
    
    
    
    

}
