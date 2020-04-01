package pl.javahello.user.db;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.javahello.user.api.User;

public interface UserRepo extends JpaRepository<User, Long> {

}
