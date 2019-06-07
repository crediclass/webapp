/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;
import javax.persistence.Column;
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
@Table(name = "console_composicao_parcela")
public class ComposicaoParcelas implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;   
    
    private String parcela;
        
    private Integer intervalo_parcela;
        
    @Column(nullable = true, columnDefinition = "DECIMAL(7,6)")
    private BigDecimal tx_administracao;
    
    @Column(nullable = true, columnDefinition = "DECIMAL(7,6)")
    private BigDecimal tx_administracao_mensal;
    
    @Column(nullable = true, columnDefinition = "DECIMAL(7,6)")
    private BigDecimal tx_fundo_comum;
    
    @Column(nullable = true, columnDefinition = "DECIMAL(7,6)")
    private BigDecimal tx_fundo_reserva;
    
    @Column(nullable = true, columnDefinition = "DECIMAL(7,6)")
    private BigDecimal tx_total;
    


    @Override
    public int hashCode() {
        int hash = 5;
        hash = 89 * hash + Objects.hashCode(this.id);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final ComposicaoParcelas other = (ComposicaoParcelas) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

    
}
