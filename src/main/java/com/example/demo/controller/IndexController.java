package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
	@GetMapping("/index")
	public String index() {
		return "index";
	}
	
	@GetMapping("/transition")
	public String transition(){
		return "transition";
	}
	
	@GetMapping("/template")
	public String template() {
		return "template";
	}
	
	@GetMapping("/property")
	public String property() {
		return "property";
	}
}
