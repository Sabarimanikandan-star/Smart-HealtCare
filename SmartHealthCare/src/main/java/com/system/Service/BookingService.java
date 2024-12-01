package com.system.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.system.Model.Booking;
import com.system.Repository.BookingRepository;

@Service
public class BookingService {
	
	 @Autowired
	    private BookingRepository bookingRepository;

	    public Booking createBooking(Booking booking) {
	        return bookingRepository.save(booking);
	    }

}
