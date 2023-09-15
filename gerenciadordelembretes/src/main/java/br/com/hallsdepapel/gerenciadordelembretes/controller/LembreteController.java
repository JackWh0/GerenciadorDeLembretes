package br.com.hallsdepapel.gerenciadordelembretes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import br.com.hallsdepapel.gerenciadordelembretes.model.Lembrete;
import br.com.hallsdepapel.gerenciadordelembretes.repository.LembreteRepository;

@Controller
public class LembreteController {

    @Autowired
    LembreteRepository lembreteBanco;

    @GetMapping("/")
    public ModelAndView index(Lembrete lembrete){
        ModelAndView pagina = new ModelAndView("index");
        pagina.addObject("lembretes", lembreteBanco.findAll(Sort.by("data")));
        return pagina;
    }

    @GetMapping("/adicionarLembrete")
    public ModelAndView adicionarLembrete(){
        return new ModelAndView("form");
    }

    @PostMapping("/salvar")
    public ModelAndView salvar(Lembrete lembrete){
        lembreteBanco.save(lembrete);
        return new ModelAndView("redirect:/");
    }

    @GetMapping("/deletar/{id}")
    public ModelAndView deletar(@PathVariable("id") Long id){
        lembreteBanco.deleteById(id);
        return new ModelAndView("redirect:/");
    }

    @GetMapping("/form-edicao/{id}")
    public ModelAndView editarUsuario(@PathVariable("id") Long id) {
        ModelAndView model = new ModelAndView("form-editar");
        Lembrete lembrete = lembreteBanco.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid Id"));
        model.addObject("lembrete", lembrete);
        return model;
    }

    @PostMapping("/editar/{id}")
    public ModelAndView editar(@PathVariable("id") Long id, Lembrete lembreteNovo) {
        ModelAndView model = new ModelAndView("redirect:/");
        lembreteBanco.save(lembreteNovo);
        model.addObject("lembretes", lembreteBanco.findAll(Sort.by("data")));
        return model;
    }
}