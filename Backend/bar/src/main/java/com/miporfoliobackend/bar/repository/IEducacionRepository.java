package com.miporfoliobackend.bar.repository;

import com.miporfoliobackend.bar.models.Educacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEducacionRepository extends JpaRepository<Educacion, Long> {
    
}
