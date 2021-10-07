package PP1S22021.FRI1030PMGroup5.CarShareScheme.repositories;


import PP1S22021.FRI1030PMGroup5.CarShareScheme.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    Booking getById(Long id);
    List<Booking> getBookingByUsername(String username);
}
