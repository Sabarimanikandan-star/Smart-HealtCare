package com.system.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.system.Model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

}
