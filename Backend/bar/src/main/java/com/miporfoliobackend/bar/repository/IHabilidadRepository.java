package com.miporfoliobackend.bar.repository;

import com.miporfoliobackend.bar.models.Habilidad;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IHabilidadRepository extends JpaRepository<Habilidad, Long>{
    
}
