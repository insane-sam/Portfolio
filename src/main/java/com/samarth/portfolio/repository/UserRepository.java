package com.samarth.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.samarth.portfolio.entity.UserProfile;

public interface UserRepository extends JpaRepository<UserProfile, Long> {

}
