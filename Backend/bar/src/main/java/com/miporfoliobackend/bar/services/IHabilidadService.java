package com.miporfoliobackend.bar.services;

import java.util.List;

import com.miporfoliobackend.bar.models.Habilidad;

public interface IHabilidadService {
    //Traer hablidades
    public List<Habilidad> getTodas();
    
    //Traer habilidad
    public Habilidad findHabilidad(long id);

    //Guardar habilidad
    public void saveHabilidad(Habilidad educacion);

    //Borra habilidad
    public void deleteHabilidad(long id);

}
