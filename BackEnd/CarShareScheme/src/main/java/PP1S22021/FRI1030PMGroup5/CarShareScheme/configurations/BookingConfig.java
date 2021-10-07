package PP1S22021.FRI1030PMGroup5.CarShareScheme.configurations;

import PP1S22021.FRI1030PMGroup5.CarShareScheme.repositories.BookingRepository;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.model.Booking;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.sql.Date;


@Configuration
public class BookingConfig {
    Date date = new Date(System.currentTimeMillis());
    @Bean(name = "BookingBean")
    CommandLineRunner commandLineRunner(BookingRepository repository) {
        return args -> {
            Booking booking1 = Booking.builder()
                    .userID("1")
                    .username("AA")
                    .carId("3")
                    .carName("d12")
                    .carType("adwdw")
                    .carColor("red")
                    .carPrice("320")
                    .pickUp("12s12")
                    .dropOff("d12d1")
                    .pickupDate(date)
                    .dropoffDate(date)
                    .status("Return")
                    .build();
            repository.save(booking1);
        };
    }
}
