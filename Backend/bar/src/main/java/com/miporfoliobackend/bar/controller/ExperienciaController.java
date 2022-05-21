package com.miporfoliobackend.bar.controller;

import java.util.List;

import com.miporfoliobackend.bar.models.Experiencia;
import com.miporfoliobackend.bar.services.IExperienciaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExperienciaController {

    @Autowired IExperienciaService iexperienciaService;

    @GetMapping("/experiencia/traer")
    public List<Experiencia> getTodas(){
        return iexperienciaService.getTodas();
    }

    @PostMapping("/experiencia/crear")
    public String crearExperiencia(@RequestBody Experiencia exp){
    
        iexperienciaService.saveExperiencia(exp);
        return "Se creo experiencia con exito!";
    }

    @GetMapping("/eperiencia/traer/{id}")
    public Experiencia findEducacion(Long id){
        return iexperienciaService.findExperiencia(id);
    }

    @DeleteMapping("/experiencia/borrar/{id}")
    public String deleteExperiencia(@PathVariable Long id){
        iexperienciaService.deleteExperiencia(id);
        return "Se elimino experiencia con exito";
    }

    
    @PutMapping("/experiencia/editar")
    public ResponseEntity<Experiencia> editExperienciaStatus(@RequestBody Experiencia exp){
       iexperienciaService.saveExperiencia(exp);             
       
       return new ResponseEntity<>(exp,HttpStatus.OK);     

    }


}