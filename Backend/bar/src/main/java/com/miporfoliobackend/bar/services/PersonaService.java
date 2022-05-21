package com.miporfoliobackend.bar.services;

import java.util.List;

import org.springframework.stereotype.Service;
import com.miporfoliobackend.bar.models.Persona;

import com.miporfoliobackend.bar.repository.IPersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;


@Service
public class PersonaService implements IPersonaService{
    
    @Autowired IPersonaRepository ipersonaRepository;

    @Override
    public List<Persona> getPersonas() {
        List<Persona> listPersonas = ipersonaRepository.findAll();
        return listPersonas;
    }

    @Override
    public Persona findPersona(long id) {
        return ipersonaRepository.findById(id).orElse(null);

    }

    @Override
    public void savePersona(Persona persona) {
        ipersonaRepository.save(persona);
        
    }

    @Override
    public void deletePersona(long id) {
        ipersonaRepository.deleteById(id);
        
    }
    
}
