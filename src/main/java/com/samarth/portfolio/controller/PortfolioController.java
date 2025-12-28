package com.samarth.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.samarth.portfolio.entity.UserProfile;
import com.samarth.portfolio.service.UserProfileService;

@RestController
@RequestMapping("/api/profile")
public class PortfolioController {

    private final UserProfileService service;

    public PortfolioController(UserProfileService service) {
        this.service = service;
    }

    @GetMapping
    public UserProfile getProfile() {
        return service.getProfile();
    }

    @PostMapping
    public UserProfile saveProfile(@RequestBody UserProfile profile) {
        return service.saveProfile(profile);
    }
}
