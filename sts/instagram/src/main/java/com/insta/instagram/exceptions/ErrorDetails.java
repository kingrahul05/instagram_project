package com.insta.instagram.exceptions;

import java.time.LocalDateTime;

public class ErrorDetails {
	
	private String message;
	private String dteails;
	private LocalDateTime timestamp; 
	
	
	public ErrorDetails() {
		
	}


	public ErrorDetails(String message, String dteails, LocalDateTime timestamp) {
		super();
		this.message = message;
		this.dteails = dteails;
		this.timestamp = timestamp;
	}
	
	

}
