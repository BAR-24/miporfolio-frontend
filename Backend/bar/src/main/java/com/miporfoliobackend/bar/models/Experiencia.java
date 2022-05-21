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
public class Experiencia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long expId;

    @NotNull
    @Size(min = 1, max=100, message = "No cumple con los parametros de validacion")
    private String expTitulo;
    
    @NotNull
    @Size(min = 1, max=500, message = "No cumple con los parametros de validacion")
    private String expDescripcion;  

    @NotNull
    @Size(min = 1, max=4, message = "No cumple con los parametros de validacion")
    private int expFechaInicio; 
    
    @NotNull
    @Size(min = 1, max=4, message = "No cumple con los parametros de validacion")
    private int expFechaFin;
   
    private String expImgUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prsId")
    private Persona persona;


    public Experiencia() {
        
    }   

    public Experiencia(long expId, String expTitulo, String expDescripcion, int expFechaInicio, int expFechaFin,
            String expImgUrl) {
        this.expId = expId;
        this.expTitulo = expTitulo;
        this.expDescripcion = expDescripcion;
        this.expFechaInicio = expFechaInicio;
        this.expFechaFin = expFechaFin;
        this.expImgUrl = expImgUrl;
    }
    
 

    
    

    

    


}
