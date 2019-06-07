/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import javax.persistence.CascadeType;
import javax.persistence.Column;
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
import lombok.Setter;
import org.springframework.format.annotation.NumberFormat;
import org.springframework.format.annotation.NumberFormat.Style;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Getter
@Setter

@Entity
@Table(name = "console_grupo_consorcio")
public class GrupoConsorcio implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date data_inauguracao;
    

    private String faixa_credito;

    private Integer vencimento;

    private Integer prazo_original;

    //@Formula("(SELECT calcula_prazo_remanescente(g.id, g.data_inauguracao, g.prazo_original) FROM console_grupo_consorcio g LIMIT 1)")
    private Integer prazo_remanescente;

    //@Formula("(SELECT calcula_prazo_decorrido(g.id, g.data_inauguracao) FROM console_grupo_consorcio g LIMIT 1)")
    private Integer prazo_decorrido;

    @Column(nullable = true, columnDefinition = "DECIMAL(5,4)")
    private BigDecimal tx_adminitracao;

    @Column(nullable = true, columnDefinition = "DECIMAL(5,4)")
    private BigDecimal tx_fundo_reserva;

    @Column(nullable = true, columnDefinition = "DECIMAL(7,6)")
    private BigDecimal tx_seguro_prestamista;

    @Column(nullable = true, columnDefinition = "DECIMAL(5,4)")
    private BigDecimal tx_parcela_reduzida;

    @Column(nullable = true, columnDefinition = "DECIMAL(5,6)")
    private BigDecimal tx_lance_embutido;

    @Column(nullable = true, columnDefinition = "DECIMAL(7,6)")
    private BigDecimal tx_lance_fixo;

    private Boolean isSeguro_Opcional;

    @NumberFormat(style = Style.CURRENCY, pattern = "#,##0.00")
    @Column(nullable = true, columnDefinition = "DECIMAL(10,2)")
    private BigDecimal valor_seguro_vida;

    @NumberFormat(style = Style.CURRENCY, pattern = "#,##0.00")
    @Column(nullable = true, columnDefinition = "DECIMAL(10,2)")
    private BigDecimal valor_parcela_reduzida;

    @ManyToOne
    @JoinColumn(name = "administradora_id")
    private Administradora administradora;

    @ManyToOne
    @JoinColumn(name = "indexador_id")
    private Indexador indexador;
    
    @ManyToOne
    @JoinColumn(name = "tipo_parcela_id")
    private TipoParcela tipoParcela;

    //@OneToMany(mappedBy = "grupo", targetEntity = CreditoGrupo.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    //@OneToMany(mappedBy = "grupo", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "grupo_id")
    private List<CreditoGrupo> creditos = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "grupo_id")
    private List<ComposicaoParcelas> parcelas = new ArrayList<>();

    
    @JsonManagedReference
    @OneToMany(mappedBy = "grupo", cascade = CascadeType.ALL)
    //@JoinColumn(name = "grupo_id")
    private List<LanceConsorcio> lances = new ArrayList<>();

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 71 * hash + Objects.hashCode(this.id);
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
        final GrupoConsorcio other = (GrupoConsorcio) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return this.nome;
    }

}
