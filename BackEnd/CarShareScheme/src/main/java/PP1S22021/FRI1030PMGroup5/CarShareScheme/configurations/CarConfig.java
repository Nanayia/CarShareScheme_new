package PP1S22021.FRI1030PMGroup5.CarShareScheme.configurations;


import PP1S22021.FRI1030PMGroup5.CarShareScheme.repositories.CarRepository;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.model.Car;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CarConfig {
    @Bean(name = "CarBean")
    CommandLineRunner commandLineRunner(CarRepository repository) {
        return args -> {
            Car car1 = Car.builder()
                    .carName("d12d")
                    .carModel("d1d12")
                    .carColor("asdas")
                    .carPrice("320")
                    .build();
            repository.save(car1);
        };
    }
}
