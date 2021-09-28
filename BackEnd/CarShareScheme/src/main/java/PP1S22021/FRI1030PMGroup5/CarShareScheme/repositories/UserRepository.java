package PP1S22021.FRI1030PMGroup5.CarShareScheme.repositories;

import PP1S22021.FRI1030PMGroup5.CarShareScheme.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
    User getById(Long id);
    Optional<User> getByEmail(String email);
    Optional<User> getByUsername(String username);
}
