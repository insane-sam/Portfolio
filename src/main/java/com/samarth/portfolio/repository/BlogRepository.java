package com.samarth.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.samarth.portfolio.entity.Blog;

public interface BlogRepository extends JpaRepository<Blog, Long> {

}
