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

    @Query(value = "SELECT\n"
            + "A.id,\n"
            + "A.nome_agrupamento,\n"
            + "A.ordenamento,\n"
            + "V.id,\n"
            + "V.descricao,\n"
            + "V.ordenamento,\n"
            + "V.validade,\n"
            + "V.agrupamento_id,\n"
            + "D.id,\n"
            + "D.data_emissao,\n"
            + "D.data_recimento,\n"
            + "D.data_validade,\n"
            + "D.observacoes,\n"
            + "D.documento_id,\n"
            + "D.pessoa_fisica_id,\n"
            + "P.id \n"
            + "FROM\n"
            + "console_docs_agrupamento AS A\n"
            + "RIGHT JOIN console_docs_proponente AS V ON V.agrupamento_id = A.id\n"
            + "RIGHT JOIN console_docs_proponente_dados AS D ON D.documento_id = V.id\n"
            + "INNER JOIN console_pessoa_fisica AS P ON D.pessoa_fisica_id = P.id \n"
            + "WHERE\n"
            + "P.id = 1", nativeQuery = true)
    List<DocumentoAgrupamento> findByDocumentosProponenteDocumentoPessoaFisicaId(@Param("pessoa") Long pessoa);

    @Query(value = "SELECT\n"
            + "A.id,\n"
            + "A.nome_agrupamento,\n"
            + "A.ordenamento,\n"
            + "V.id,\n"
            + "V.descricao,\n"
            + "V.ordenamento,\n"
            + "V.validade,\n"
            + "V.agrupamento_id,\n"
            + "D.id,\n"
            + "D.data_emissao,\n"
            + "D.data_recimento,\n"
            + "D.data_validade,\n"
            + "D.observacoes,\n"
            + "D.documento_id,\n"
            + "D.pessoa_fisica_id,\n"
            + "P.id \n"
            + "FROM\n"
            + "console_docs_agrupamento AS A\n"
            + "RIGHT JOIN console_docs_vendedor AS V ON V.agrupamento_id = A.id\n"
            + "RIGHT JOIN console_docs_vendedor_dados AS D ON D.documento_id = V.id\n"
            + "INNER JOIN console_pessoa_fisica AS P ON D.pessoa_fisica_id = P.id \n"
            + "WHERE\n"
            + "P.id = :pessoa", nativeQuery = true)
    List<DocumentoAgrupamento> findByDocumentosVendedorDocumentoPessoaFisicaId(@Param("pessoa") Long pessoa);
    
    
    @Query(value = "SELECT A.id, "
            + "A.nome_agrupamento, "
            + "A.ordenamento, "
            + "V.ID, "
            + "V.descricao, "
            + "V.ordenamento, "
            + "V.validade, "
            + "D.ID, "
            + "D.data_emissao, "
            + "D.data_recimento, "
            + "D.data_validade,"
            + "D.observacoes, D.documento_id, D.oportunidade_id, P.ID "
            + "FROM console_docs_agrupamento as A "
            + "RIGHT JOIN console_docs_bem_objeto AS V ON V.agrupamento_id = A.id "
            + "RIGHT JOIN console_docs_bem_objeto_dados AS D ON D.documento_id = V.id "
            + "INNER JOIN console_oportunidade AS P ON D.oportunidade_id = P.ID WHERE P.ID = :oportunidade", nativeQuery = true)
    List<DocumentoAgrupamento> findByDocumentosBemObjetoDocumentoOportunidadeId(@Param("oportunidade") Long oportunidade);
    
        @Query(value = "SELECT A.id, "
            + "A.nome_agrupamento, "
            + "A.ordenamento, "
            + "V.ID, "
            + "V.descricao, "
            + "V.ordenamento, "
            + "V.validade, "
            + "D.ID, "
            + "D.data_emissao, "
            + "D.data_recimento, "
            + "D.data_validade,"
            + "D.observacoes, D.documento_id, D.oportunidade_id, P.ID "
            + "FROM console_docs_agrupamento as A "
            + "RIGHT JOIN console_docs_operacao AS V ON V.agrupamento_id = A.id "
            + "RIGHT JOIN console_docs_operacao_dados AS D ON D.documento_id = V.id "
            + "INNER JOIN console_oportunidade AS P ON D.oportunidade_id = P.ID WHERE P.ID = :oportunidade", nativeQuery = true)
    List<DocumentoAgrupamento> findByDocumentosOperacaoDocumentoOportunidadeId(@Param("oportunidade") Long oportunidade);
    

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
