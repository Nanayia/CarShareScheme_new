package PP1S22021.FRI1030PMGroup5.CarShareScheme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class CarShareSchemeApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarShareSchemeApplication.class, args);
	}
	@Bean(name="test")
	BCryptPasswordEncoder bCryptPasswordEncoder(){
		return new BCryptPasswordEncoder();
	}

}
