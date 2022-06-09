package jpabook.jpashop.repository;

import jpabook.jpashop.domain.Food;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class FoodRepository {

    @PersistenceContext
    private final EntityManager em;

    public Long save(Food food){
        em.persist(food);

        return food.getFoodId();
    }

    public Food findOne(Long id) {
        return em.find(Food.class, id);
    }

    public List<Food> findAll() {
        return em.createQuery("select f from Food f", Food.class)
                .getResultList();
    }
}
