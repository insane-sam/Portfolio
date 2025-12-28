package com.samarth.portfolio.service.impl;

import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.samarth.portfolio.entity.Blog;
import com.samarth.portfolio.repository.BlogRepository;
import com.samarth.portfolio.service.BlogService;

@Service
public class BlogServiceImpl implements BlogService {

    private final BlogRepository repository;

    public BlogServiceImpl(BlogRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Blog> getAllBlogs() {
        return repository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"));
    }

    @Override
    public Blog createBlog(Blog blog) {
        return repository.save(blog);
    }
}
