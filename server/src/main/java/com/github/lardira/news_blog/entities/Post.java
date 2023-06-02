package com.github.lardira.news_blog.entities;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column
    String title;
    @Column(columnDefinition = "TEXT")
    String text;
    @Column
    String image;

    public Post() {
    }

    public Post(String title, String text, String image) {
        this.title = title;
        this.text = text;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", text='" + text + '\'' +
                ", image='" + image + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return Objects.equals(id, post.id)
                && Objects.equals(title, post.title)
                && Objects.equals(text, post.text)
                && Objects.equals(image, post.image);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, text, image);
    }
}
