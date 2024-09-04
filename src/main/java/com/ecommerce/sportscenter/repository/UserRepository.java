package com.ecommerce.sportscenter.repository;

import com.ecommerce.sportscenter.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
