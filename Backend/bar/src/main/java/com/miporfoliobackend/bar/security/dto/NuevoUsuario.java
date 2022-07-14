package com.miporfoliobackend.bar.security.dto;

import java.util.HashSet;
import java.util.Set;

import com.miporfoliobackend.bar.models.Persona;



public class NuevoUsuario {
    private String nombre;
    private String usrName;
    private String email;
    private String password;
    private Set<String> roles = new HashSet<>();
    private Persona persona;

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getUsrName() {
        return usrName;
    }
    public void setUsrName(String usrName) {
        this.usrName = usrName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public Set<String> getRoles() {
        return roles;
    }
    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }
    
    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }
   
    

    

}
