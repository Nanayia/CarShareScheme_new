package PP1S22021.FRI1030PMGroup5.CarShareScheme.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Collection;
import java.util.Date;


@Entity(name = "UserTable")   //unique causes errors?
@Table(uniqueConstraints=@UniqueConstraint(columnNames={"email"}))
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Data
@Builder
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @NotBlank(message = "Username is required")
    //unique = true cause errors????
    @Column(name = "username", unique = true, nullable = false)
    private String username;

    @Column(name = "first_name", columnDefinition = "TEXT")
    private String firstName;

    @Column(name = "last_name", columnDefinition = "TEXT")
    private String lastName;

    @NotBlank(message = "Email field is required")
    @Column(name = "email", nullable = false, columnDefinition = "TEXT")
    private String email;

    @NotBlank(message = "Password field is required")
    @Column(name = "password", nullable = false, columnDefinition = "TEXT")
    private String password;

    @Column(name = "phone", columnDefinition = "TEXT")
    private String phone;

    @Column(name = "abn", columnDefinition = "TEXT")
    private String abn;

    @Column(name = "account_type",  columnDefinition = "TEXT")
    private String accountType;

    public String getUsername() {
        return username.toLowerCase();
    }

    public String getEmail() {
        return email.toLowerCase();
    }

    @Transient
    private String confirmPassword;

    private Date create_At;
    private Date update_At;

    //OneToMany with Project

    @PrePersist
    protected void onCreate(){
        this.create_At = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.update_At = new Date();
    }

    /*
    UserDetails interface methods
     */

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }
}