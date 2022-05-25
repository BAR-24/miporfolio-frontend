package com.miporfoliobackend.bar.services;

import java.util.List;

import org.springframework.stereotype.Service;
import com.miporfoliobackend.bar.models.Educacion;

import com.miporfoliobackend.bar.repository.IEducacionRepository;
import org.springframework.beans.factory.annotation.Autowired;


@Service
public class EducacionService implements IEducacionService{
    
    @Autowired IEducacionRepository ieducacionRepository;

    @Override
    public List<Educacion> getTodas() {
        List<Educacion> listEducacion = ieducacionRepository.findAll();
        return listEducacion;
    }

    @Override
    public Educacion findEducacion(long id) {
        return ieducacionRepository.findById(id).orElse(null);

    }

    @Override
    public Educacion saveEducacion(Educacion educacion) {
       return ieducacionRepository.save(educacion);
        
    }

    @Override
    public void deleteEducacion(long id) {
        ieducacionRepository.deleteById(id);
        
    }
    
}
