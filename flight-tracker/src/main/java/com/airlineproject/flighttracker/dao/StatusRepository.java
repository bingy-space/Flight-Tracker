package com.airlineproject.flighttracker.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.airlineproject.flighttracker.entity.Status;

@RepositoryRestResource(collectionResourceRel = "status", path="status")
public interface StatusRepository extends JpaRepository<Status, Integer>{

}




