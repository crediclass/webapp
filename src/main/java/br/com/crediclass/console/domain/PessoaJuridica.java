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
@Table(name = "console_pessoa_juridica")
public class PessoaJuridica implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeFantasia;

    private String razaoSocial;

    private String cnpj;

    private String inscricaoEstatual;

    private String formatoJuridico;

    private String ramoAtividade;

    private String email;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dataFundacao;

    private String telefoneFixo;

    private String telefoneCelular;

    private String cep;

    private String rua;

    private Integer numero;

    private String complemento;

    private String bairro;

    private String cidade;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "pessoa_juridica_id")
    private List<DadosFormacaoSocietariaJuridica> formacaoSocietaria = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "pessoa_juridica_id")
    private List<DadosParticipacaoEmpresasJuridica> participacaoEmpresas = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "pessoa_juridica_id")
    private List<DadosBancariosPessoaJuridica> dadosBancarios = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "pessoa_juridica_id")
    private List<DadosAplicacoesFinanceirasPessoaJuridica> dadosAplicacoes = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "pessoa_juridica_id")
    private List<DadosPatrimonioPessoaJuridica> dadosPatrimonio = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "pessoa_juridica_id")
    private List<DadosEndividamentoPessoaJuridica> dadosEndividamento = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "pessoa_juridica_id")
    private List<DadosRendaPessoaJuridica> dadosRenda = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "pessoaJuridica", cascade = CascadeType.ALL)
    private List<Proponente> proponentes = new ArrayList<>();    

    @JsonIgnore
    @OneToMany(mappedBy = "pessoaJuridica", cascade = CascadeType.ALL)
    private List<Vendedor> vendedores = new ArrayList<>();   
    
//    @JsonIgnore
//    @OneToMany(mappedBy = "proponentePessoaJuridica")
//    private List<DocumentosProponenteDados> proponentePessoaJuridica;    

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
        final PessoaJuridica other = (PessoaJuridica) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

}
