package com.airlineproject.flighttracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.airlineproject.flighttracker.dao.FlightInfoRepository;
import com.airlineproject.flighttracker.entity.Flight_Info;

@RestController
public class FlightInfoController {

	@Autowired
	FlightInfoRepository flightInfoRepository;

	@PostMapping("/flight_Infoes")
	Flight_Info createNew(@RequestBody Flight_Info newItem) {
		return flightInfoRepository.save(newItem);
	}
	
	
}
