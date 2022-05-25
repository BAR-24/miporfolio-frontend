package com.miporfoliobackend.bar.services;

import java.util.List;

import org.springframework.stereotype.Service;
import com.miporfoliobackend.bar.models.Proyecto;

import com.miporfoliobackend.bar.repository.IProyectoRepository;
import org.springframework.beans.factory.annotation.Autowired;


@Service
public class ProyectoService implements IProyectoService{
    
    @Autowired IProyectoRepository iProyectoRepository;

    @Override
    public List<Proyecto> getProyectos() {
        List<Proyecto> listProyectos = iProyectoRepository.findAll();
        return listProyectos;
    }

    @Override
    public Proyecto findProyecto(long id) {
        return iProyectoRepository.findById(id).orElse(null);

    }

    @Override
    public Proyecto saveProyecto(Proyecto Proyecto) {
        return iProyectoRepository.save(Proyecto);
        
    }

    @Override
    public void deleteProyecto(long id) {
        iProyectoRepository.deleteById(id);
        
    }
    
}
