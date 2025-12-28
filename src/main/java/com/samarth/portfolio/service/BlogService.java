package com.samarth.portfolio.service;

import java.util.List;
import com.samarth.portfolio.entity.Blog;

public interface BlogService {
    List<Blog> getAllBlogs();

    Blog createBlog(Blog blog);
}
