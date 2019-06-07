/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crediclass.console.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Getter
@Setter

@Entity
@Table(name = "view_composicao_parcela")
public class ComposicaoParcelasView implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long grupo_id;
   // private String grupo;
   // private String administradora;
   // private Boolean is_seguro_opcional;
   // private String tipo_parcela;
   // private Integer prazo_decorrido;
   // private Integer prazo_remanescente;
    private String parcela;
   // private BigDecimal tx_administracao;
   // private BigDecimal tx_fundo_comum;
   // private BigDecimal tx_fundo_reserva;
   // private BigDecimal tx_total;
    private BigDecimal credito;
    private BigDecimal parcela_sem_seguro;
    private BigDecimal parcela_com_seguro;
   // private BigDecimal lance_embutido;

}
