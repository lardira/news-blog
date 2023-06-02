package com.github.lardira.news_blog.dto;

import com.github.lardira.news_blog.dto.post.PostResponse;
import com.github.lardira.news_blog.entities.Post;
import org.springframework.stereotype.Component;

@Component
public class PostResponseMapper {
    public PostResponse map(Post post) {
        return new PostResponse(
                post.getId(),
                post.getTitle(),
                post.getText(),
                post.getImage()
        );
    }

    public Post map(PostResponse postResponse) {
        var post = new Post();
        post.setId(postResponse.id());
        post.setText(postResponse.text());
        post.setTitle(postResponse.title());
        post.setImage(postResponse.image());
        return post;
    }
}
