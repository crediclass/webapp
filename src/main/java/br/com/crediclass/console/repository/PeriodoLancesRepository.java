/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.repository;

import br.com.crediclass.console.domain.PeriodoLances;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */

@Repository
public interface PeriodoLancesRepository extends JpaRepository<PeriodoLances, Long> {
    
    public List<PeriodoLances> findAllByOrderByIdDesc(); 
}
