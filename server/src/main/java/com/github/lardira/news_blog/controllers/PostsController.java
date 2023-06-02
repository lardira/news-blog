package com.github.lardira.news_blog.controllers;

import com.github.lardira.news_blog.dto.PostResponseMapper;
import com.github.lardira.news_blog.dto.post.PostResponse;
import com.github.lardira.news_blog.entities.Post;
import com.github.lardira.news_blog.exceptions.PostNotFoundException;
import com.github.lardira.news_blog.repositories.PostRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostsController {
    private final PostRepository repository;
    private final PostResponseMapper postResponseMapper;

    public PostsController(PostRepository repository, PostResponseMapper postResponseMapper) {
        this.repository = repository;
        this.postResponseMapper = postResponseMapper;
    }

    @GetMapping
    public List<PostResponse> getPosts() {
        return repository
                .findAll()
                .stream()
                .map(postResponseMapper::map)
                .toList();
    }

    @GetMapping("/{id}")
    public PostResponse getPost(@PathVariable Long id) {
        return repository.findById(id)
                .map(postResponseMapper::map)
                .orElseThrow(() -> new PostNotFoundException(id));
    }

    @PostMapping
    public PostResponse createPost(@RequestBody Post post) {
        return postResponseMapper.map(
                repository.save(post)
        );
    }

    @PutMapping("/{id}")
    public PostResponse updatePost(@PathVariable Long id, @RequestBody Post newPost) {
        Post post = repository.findById(id)
                .orElseThrow(() -> new PostNotFoundException(id));

        post.setImage(newPost.getImage());
        post.setText(newPost.getText());
        post.setTitle(newPost.getTitle());

        return postResponseMapper.map(
                repository.save(post)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePost(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.ok("post " + id + " was deleted");
    }
}
