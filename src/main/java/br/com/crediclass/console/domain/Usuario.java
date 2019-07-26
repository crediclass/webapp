/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.domain;

import java.io.Serializable;
import java.util.Objects;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Getter
@Setter
@Entity
@Table(name = "console_usuario")
public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;  
    private String email;
    private String username;
    @Setter(AccessLevel.NONE) private String password;
    private String telefone;
    private String foto;
    private Boolean enabled;
    @Column(name = "is_admin")
    private Boolean isAdmin;
    private Boolean isDocumentoVencido;
    private Boolean isGrupoVencido;
    
    @Transient
    private String name;    
    

    public void setPassword(String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();		
        this.password =  passwordEncoder.encode(password);
    }
    
    
    
    

    @JoinTable(name = "console_permissao_x_usuario",
            joinColumns = {
                @JoinColumn(name = "id_usuario", referencedColumnName = "id")},
            inverseJoinColumns = {
                @JoinColumn(name = "id_permissao", referencedColumnName = "id")}
    )
    @ManyToMany()
    private Set<Permissao> permissao;

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 29 * hash + Objects.hashCode(this.id);
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
        final Usuario other = (Usuario) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

}
