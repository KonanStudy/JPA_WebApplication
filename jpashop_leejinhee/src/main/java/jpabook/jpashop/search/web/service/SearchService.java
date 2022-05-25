package jpabook.jpashop.search.web.service;

import jpabook.jpashop.search.web.vo.RestResultVo;
import jpabook.jpashop.search.web.vo.SearchParamVo;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;

import java.lang.reflect.Method;

@Service
public class SearchService {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    public Model searchModel(SearchParamVo paramvo, Model model, String totalCategory) {
        int total = 0;

        //if ("total".equals(paramvo.getCategory())) {
            String[] split = totalCategory.split(",");
            for (int i = 0; i < split.length; i++) {
                String categoryClass = split[i];

                try {
                    String name = "jpabook.jpashop.search.dao." +categoryClass+"DAO";
                    String methodName = categoryClass+ "Search";
                    String totalName = categoryClass + "Total";
                    Class<?> formatClass = Class.forName(name);
                    Object newObj = formatClass.newInstance();
                    Method m = formatClass.getMethod(methodName,SearchParamVo.class, Model.class);
                    m.invoke(newObj, paramvo, model);
                    int count = (int) model.getAttribute(totalName);
                    total += count;

                } catch (Exception e) {
                    //throw new RuntimeException(e);
                    logger.error(" searchModel error - "+e.toString());
                }
            }

        //} else {

        //}
        model.addAttribute("total",total);
        return model;
    }
}
