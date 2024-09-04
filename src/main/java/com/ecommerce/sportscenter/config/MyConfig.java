package com.ecommerce.sportscenter.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class MyConfig {
    @Bean
    public UserDetailsService userDetailsService(){
        UserDetails userDetails = User.builder()
                .username("abhinav")
                .password(passwordEncoder().encode("Password"))
                .roles("admin")
                .build();
        return new InMemoryUserDetailsManager(userDetails);
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}


//package com.ecommerce.sportscenter.config;
//
//import com.ecommerce.sportscenter.entity.User;
//import com.ecommerce.sportscenter.repository.UserRepository;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//
//import java.util.List;
//
//@Configuration
//public class MyConfig {
//
//    @Bean
//    public UserDetailsService userDetailsService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
//        return username -> {
//            User user = userRepository.findByUsername(username);
//            if (user != null) {
//                return new org.springframework.security.core.userdetails.User(
//                        user.getUsername(),
//                        user.getPasswordHash(),
//                        // Use the stored password hash
//                        List.of(new SimpleGrantedAuthority("ROLE_ADMIN"))
//                );
//            }
//            return null;
//        };
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//}

