package com.github.lardira.news_blog.repositories;

import com.github.lardira.news_blog.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
