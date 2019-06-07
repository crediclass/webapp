/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 */
package br.com.crediclass.console.domain;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "console_dados_bancario_pf")
public class DadosBancariosPessoaFisica implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "banco_id")
    private Banco banco;
    
    private String numAgencia;
    
    private String digitoAgencia;
    
    private String numConta;
    
    private String digitoConta;
    

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 97 * hash + Objects.hashCode(this.id);
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
        final DadosBancariosPessoaFisica other = (DadosBancariosPessoaFisica) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }
    
    
    

}
