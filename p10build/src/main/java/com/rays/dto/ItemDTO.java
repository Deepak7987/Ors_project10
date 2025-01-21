package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;


@Entity
@Table (name = "ST_ITEM")
public class ItemDTO extends BaseDTO{
	
	@Column(name = "TITLE")
	private String title;
	
	@Column(name = "OVERVIEW")
	private String overview;
	
	@Column(name = "COST")
	private Long cost;
	
	@Column(name = "PURCHASEDATE")
	private Date purchaseDate;

	@Column(name = "CATEGORY")
	private String category;// preload
	

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getOverview() {
		return overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public Long getCost() {
		return cost;
	}

	public void setCost(Long cost) {
		this.cost = cost;
	}

	public Date getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return "title";
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "title";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return id+"";
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "title";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("title", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("id", id);
		return map;
	}
}
