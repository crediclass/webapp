/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.crediclass.manager;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Fabiano Fernandes <fabiano.fernandes at crediclass.com.br>
 */
@Controller
public class HomeController {

    @GetMapping("/login")
    public String index() {
        return "view/login.html";
    }
//
//    @GetMapping("/home")
//    public String home() {
//        return "index.html";
//    }

    @RequestMapping(value = "/console/**")
    public String redirect() {
        return "forward:/";
    }

}
