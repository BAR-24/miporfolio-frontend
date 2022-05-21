package com.miporfoliobackend.bar.services;

import java.util.List;

import com.miporfoliobackend.bar.models.Usuario;

public interface IUsuarioService {
    //Traer Personas
    public List<Usuario> getUsuarios();
    
    //Traer Persona
    public Usuario findUsuario(long id);

    //Guardar Persona
    public void saveUsuario(Usuario usuario);

    //Borra Persona
    public void deleteUsuario(long id);



}
