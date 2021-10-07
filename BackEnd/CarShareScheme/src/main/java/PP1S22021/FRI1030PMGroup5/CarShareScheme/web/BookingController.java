package PP1S22021.FRI1030PMGroup5.CarShareScheme.web;


import PP1S22021.FRI1030PMGroup5.CarShareScheme.model.Booking;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService){this.bookingService = bookingService;}

    @GetMapping()
    public List<Booking> getBookings() {
        return bookingService.getBooking();
    }

    @PostMapping("/createBooking")
    public ResponseEntity<?> createOrder(@Valid @RequestBody Booking booking){

        bookingService.addNewBooking(booking);
        return  new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/userBookings")
    public List<Booking> getUserBookings(@Valid @RequestBody Map<String, Object> query) {
        return bookingService.getBookingByUsername((String)query.get("username"));
    }

    @PutMapping(path = "/cancelled/{bookingId}")
    public List<Booking> bookingCancelled(@PathVariable("bookingId") Long bookingId) {
        bookingService.bookingCancelled(bookingId);
        Booking booking = bookingService.getBookingById(bookingId);
        return bookingService.getBookingByUsername(booking.getUsername());
    }

    @PutMapping(path = "/return/{bookingId}")
    public List<Booking> bookingReturn(@PathVariable("bookingId") Long bookingId) {
        bookingService.bookingReturn(bookingId);
        Booking booking = bookingService.getBookingById(bookingId);
        return bookingService.getBookingByUsername(booking.getUsername());
    }


}
