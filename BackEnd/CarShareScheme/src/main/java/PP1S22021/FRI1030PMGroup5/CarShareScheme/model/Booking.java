package PP1S22021.FRI1030PMGroup5.CarShareScheme.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.util.Locale;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity(name = "BookingTable")
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Data //Builds all getters and setters
@Builder
public class Booking {
    @Id
    @SequenceGenerator(name = "booking_sequence", sequenceName = "booking_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "booking_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "userID",  columnDefinition = "TEXT")
    private String userID;

    @Column(name = "username",  columnDefinition = "TEXT")
    private String username;

    @Column(name = "carName", columnDefinition = "TEXT")
    private String carName;

    @Column(name = "carType", columnDefinition = "TEXT")
    private String carType;

    @Column(name = "carColor", columnDefinition = "TEXT")
    private String carColor;

    @Column(name = "carPrice", columnDefinition = "TEXT")
    private String carPrice;

    @Column(name = "pickUp", columnDefinition = "TEXT")
    private String pickUp;

    @Column(name = "dropOff", columnDefinition = "TEXT")
    private String dropOff;

    @Column(name = "pickupDate", columnDefinition = "DATE")
    private Date pickupDate;

    @Column(name = "dropoffDate", columnDefinition = "Date")
    private Date dropoffDate;


    public String getByuserID(){return userID.toLowerCase();}

}
