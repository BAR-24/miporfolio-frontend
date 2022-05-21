package com.miporfoliobackend.bar.repository;

import com.miporfoliobackend.bar.models.Proyecto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProyectoRepository extends JpaRepository<Proyecto, Long>{
    
}