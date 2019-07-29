/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 *
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 *
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.Oportunidade;
import br.com.crediclass.console.domain.InformacaoPiperun;
import br.com.crediclass.console.domain.PessoaFisica;
import br.com.crediclass.console.domain.Proponente;
import br.com.crediclass.console.repository.OportunidadeRepository;
import br.com.crediclass.console.repository.PessoaFisicaRepository;
import br.com.crediclass.console.repository.ProponenteRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Service
public class OportunidadeService {

    @Autowired
    private OportunidadeRepository serviceOportunidade;

    @Autowired
    private ProponenteRepository serviceProponente;

    @Autowired
    private PessoaFisicaRepository servicePessoaFisica;

    public Oportunidade save(Oportunidade value) {
        return serviceOportunidade.save(value);
    }

    public Oportunidade saveOportunidadePiperun(InformacaoPiperun value) {

        Oportunidade oportunidade = serviceOportunidade.findByHash(value.getHash());

        if (oportunidade == null) {
            //System.out.println("Objeto não existe");
            oportunidade = new Oportunidade();
            oportunidade.setHash(value.getHash());
        }
        oportunidade.setPiperunId(value.getId());
        oportunidade.setDono(value.getUser().getName());
        oportunidade.setTitulo(value.getTitle());
        oportunidade.setOrigem(value.getOrigin().getName());
        oportunidade.setNomeFunil(value.getStage().getName());
        oportunidade.setEstapaFunil(value.getPipeline().getName());
        
//
//        // Verifica se o cpf está cadastrado no Piperun, caso não esteja não cria a pessoa fisica no banco
//        if (value.getPerson().getCpf()!= null) {
//            // Vincula a pessoa fisica, porém é necessário que o cliente esteja com CPF cadastrado no Piperun
//            PessoaFisica pessoaFisica = servicePessoaFisica.findByCpf(value.getPerson().getCpf());
//
//            // verifica se a pessoa já está cadastrada no banco, senão cria um novo objeto
//            if (pessoaFisica == null) {
//                pessoaFisica = new PessoaFisica();
//                pessoaFisica.setCpf(value.getPerson().getCpf());
//            }
//
//            pessoaFisica.setNome(value.getPerson().getName());
//            pessoaFisica.setEmail(value.getPerson().getContact_emails()[0].getAddress());
//
//            PessoaFisica tempPessoa = servicePessoaFisica.save(pessoaFisica);
//
//            Proponente pr = serviceProponente.getPropontente(tempPessoa.getId(), oportunidade.getId());
//
//            if (pr == null) {                
//                pr = new Proponente();
//                pr.setPessoaFisica(tempPessoa);
//                pr.setIsPrincipal(true);
//            }
//            oportunidade.adicionaProponente(pr);
//        }

        serviceOportunidade.save(oportunidade);

        return oportunidade;
    }

    public Oportunidade findById(Long id) {
        return serviceOportunidade.findById(id).get();
    }

    public List<Oportunidade> findAll() {
        return serviceOportunidade.findAll();
    }

    public void deleteById(Long id) {
        serviceOportunidade.deleteById(id);
    }

    public void delete(Oportunidade value) {
        serviceOportunidade.delete(value);
    }

}
