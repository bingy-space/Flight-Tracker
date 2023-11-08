package com.airlineproject.flighttracker.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.airlineproject.flighttracker.entity.Gate;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "gates", path="gates")
public interface GateRepository extends JpaRepository<Gate, Integer>{

}
