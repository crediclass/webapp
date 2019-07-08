/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.GrupoConsorcio;
import br.com.crediclass.console.repository.GrupoConsorcioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Service
public class GrupoConsorcioService {

    @Autowired
    private GrupoConsorcioRepository service;

    public GrupoConsorcio save(GrupoConsorcio grupo) {
        GrupoConsorcio g = service.save(grupo);
        int temp = atualizaTaxasComposicaoParcela();
        System.out.println("Fabiano " + temp);
        return g;
    }

    public GrupoConsorcio findById(Long id) {
        return service.findById(id).get();
    }

    public List<GrupoConsorcio> findAll() {
        return service.findAll();

    }

    public List<GrupoConsorcio> findAdminisradoraId(Long id) {
        return service.findAdminisradoraId(id);

    }

    public List<GrupoConsorcio> findPeriodoLances(String valor) {
        return service.findPeriodoLances(valor);

    }

    public List<GrupoConsorcio> findAdministradoraAndLances(Long administradora, String periodo) {
        return service.findAdministradoraAndLances(administradora, periodo);

    }
    
    private Integer atualizaTaxasComposicaoParcela() {
        return service.atualizaTaxasComposicaoParcela();
    }    
        

    public void deleteById(Long id) {
        service.deleteById(id);
    }

    public void delete(GrupoConsorcio grupo) {
        service.delete(grupo);
    }

}
