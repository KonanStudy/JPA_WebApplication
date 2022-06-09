package jpabook.jpashop.domain.item;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QAlubm is a Querydsl query type for Alubm
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAlubm extends EntityPathBase<Alubm> {

    private static final long serialVersionUID = 521125021L;

    public static final QAlubm alubm = new QAlubm("alubm");

    public final QItem _super = new QItem(this);

    public final StringPath artist = createString("artist");

    //inherited
    public final ListPath<jpabook.jpashop.domain.Category, jpabook.jpashop.domain.QCategory> categories = _super.categories;

    public final StringPath etc = createString("etc");

    //inherited
    public final NumberPath<Long> id = _super.id;

    //inherited
    public final StringPath name = _super.name;

    //inherited
    public final NumberPath<Integer> price = _super.price;

    //inherited
    public final NumberPath<Integer> stockQuantity = _super.stockQuantity;

    public QAlubm(String variable) {
        super(Alubm.class, forVariable(variable));
    }

    public QAlubm(Path<? extends Alubm> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAlubm(PathMetadata metadata) {
        super(Alubm.class, metadata);
    }

}

