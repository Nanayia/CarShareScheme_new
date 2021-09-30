package PP1S22021.FRI1030PMGroup5.CarShareScheme.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity(name = "BookingTable")
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Data //Builds all getters and setters
@Builder
public class Car {

    @Id
    @SequenceGenerator(name = "book_sequence", sequenceName = "book_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "carName", columnDefinition = "TEXT")
    private String carName;

    @Column(name = "carModel", columnDefinition = "TEXT")
    private String carModel;

    @Column(name = "carColor", columnDefinition = "TEXT")
    private String carColor;

    @Column(name = "carPrice", columnDefinition = "TEXT")
    private String carPrice;
}
