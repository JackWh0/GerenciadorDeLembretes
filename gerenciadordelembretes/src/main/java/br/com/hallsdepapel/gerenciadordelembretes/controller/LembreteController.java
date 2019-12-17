package br.com.hallsdepapel.gerenciadordelembretes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import br.com.hallsdepapel.gerenciadordelembretes.model.Lembrete;
import br.com.hallsdepapel.gerenciadordelembretes.repository.LembreteRepository;

@Controller
public class LembreteController{

    @Autowired
    LembreteRepository lembreteBanco;

    @RequestMapping("/")
    public ModelAndView index(Lembrete lembrete){
        ModelAndView pagina = new ModelAndView("index");
        pagina.addObject("lembretes", lembreteBanco.findAll());
        return pagina;
    }

    @RequestMapping("/adicionarLembrete")
    public ModelAndView adicionarLembrete(){
        return new ModelAndView("form");
    }

    @RequestMapping("/salvar")
    public ModelAndView salvar(Lembrete lembrete){
        lembreteBanco.save(lembrete);
        return new ModelAndView("redirect:/");
    }

    @RequestMapping("/deletar/{id}")
    public ModelAndView deletar(@PathVariable("id") Long id){
        lembreteBanco.deleteById(id);
        return new ModelAndView("redirect:/");
    }
}