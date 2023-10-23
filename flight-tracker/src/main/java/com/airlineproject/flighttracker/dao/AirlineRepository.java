package com.airlineproject.flighttracker.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.airlineproject.flighttracker.entity.Airline;


@RepositoryRestResource(collectionResourceRel = "airlines", path="airlines")
public interface AirlineRepository extends JpaRepository<Airline, Integer>{

}
