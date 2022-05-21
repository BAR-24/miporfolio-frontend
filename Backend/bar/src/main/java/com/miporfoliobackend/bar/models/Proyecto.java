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
public class Proyecto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long proId;

    @NotNull
    @Size(min = 1, max=100, message = "No cumple con los parametros de validacion")
    private String proTitulo;
    
    @NotNull
    @Size(min = 1, max=500, message = "No cumple con los parametros de validacion")
    private String proDescripcion;  

    @NotNull    
    private int proFechaInicio;   
    
    @NotNull
    private int proFechaFin;
    
    private String proImgUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prsId")
    private Persona persona;

    public Proyecto() {

        
    }

    public Proyecto(long proId, String proTitulo, String proDescripcion, int proFechaInicio, int proFechaFin,
            String proImgUrl) {
        this.proId = proId;
        this.proTitulo = proTitulo;
        this.proDescripcion = proDescripcion;
        this.proFechaInicio = proFechaInicio;
        this.proFechaFin = proFechaFin;
        this.proImgUrl = proImgUrl;
    }


    


    


      
    

   
   
    
}