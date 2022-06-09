package jpabook.jpashop.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QFood is a Querydsl query type for Food
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QFood extends EntityPathBase<Food> {

    private static final long serialVersionUID = -1203027295L;

    public static final QFood food = new QFood("food");

    public final StringPath city = createString("city");

    public final NumberPath<Long> foodId = createNumber("foodId", Long.class);

    public final StringPath foodType = createString("foodType");

    public final StringPath menuName = createString("menuName");

    public final StringPath recommend = createString("recommend");

    public final StringPath region = createString("region");

    public final StringPath restaurant = createString("restaurant");

    public QFood(String variable) {
        super(Food.class, forVariable(variable));
    }

    public QFood(Path<? extends Food> path) {
        super(path.getType(), path.getMetadata());
    }

    public QFood(PathMetadata metadata) {
        super(Food.class, metadata);
    }

}

