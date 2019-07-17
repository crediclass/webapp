/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 */
package br.com.crediclass.console.controller;

import br.com.crediclass.console.service.SendGridMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@RestController
public class EmailController {

    @Autowired
    SendGridMailService mailService;
    



    @RequestMapping(path = "/email-send", method = RequestMethod.GET)
    public void sendMail() {
        mailService.sendMail();
        
    }
}
