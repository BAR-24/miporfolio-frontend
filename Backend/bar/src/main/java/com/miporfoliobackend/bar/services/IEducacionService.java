package com.miporfoliobackend.bar.services;

import java.util.List;

import com.miporfoliobackend.bar.models.Educacion;

public interface IEducacionService {
    //Traer educacion
    public List<Educacion> getTodas();
    
    //Traer educacion
    public Educacion findEducacion(long id);

    //Guardar educacion
    public void saveEducacion(Educacion educacion);

    //Borra educacion
    public void deleteEducacion(long id);

}
