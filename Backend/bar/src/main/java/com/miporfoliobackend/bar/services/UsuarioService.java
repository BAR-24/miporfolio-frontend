package com.miporfoliobackend.bar.services;

import java.util.List;

import org.springframework.stereotype.Service;
import com.miporfoliobackend.bar.models.Usuario;

import com.miporfoliobackend.bar.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;


@Service
public class UsuarioService implements IUsuarioService{
    
    @Autowired IUsuarioRepository iusuarioRepository;

    @Override
    public List<Usuario> getUsuarios() {
        List<Usuario> listUsuarios = iusuarioRepository.findAll();
        return listUsuarios;
    }

    @Override
    public Usuario findUsuario(long id) {
        return iusuarioRepository.findById(id).orElse(null);

    }

    @Override
    public void saveUsuario(Usuario usuario) {
        iusuarioRepository.save(usuario);
        
    }

    @Override
    public void deleteUsuario(long id) {
        iusuarioRepository.deleteById(id);
        
    }
    
}