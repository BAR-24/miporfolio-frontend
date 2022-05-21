package com.miporfoliobackend.bar.services;

import java.util.List;

import com.miporfoliobackend.bar.models.Experiencia;

public interface IExperienciaService {
    //Traer experiencias
    public List<Experiencia> getTodas();
    
    //Traer experiencia
    public Experiencia findExperiencia(long id);

    //Guardar experiencia
    public void saveExperiencia(Experiencia educacion);

    //Borra experiencia
    public void deleteExperiencia(long id);

}
