package PP1S22021.FRI1030PMGroup5.CarShareScheme.web;

import PP1S22021.FRI1030PMGroup5.CarShareScheme.model.Car;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.services.CarService;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/cars")
public class CarController {

    private final CarService carService;
    private final MapValidationErrorService mapValidationErrorService;

    @Autowired
    public CarController(CarService carService,MapValidationErrorService mapValidationErrorService){
        this.carService = carService;
        this.mapValidationErrorService = mapValidationErrorService;
    }

    @GetMapping()
    public List<Car> getCars(){return carService.getCars();}

    @GetMapping(path = "{carId}")
    public Car getCar(@PathVariable("carId") Long carId){
        System.out.println("\n\n\n");
        System.out.println("CARID: " + carId);
        return carService.getCarById(carId);
    }

    @PostMapping("/search")
    public List<Car> getCarsBySearch(@Valid @RequestBody Map<String, Object> query) {
        return carService.queryCar((String)query.get("query"));
    }

    @PostMapping("/newCar")
    public ResponseEntity<?> listNewCar(@Valid @RequestBody Car car, BindingResult result){

        carService.addNewCar(car);

        return  new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping(path = "{carId}") //TEMPORARY
    public void deleteCar(@PathVariable("carId") Long carId) {
        System.out.println(("CAR DELETE SENT"));
        carService.deleteCar(carId);
    }

    @PutMapping(path = "{carId}") //TEMPORARY
    public void updateCar(
            @PathVariable("carId") Long carId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String model,
            @RequestParam(required = false) String color,
            @RequestParam(required = false) String price) {
        System.out.println(("CAR UPDATE SENT"));
        carService.updateCar(carId, name, model, color, price);
    }



}
