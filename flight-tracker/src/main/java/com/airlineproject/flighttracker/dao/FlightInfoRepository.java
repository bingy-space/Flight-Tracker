package com.airlineproject.flighttracker.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.airlineproject.flighttracker.entity.Flight_Info;

@RepositoryRestResource
public interface FlightInfoRepository extends JpaRepository<Flight_Info, Long>{
	Page<Flight_Info> findByFlightCodeContaining(@Param("flightCode") String flightCode, Pageable pageable);
}
