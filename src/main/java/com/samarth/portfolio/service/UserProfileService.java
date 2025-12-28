package com.samarth.portfolio.service;

import com.samarth.portfolio.entity.UserProfile;


public interface UserProfileService {
    UserProfile getProfile();
    UserProfile saveProfile(UserProfile profile);
}
