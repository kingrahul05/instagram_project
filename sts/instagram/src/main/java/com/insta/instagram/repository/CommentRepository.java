package com.insta.instagram.repository;

import java.util.Optional;

import com.insta.instagram.modal.Comment;

public interface CommentRepository {

	Comment saved(Comment comment);

	Optional<Comment> findCommentBYId(Integer commentId);

	

	

}
