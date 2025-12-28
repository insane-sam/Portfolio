package com.samarth.portfolio.controller;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.samarth.portfolio.entity.Blog;
import com.samarth.portfolio.service.BlogService;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {

    private final BlogService service;

    public BlogController(BlogService service) {
        this.service = service;
    }

    @GetMapping
    public List<Blog> getAllBlogs() {
        return service.getAllBlogs();
    }

    @PostMapping
    public Blog createBlog(@RequestBody Blog blog) {
        return service.createBlog(blog);
    }
}
