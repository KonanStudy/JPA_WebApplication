package jpabook.jpashop.controller;

import jpabook.jpashop.domain.Food;
import jpabook.jpashop.domain.item.Book;
import jpabook.jpashop.domain.item.Item;
import jpabook.jpashop.service.FoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.awt.*;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class FoodController {

    private final FoodService foodService;

    @GetMapping("/foods/new")
    public String createForm(Model model){
        model.addAttribute("foodForm", new FoodForm());
        return "foods/createFoodForm";
    }

    @PostMapping("/foods/new")
    public String create(FoodForm form){
        Food food = new Food();

        food.setFoodType(form.getFoodType());
        food.setRestaurant(form.getRestaurant());
        food.setMenuName(form.getMenuName());
        food.setRegion(form.getRegion());
        food.setCity(form.getCity());
        food.setRecommend(form.getRecommend());

        foodService.saveFood(food);
        return "redirect:/";

    }

    @GetMapping("/foods")
    public String list(Model model){
        List<Food> foods = foodService.findFoods();
        model.addAttribute("foods", foods);
        return "foods/foodList";

    }

    @GetMapping("foods/{foodId}/edit")
    public String updateFoodForm(@PathVariable("foodId") Long foodId, Model model){
        Food food = (Food) foodService.findOne(foodId);

        FoodForm form = new FoodForm();
        form.setFoodId(food.getFoodId());
        form.setFoodType(food.getFoodType());
        form.setRestaurant(food.getRestaurant());
        form.setMenuName(food.getMenuName());
        form.setRegion(food.getRegion());
        form.setRecommend(food.getCity());
        form.setRecommend(food.getRecommend());

        model.addAttribute("foodForm", form);

        return "foods/updateFoodForm";
    }

    @PostMapping("foods/{foodId}/edit")
    public String updateFood(@PathVariable Long foodId, @ModelAttribute("form") FoodForm form){

        foodService.updateFood(foodId, form.getFoodType(), form.getRestaurant(), form.getMenuName(), form.getRegion(), form.getCity(), form.getRecommend());

        return "redirect:/foods";

    }


}
