package com.github.lardira.news_blog.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.NoSuchElementException;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class PostNotFoundException extends NoSuchElementException {
    public PostNotFoundException() {
        super();
    }

    public PostNotFoundException(Throwable cause) {
        super(cause);
    }

    public PostNotFoundException(String s) {
        super(s);
    }

    public PostNotFoundException(Long id) {
        super("No post found with id: " + id);
    }
}
