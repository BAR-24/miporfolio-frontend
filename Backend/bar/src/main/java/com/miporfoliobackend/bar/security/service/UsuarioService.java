package com.miporfoliobackend.bar.security.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miporfoliobackend.bar.security.entity.Usuario;
import com.miporfoliobackend.bar.security.repository.IUsuarioRepository;


@Service
@Transactional
public class UsuarioService {
    
    @Autowired
    IUsuarioRepository iUsuarioRepository;

    public Optional<Usuario> getByusrNombre (String usrNombre){
        return iUsuarioRepository.findByusrNombre(usrNombre);
    }

    public boolean existsByNombreUsuario(String usrNombre){
        return iUsuarioRepository.existsByusrNombre(usrNombre);
    }

    public boolean existsByusrEmail(String usrEmail){
        return iUsuarioRepository.existsByusrEmail(usrEmail);
    }

    public void save(Usuario usr){
        iUsuarioRepository.save(usr);
    }
}
