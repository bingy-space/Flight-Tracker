package com.airlineproject.flighttracker.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.airlineproject.flighttracker.entity.Flight;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface FlightRepository extends JpaRepository<Flight, Integer>{
	List<Flight> findByAirlineCode(@Param("code") String code);
}
