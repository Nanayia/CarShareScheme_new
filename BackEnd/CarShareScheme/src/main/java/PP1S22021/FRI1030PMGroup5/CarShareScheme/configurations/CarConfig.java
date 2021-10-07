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
                    .carName("H1")
                    .carModel("Mercedes")
                    .carColor("Black")
                    .carPrice("320")
                    .image("https://images.unsplash.com/photo-1589148938909-4d241c91ee52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
                    .build();
            repository.save(car1);

            Car car2 = Car.builder()
                    .carName("DC4")
                    .carModel("Toyota")
                    .carColor("Black")
                    .carPrice("220")
                    .image("https://images.unsplash.com/photo-1589148938909-4d241c91ee52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
                    .build();
            repository.save(car2);

            Car car3 = Car.builder()
                    .carName("d12d")
                    .carModel("Civic")
                    .carColor("White")
                    .carPrice("280")
                    .image("https://images.unsplash.com/photo-1589148938909-4d241c91ee52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
                    .build();
            repository.save(car3);


            Car car4 = Car.builder()
                    .carName("HHW")
                    .carModel("Honda")
                    .carColor("White")
                    .carPrice("190")
                    .image("https://images.unsplash.com/photo-1589148938909-4d241c91ee52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
                    .build();
            repository.save(car4);

        };
    }
}
