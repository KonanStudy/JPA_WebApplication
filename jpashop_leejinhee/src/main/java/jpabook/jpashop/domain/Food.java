package jpabook.jpashop.domain;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name = "food")
@Getter @Setter
public class Food {

    @Id
    @GeneratedValue
    @Column(name = "food_id")
    private Long foodId;

    private String foodType;
    private String restaurant;
    private String menuName;
    private String region;
    private String city;
    private String recommend;


    public static Food createMenu(Long foodId, String foodType, String restaurant, String menuName, String region, String city, String recommend) {
        Food menu = new Food();
        menu.setFoodType(foodType);
        menu.setRestaurant(restaurant);
        menu.setMenuName(menuName);
        menu.setRegion(region);
        menu.setCity(city);
        menu.setRecommend(recommend);
        return menu;
    }


    }

