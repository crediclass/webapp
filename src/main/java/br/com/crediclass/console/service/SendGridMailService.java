/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 */
package br.com.crediclass.console.service;

import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Service
public class SendGridMailService {

    SendGrid sendGrid;

    public SendGridMailService(SendGrid sendGrid) {
        this.sendGrid = sendGrid;
    }

    @Value("${templateId}")
    private String EMAIL_TEMPLATE_ID;

    public void sendMail() {
        Email from = new Email("naoresponder@crediclass.com.br");
        String subject = "Sending with SendGrid is Fun";
       // Email to = new Email("contato@fabianofernandes.adm.br");
        Email to = new Email("tavares@crediclass.com.br");
        Content content = new Content("text/html", "Hello, <strong>how are you doing?</strong>");
        Mail mail = new Mail(from, subject, to, content);
        //mail.personalization.get(0).addSubstitution("-cliente-", "Example User");
       //mail.personalization.get(0).addSubstitution("-documento-", "Example User");
        // mail.personalization.get(0).addSubstitution("-cliente-", "Fabiano Fernandes");
        mail.setTemplateId(EMAIL_TEMPLATE_ID);

        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = this.sendGrid.api(request);
            sendGrid.api(request);

            // ...
        } catch (IOException ex) {
            // ...
        }
    }
}
