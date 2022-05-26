package com.skilldistillery.foodtruck.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.foodtruck.entities.User;
import com.skilldistillery.foodtruck.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public User getUserById(int userId) {
		Optional<User> userOpt = userRepo.findById(userId);
		if (userOpt.isPresent()) {
			return userOpt.get();
		}
		return null;
	}

	@Override
	public User getUserByUsername(String username) {
		User user = userRepo.findByUsername(username);
		if(user != null) {
		return user;}
		
		return null;
	}

	@Override
	public User update(String username, int id, User user) {
		Optional<User> op = userRepo.findById(id);
		User user1 = null;
		if (op.isPresent()) {
			user1 = op.get();
			if(user1.getUsername().equals(username)) {
				user.setId(id);
				return userRepo.saveAndFlush(user);
			}
		}
		return null;
	}

	@Override
	public boolean delete(String username, int id) {
		Optional<User> op = userRepo.findById(id);
		User user1 = null;
		if (op.isPresent()) {
			user1 = op.get();
			if(user1.getUsername().equals(username)) {
				userRepo.deleteById(id);
				op = userRepo.findById(id);
				return !op.isPresent();
			}
		}
		return false;
	}

}
