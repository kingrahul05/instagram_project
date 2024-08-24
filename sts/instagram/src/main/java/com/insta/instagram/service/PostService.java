package com.insta.instagram.service;

import java.util.List;

import com.insta.instagram.exceptions.PostException;
import com.insta.instagram.exceptions.UserException;
import com.insta.instagram.modal.Post;
import com.insta.instagram.modal.User;

public interface PostService {
	
	public Post ncreatePost(Post Post,Integer user) throws UserException;
	
	public String deletePost(Integer postId, Integer userId) throws UserException,PostException;

	
	public List<Post> findPostByUserId(Integer userId) throws UserException;
	
	public Post findPostById(Integer postId) throws PostException;
	
	public  List<Post> findAllPostByUserIds(List<Integer> userIds) throws  PostException, UserException;
	
	public String savedPost(Integer postId,Integer userId) throws PostException, UserException;
	
	public String unSavedPost(Integer postId, Integer userId) throws PostException,UserException;
	
	public Post likePost(Integer PostId,Integer integer) throws UserException,PostException;
	
	public Post unlikePost(Integer PostId,Integer userId) throws UserException, PostException;

	Post createPost(Post Post, Integer userId) throws UserException;

	
}
