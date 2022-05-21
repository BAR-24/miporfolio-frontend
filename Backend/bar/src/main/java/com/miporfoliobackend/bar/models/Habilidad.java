package com.miporfoliobackend.bar.models;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity 
public class Habilidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long habId;

    @NotNull
    @Size(min = 1, max=100, message = "No cumple con los parametros de validacion")
    private String habTitulo; 
    
    @NotNull
    @Size(min = 1, max=500, message = "No cumple con los parametros de validacion")  
    private String habDescripcion;

    @NotNull
    @Size(min = 1, max=3, message = "No cumple con los parametros de validacion") 
    private int habProcentaje;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prsId")
    private Persona persona;
   
    public Habilidad() {
        
    }  

    public Habilidad(long habId, String habTitulo, String habDescripcion, int habProcentaje) {
        this.habId = habId;
        this.habTitulo = habTitulo;
        this.habDescripcion = habDescripcion;
        this.habProcentaje = habProcentaje;
    }
    
    
   

    

}
