package com.skilldistillery.foodtruck.entities;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class TaggedTruck {

	@Id
	@GeneratedValue
	private int id;
	
	@Column(name="photo_url")
	private String photoUrl;
	
	private String comment;
	@Column(name="date_tagged")
	private LocalDate dateTagged;
	
	//TODO: add mappings for  location, user
	
	@ManyToOne
	@JoinColumn(name="food_truck_id")
	private FoodTruck foodTruck;
	
	public TaggedTruck() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPhotoUrl() {
		return photoUrl;
	}

	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public LocalDate getDateTagged() {
		return dateTagged;
	}

	public void setDateTagged(LocalDate dateTagged) {
		this.dateTagged = dateTagged;
	}

	public FoodTruck getFoodTruck() {
		return foodTruck;
	}

	public void setFoodTruck(FoodTruck foodTruck) {
		this.foodTruck = foodTruck;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TaggedTruck other = (TaggedTruck) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "TaggedTruck [id=" + id + ", photoUrl=" + photoUrl + ", comment=" + comment + ", dateTagged="
				+ dateTagged + "]";
	}
	
	
	
	
}
