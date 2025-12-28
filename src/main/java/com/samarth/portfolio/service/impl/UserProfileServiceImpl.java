package com.samarth.portfolio.service.impl;

import org.springframework.stereotype.Service;

import com.samarth.portfolio.entity.UserProfile;
import com.samarth.portfolio.repository.UserRepository;
import com.samarth.portfolio.service.UserProfileService;

@Service
public class UserProfileServiceImpl implements UserProfileService {

    private final UserRepository repository;

    public UserProfileServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserProfile getProfile() {
        return repository.findAll().stream().findFirst().orElse(null);
    }

    @Override
    public UserProfile saveProfile(UserProfile profile) {
        return repository.save(profile);
    }
}
