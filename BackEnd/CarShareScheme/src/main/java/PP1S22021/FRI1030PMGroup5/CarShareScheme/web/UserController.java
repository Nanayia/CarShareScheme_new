package PP1S22021.FRI1030PMGroup5.CarShareScheme.web;


import PP1S22021.FRI1030PMGroup5.CarShareScheme.model.User;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.payload.JWTLoginSucessReponse;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.payload.LoginRequest;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.security.JwtTokenProvider;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.services.MapValidationErrorService;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.services.UserService;
import PP1S22021.FRI1030PMGroup5.CarShareScheme.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static PP1S22021.FRI1030PMGroup5.CarShareScheme.security.SecurityConstant.TOKEN_PREFIX;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final MapValidationErrorService mapValidationErrorService;
    private final UserValidator userValidator;
    private final UserService userService;
    private final JwtTokenProvider tokenProvider;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public UserController(UserService userService, UserValidator userValidator, MapValidationErrorService mapValidationErrorService, JwtTokenProvider tokenProvider, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.userValidator = userValidator;
        this.mapValidationErrorService = mapValidationErrorService;
        this.tokenProvider = tokenProvider;
        this.authenticationManager = authenticationManager;
    }

    @GetMapping()
    public List<User> getUsers() {
        System.out.println(("USER GET SENT"));
        return userService.getUsers();
    }

    @GetMapping(path = "{userId}")
    public User getUser(@PathVariable("userId") Long userId) {
        return userService.getUserByID(userId);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {

        System.out.println("REGISTERING USER");
        // Validate passwords match
        userValidator.validate(user, result);

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        System.out.println("USER REGISTERED");
        User newUser = userService.saveUser(user);


        return new ResponseEntity<User>(newUser, HttpStatus.CREATED); //201 Created
    }


    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX + tokenProvider.generateToken(authentication);
        System.out.println("Login");
        return ResponseEntity.ok(new JWTLoginSucessReponse(true, jwt));
    }

    @DeleteMapping(path = "{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        userService.deleteUser(userId);
    }


    @PutMapping(path = "{userId}")
    public void updateUser(
            @PathVariable("userId") Long userId,
            @RequestParam(required = false) String firstName,
            @RequestParam(required = false) String lastName,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String phone,
            @RequestParam(required = false) String abn) {

        userService.updateUser(userId, firstName, lastName, email, phone, abn);

    }
}
