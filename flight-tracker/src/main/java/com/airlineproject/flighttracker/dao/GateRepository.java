package com.airlineproject.flighttracker.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.airlineproject.flighttracker.entity.Gate;

@RepositoryRestResource(collectionResourceRel = "gates", path="gates")
public interface GateRepository extends JpaRepository<Gate, Integer>{

}
