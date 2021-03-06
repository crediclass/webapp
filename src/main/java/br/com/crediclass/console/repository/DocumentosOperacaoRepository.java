/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.DocumentosOperacao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Repository
public interface DocumentosOperacaoRepository extends JpaRepository<DocumentosOperacao, Long> {

    List<DocumentosOperacao> findByOrderByOrdenamentoAsc();

//    //@Query("select g from GrupoConsorcio g left join g.lances LanceConsorcio join LanceConsorcio.periodo PeriodoLances WHERE g.administradora.id = :administradora_id OR PeriodoLances.valor = :valor")
    @Query("SELECT c.id as  id, c.ordenamento as ordenamento, c.descricao as descricao, c.validade, DocumentoAgrupamento.id, DocumentoAgrupamento.nomeAgrupamento  FROM DocumentosOperacao as c JOIN c.agrupamento DocumentoAgrupamento  ORDER BY 4,2")
    List<DocumentosOperacao> listarTodos(); 

}
