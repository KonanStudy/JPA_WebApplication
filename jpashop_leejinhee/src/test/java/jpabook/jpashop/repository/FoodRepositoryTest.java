package jpabook.jpashop.repository;

import jpabook.jpashop.domain.Food;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.awt.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FoodRepositoryTest {

    @Autowired
    FoodRepository foodRepository;

    @Test
    @Transactional
    public void testFood() throws Exception{
        //given
        Food food = new Food();
        food.setFoodType("한식");
        //when
        Long savedId = foodRepository.save(food);
        Food findFood = foodRepository.findOne(savedId);

        //then
        Assertions.assertThat(findFood.getFoodId()).isEqualTo(findFood.getFoodId());
        Assertions.assertThat(findFood.getMenuName()).isEqualTo(food.getMenuName());

    }

}