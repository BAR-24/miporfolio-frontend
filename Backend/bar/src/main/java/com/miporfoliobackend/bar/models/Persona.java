package com.miporfoliobackend.bar.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


import lombok.Getter;
import lombok.Setter;


@Getter @Setter
@Entity 
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prsId;

    @NotNull
    @Size(min = 1, max=50, message = "No cumple con los parametros de validacion")
    private String prsNombre; 

    @NotNull
    @Size(min = 1, max=50, message = "No cumple con los parametros de validacion")  
    private String prsApellido; 

    @NotNull    
    private int prsEdad;  

    @NotNull
    @Size(min = 1, max=80, message = "No cumple con los parametros de validacion")
    private String prsOcupacion;

    @NotNull
    @Size(min = 1, max=500, message = "No cumple con los parametros de validacion")
    private String prsAcercaDeMi;
    
    private String prsImgPerfilUrl;
    private String prsImgPortadaUrl;

    @OneToMany(mappedBy = "persona") 
    private List<Educacion> listEdu = new ArrayList<>();

    @OneToMany(mappedBy = "persona") 
    private List<Experiencia> listExp = new ArrayList<>();

    @OneToMany(mappedBy = "persona") 
    private List<Habilidad> listHab = new ArrayList<>();

    @OneToMany(mappedBy = "persona") 
    private List<Proyecto> listPro = new ArrayList<>();


    public Persona() {
    }
    
    public Persona(Long prsId, String prsNombre, String prsApellido, int prsEdad, String prsOcupacion,
            String prsAcercaDeMi, String prsImgPerfilUrl, String prsImgPortadaUrl) {
        this.prsId = prsId;
        this.prsNombre = prsNombre;
        this.prsApellido = prsApellido;
        this.prsEdad = prsEdad;
        this.prsOcupacion = prsOcupacion;
        this.prsAcercaDeMi = prsAcercaDeMi;
        this.prsImgPerfilUrl = prsImgPerfilUrl;
        this.prsImgPortadaUrl = prsImgPortadaUrl;
    }
   
  
   

}