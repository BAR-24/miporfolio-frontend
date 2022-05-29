package com.miporfoliobackend.bar.controller;

import java.util.List;

import com.miporfoliobackend.bar.models.Usuario;
import com.miporfoliobackend.bar.services.IUsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

    @Autowired IUsuarioService iusuarioService;

    @GetMapping("/usuarios/traer")
    public List<Usuario> getUsuario(){
        return iusuarioService.getUsuarios();
    }

    @PostMapping("/usuarios/crear")
    public String crear(@RequestBody Usuario usuario){
    
        iusuarioService.saveUsuario(usuario);
        return "Se creo usuario con exito!";
    }


    @PostMapping("/usuarios/editar")
    public Usuario editUsuario(@RequestBody Usuario usuario){
    
        iusuarioService.saveUsuario(usuario);
        return usuario;
    }
 
    @GetMapping("/usuarios/traer/{id}")
    public Usuario findUsuario(@PathVariable("id") Long id){
        return iusuarioService.findUsuario(id);
    }

    @DeleteMapping("/usuarios/borrar/{id}")
    public String deleteUsuario(@PathVariable("id") Long id){
        iusuarioService.deleteUsuario(id);
        return "Se elimino usuario con exito";
    }



}
