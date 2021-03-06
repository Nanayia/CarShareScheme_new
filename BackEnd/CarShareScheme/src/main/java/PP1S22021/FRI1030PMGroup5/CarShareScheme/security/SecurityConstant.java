package PP1S22021.FRI1030PMGroup5.CarShareScheme.security;

public class SecurityConstant {

    public static final String SIGN_UP_URLS = "/api/users/**";
    public static final String BOOKINGS = "/api/bookings/**";
    public static final String CARS = "/api/cars/**";
    public static final String H2_URL = "/h2-console/**";
    public static final String SECRET ="SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = 300_000; //30 seconds
}
