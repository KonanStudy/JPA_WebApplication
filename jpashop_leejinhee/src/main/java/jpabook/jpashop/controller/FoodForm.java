package jpabook.jpashop.controller;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class FoodForm {

    private Long foodId;

    private String foodType;
    private String restaurant;
    private String menuName;
    private String region;
    private String city;
    private String recommend;
}
