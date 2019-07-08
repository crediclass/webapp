/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.DocumentosVendedor;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Repository
public interface DocumentosVendedorRepository extends JpaRepository<DocumentosVendedor, Long> {

    List<DocumentosVendedor> findByOrderByOrdenamentoAsc();

    //@Query("select g from GrupoConsorcio g left join g.lances LanceConsorcio join LanceConsorcio.periodo PeriodoLances WHERE g.administradora.id = :administradora_id OR PeriodoLances.valor = :valor")
    @Query("SELECT c.id as  id, c.ordenamento as ordenamento, c.descricao as descricao, c.validade, DocumentoAgrupamento.id, DocumentoAgrupamento.nomeAgrupamento  FROM DocumentosVendedor as c JOIN c.agrupamento DocumentoAgrupamento  ORDER BY 4,2")
    List<DocumentosVendedor> listarTodos(); 

}
