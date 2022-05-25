package com.miporfoliobackend.bar.controller;

import java.util.List;

import com.miporfoliobackend.bar.models.Habilidad;
import com.miporfoliobackend.bar.services.IHabilidadService;

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
public class HabilidadController {

    @Autowired IHabilidadService iHabilidadService;

    @GetMapping("/habilidad/traer")
    public List<Habilidad> getTodas(){
        return iHabilidadService.getTodas();
    }

    @PostMapping("/habilidad/crear")
    public String crearHabilidad(@RequestBody Habilidad Habilidad){
    
        iHabilidadService.saveHabilidad(Habilidad);
        return "Se creo Habilidad con exito!";
    }

    @GetMapping("/habilidad/traer/{id}")
    public Habilidad findHabilidad(@PathVariable("id") Long id){
        return iHabilidadService.findHabilidad(id);
    }

    @DeleteMapping("/habilidad/borrar/{id}")
    public String deleteHabilidad(@PathVariable("id") Long id){
        iHabilidadService.deleteHabilidad(id);
        return "Se elimino Habilidad con exito";
    }


    @PutMapping("/habilidad/editar")
    public ResponseEntity<Habilidad> editHabilidadStatus(@RequestBody Habilidad Habilidad){
       iHabilidadService.saveHabilidad(Habilidad);             
       
       return new ResponseEntity<>(Habilidad,HttpStatus.OK);     

    }


}
