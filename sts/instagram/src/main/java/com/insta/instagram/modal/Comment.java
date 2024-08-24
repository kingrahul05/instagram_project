package com.insta.instagram.modal;

import java.time.LocalDateTime;

import java.util.HashSet;
import java.util.Set;

import com.insta.instagram.dto.UserDto;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.AttributeOverrides;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Comment {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	@Embedded
	@AttributeOverrides({
		@AttributeOverride(name="id", column=@Column(name="user_id")),
		@AttributeOverride(name="email",column=@Column(name="user_email")),
	})
	private UserDto user;
	
	private String content;
	
	@Embedded
	@ElementCollection
	private Set<UserDto> likeByUsers=new HashSet<UserDto>();
	
	private LocalDateTime createdAt;

	
		public Comment() {
				
		}
	public Comment(Integer id, UserDto user, String content, Set<UserDto> likeByUsers, LocalDateTime createdAt) {
		super();
		this.id = id;
		this.user = user;
		this.content = content;
		this.likeByUsers = likeByUsers;
		this.createdAt = createdAt;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public UserDto getUser() {
		return user;
	}

	public void setUser(UserDto user) {
		this.user = user;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Set<UserDto> getLikeByUsers() {
		return likeByUsers;
	}

	public void setLikeByUsers(Set<UserDto> likeByUsers) {
		this.likeByUsers = likeByUsers;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	
	
	
	
	
	
	
	

}
