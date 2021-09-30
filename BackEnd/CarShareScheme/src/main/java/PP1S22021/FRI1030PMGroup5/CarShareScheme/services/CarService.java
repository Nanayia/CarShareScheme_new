package PP1S22021.FRI1030PMGroup5.CarShareScheme.services;

import PP1S22021.FRI1030PMGroup5.CarShareScheme.repositories.CarRepository;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;


@Service
public class CarService {

    private final CarRepository carRepository;

    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getCars() {
        return carRepository.findAll();
    }

    public Car getCarById(Long id) {
        return carRepository.getById(id);
    }

    public List<Car> queryCar(String query) {
        Map<Long, Car> map = new HashMap<>();
        for (Car car : carRepository.getCarsByName(query)) {
            map.put(car.getId(), car);
        }
        for (Car car : carRepository.getCarsByModel(query)) {
            map.put(car.getId(), car);
        }
        for (Car car : carRepository.getCarsByColor(query)) {
            map.put(car.getId(), car);
        }
        List<Car> list = new ArrayList<>(map.values());
        return list;
    }

    public void addNewCar(Car car){carRepository.save(car);}

    public void deleteCar(Long carId) {
        if(!carRepository.existsById(carId)) {
            throw new IllegalStateException("Car with Id " + carId + " does not exist");
        }
        carRepository.deleteById(carId);
    }

    @Transactional
    public void updateCar(Long id, String name, String model, String color, String price){
        Car car = carRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("Car with Id " + id + " does not exist"));

        if(name != null && name.length()>0 && !Objects.equals(car.getCarName(),name)){
            car.setCarName(name);
        }
        if(model != null && model.length()>0 && !Objects.equals(car.getCarModel(),model)){
            car.setCarModel(model);
        }
        if(color != null && color.length()>0 && !Objects.equals(car.getCarColor(),color)){
            car.setCarColor(color);
        }
        if(price != null && price.length()>0 && !Objects.equals(car.getCarPrice(),price)){
            car.setCarPrice(price);
        }
    }

}








