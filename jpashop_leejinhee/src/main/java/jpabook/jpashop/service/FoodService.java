package jpabook.jpashop.service;

import jpabook.jpashop.domain.Food;
import jpabook.jpashop.domain.item.Item;
import jpabook.jpashop.repository.ItemRepository;
import jpabook.jpashop.repository.FoodRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.awt.*;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FoodService {

    private final FoodRepository foodRepository;

    @Transactional
    public void saveFood(Food food){
        foodRepository.save(food);
    }

    public List<Food> findFoods() {
        return foodRepository.findAll();
    }

    @Transactional
    public void updateFood(Long foodId,String foodType, String restaurant, String menuName, String region, String city, String recommend){
        Food findFood = foodRepository.findOne(foodId);
        findFood.setFoodType(foodType);
        findFood.setRestaurant(restaurant);
        findFood.setMenuName(menuName);
        findFood.setRegion(region);
        findFood.setCity(city);
        findFood.setRecommend(recommend);
    }

    public Food findOne(Long foodId) {
        return foodRepository.findOne(foodId);
    }

}
