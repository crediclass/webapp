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
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "view_analise_grupo")
public class AnaliseGrupoView implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String administradora;
    private String grupo;
    private Integer prazo_original;
    private Integer prazo_remanescente;
    private BigDecimal tx_adminitracao;
    private BigDecimal tx_administracao_anual;
    private BigDecimal tx_lance_embutido;
    private BigDecimal tx_parcela_reduzida;
     private BigDecimal tx_fundo_reserva;
     private BigDecimal tx_lance_fixo;
    private Boolean isSeguro_Opcional;  
    private String tipo_parcela;
    private String indexador;    
    private String faixa_credito;
    private Integer vencimento;
    
    
    

}
