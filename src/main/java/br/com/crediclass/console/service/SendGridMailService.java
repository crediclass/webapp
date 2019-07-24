/*
 * Copyright 20019 de CrediClass - Aquisições Inteligentes.
 * Este software é de propriedade da CrediClass - Aquisições Inteligentes, 
 * sendo desenvolvido e mantido exclusivamente por esta empresa.
 */
package br.com.crediclass.console.service;

import br.com.crediclass.console.domain.Usuario;
import br.com.crediclass.console.repository.ProponenteRepository;
import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import com.sendgrid.helpers.mail.objects.Personalization;
import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Service
public class SendGridMailService {

    SendGrid sendGrid;

    @Autowired
    ProponenteRepository service;

    @Autowired
    UsuarioService usuarioService;

    public SendGridMailService(SendGrid sendGrid) {
        this.sendGrid = sendGrid;
    }

    @Value("${templateId}")
    private String EMAIL_TEMPLATE_ID;

    public void sendMail() {
        Email from = new Email("naoresponder@crediclass.com.br");
        String subject = "Sending with SendGrid is Fun";
        // Email to = new Email("contato@fabianofernandes.adm.br");
        Email to = new Email("naoresponder@crediclass.com.br");
        List<?> documentos = service.getDocumentosVencidos();

        Personalization p1 = new Personalization();
        List<Usuario> usuarios = usuarioService.getUsuarioDocumentoVencidoNotificacao();
        
        for(Usuario usuario : usuarios){
            p1.addTo(new Email(usuario.getEmail()));
        }
        Content content = new Content("text/html", "Hello, <strong>how are you doing?</strong>");
        Mail mail = new Mail(from, subject, to, content);
        mail.addPersonalization(p1);
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
