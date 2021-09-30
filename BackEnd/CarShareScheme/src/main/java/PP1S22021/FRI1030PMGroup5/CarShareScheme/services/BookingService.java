package PP1S22021.FRI1030PMGroup5.CarShareScheme.services;

import PP1S22021.FRI1030PMGroup5.CarShareScheme.model.Booking;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public List<Booking> getBooking() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.getById(id);
    }

    public void addNewBooking(Booking booking) {
        bookingRepository.save(booking);
    }

    public List<Booking> getBookingByUsername(String id) {
        Map<Long, Booking> map = new HashMap<>();
        for (Booking order : bookingRepository.getBookingByUserId(id)) {
            map.put(order.getId(), order);
        }

        List<Booking> list = new ArrayList<>(map.values());

        return list;


    }
}
