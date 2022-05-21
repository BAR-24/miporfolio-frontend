package com.miporfoliobackend.bar.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity 
public class Educacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long eduId;    

    @NotNull
    @Size(min = 1, max=100, message = "No cumple con los parametros de validacion")
    private String eduTitulo;  
    
    @NotNull
    @Size(min = 1, max=500, message = "No cumple con los parametros de validacion")
    private String eduDescripcion;  

    @NotNull  
    private int eduFechaInicio;
    
    @NotNull
    private int eduFechaFin;
    
    private String eduImgUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prsId")
    private Persona persona;


    public Educacion() {
     
    }
    
    public Educacion(long eduId, String eduTitulo, String eduDescripcion, int eduFechaInicio, int eduFechaFin,
            String eduImgUrl) {
        this.eduId = eduId;
        this.eduTitulo = eduTitulo;
        this.eduDescripcion = eduDescripcion;
        this.eduFechaInicio = eduFechaInicio;
        this.eduFechaFin = eduFechaFin;
        this.eduImgUrl = eduImgUrl;
    }   
    

   
   
    
}