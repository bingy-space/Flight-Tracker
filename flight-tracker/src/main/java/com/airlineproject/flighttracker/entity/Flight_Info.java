package com.airlineproject.flighttracker.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="flight-info")
@Data
public class Flight_Info {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    
    @Column(name = "airline")
    private String airline;
    
    @Column(name = "flight")
    private String flight;
    
    @Column(name = "status")
    private String status;
    
    @Column(name = "gate")
    private String gate;
    
    @Column(name = "flight_code")
    private String flightCode;

    @Column(name = "airport_code")
    private String airportCode;
    
    @Column(name = "scheduled_date")
    private String scheduledDate;
    
    @Column(name = "scheduled_time")
    private String scheduledTime;
    
    @Column(name = "update_time")
    private String updateTime;
    
}
