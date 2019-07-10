/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 */
package br.com.crediclass.console.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
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
@Table(name = "console_pessoa_fisica")
public class PessoaFisica implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String cpf;

    private String rg;

    private String rgOrgaoEmissor;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date rgDataEmissao;

    private String email;

    private String uf;

    @ManyToOne
    @JoinColumn(name = "conjuge_id")
    private PessoaFisica conjuge;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date data_nascimento;

    @ManyToOne
    @JoinColumn(name = "estado_civil_id")
    private EstadoCivil estadoCivil;

    private String nacionalidade;

    private String naturalidade;
    
    
    private String nomeDaMae;
    
    

//    @ManyToOne
//    @JoinColumn(name = "nacionalidade_id")
//    private Nacionalidade nacionalidade;
//    
    private String telefoneResidencial;

    private String telefoneCelular;

    private String cep;

    private String rua;

    private Integer numero;

    private String complemento;

    private String bairro;

    private String cidade;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "pessoa_fisica_id")
    private List<DadosBancariosPessoaFisica> dadosBancarios = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "pessoa_fisica_id")
    private List<DadosAplicacoesFinanceirasPessoaFisica> dadosAplicacoes = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "pessoa_fisica_id")
    private List<DadosPatrimonioPessoaFisica> dadosPatrimonio = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "pessoa_fisica_id")
    private List<DadosEndividamentoPessoaFisica> dadosEndividamento = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "pessoa_fisica_id")
    private List<DadosRendaPessoaFisica> dadosRenda = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "pessoaFisica", cascade = CascadeType.ALL)
    private List<Proponente> proponentes = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "pessoaFisica", cascade = CascadeType.ALL)
    private List<Vendedor> vendedores = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "outorgante", cascade = CascadeType.ALL)
    private List<Procurador> outorgantes = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "outorgado", cascade = CascadeType.ALL)
    private List<Procurador> outorgados = new ArrayList<>();

    @OneToMany(mappedBy = "pessoaFisica")
    @JsonIgnore
    private List<DocumentosProponenteDados> documentoProponente;

    @OneToMany(mappedBy = "pessoaFisica")
    @JsonIgnore
    private List<DocumentosVendedorDados> documentoVendedor;

    @OneToMany(mappedBy = "pessoaFisica")
    @JsonIgnore
    private List<DocumentosProcuradorDados> documentoProcurador;

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 83 * hash + Objects.hashCode(this.id);
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
        final PessoaFisica other = (PessoaFisica) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

}
