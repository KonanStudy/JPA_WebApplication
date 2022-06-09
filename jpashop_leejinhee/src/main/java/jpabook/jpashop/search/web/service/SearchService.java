package jpabook.jpashop.search.web.service;

import jpabook.jpashop.search.web.vo.SearchParamVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.lang.reflect.Method;
import java.util.Map;

@Service
public class SearchService {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    public Model searchModel(SearchParamVo paramvo, Model model, String totalCategory) {

        String searchCategory = "";
        int total = 0;

        if(!"total".equals(paramvo.getCategory())){
            searchCategory = paramvo.getCategory();
        }else{
            searchCategory = totalCategory;
        }

        //if ("total".equals(paramvo.getCategory())) {
            String[] split = searchCategory.split(",");
            for (int i = 0; i < split.length; i++) {
                String categoryClass = split[i];
                String methodName= "";
                try {
                    String name = "jpabook.jpashop.search.dao." +categoryClass+"DAO";
                    /*if(!"".equals(paramvo.getKwd())){
                        methodName = categoryClass+ "CustomSearch";
                    }else{
                        methodName = categoryClass+ "Search";
                    }*/
                    if(!"".equals(paramvo.getKwd()) && "".equals(paramvo.getClickCity())){
                        methodName = categoryClass+ "CustomSearch";
                    }else{
                        methodName = categoryClass+ "Search";
                    }
                    String totalName = categoryClass + "Total";
                    Class<?> formatClass = Class.forName(name);
                    Object newObj = formatClass.newInstance();
                    Method m = formatClass.getMethod(methodName,SearchParamVo.class, Model.class);
                    m.invoke(newObj, paramvo, model);
                    int count = Integer.parseInt(String.valueOf(model.getAttribute(totalName)));
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
