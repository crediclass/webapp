/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crediclass.console.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.util.ArrayList;
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
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Getter
@Setter

@Entity
@Table(name = "console_lance_consorcio")
public class LanceConsorcio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "qtde_contemplados")
    private Integer qtdeContemplados = 0;

    @Column(name = "valor_lance")
    private Integer valorLance = 0;

    @Column(name = "qtde_ofertas")
    private Integer qtdeOfertas = 0;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "lance_id")
    private List<DetalheLance> detalhes = new ArrayList<>();

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "grupo_id", nullable = false)
    private GrupoConsorcio grupo;

    @ManyToOne
    @JoinColumn(name = "periodo_id")
    private PeriodoLances periodo;

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 23 * hash + Objects.hashCode(this.id);
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
        final LanceConsorcio other = (LanceConsorcio) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

}
