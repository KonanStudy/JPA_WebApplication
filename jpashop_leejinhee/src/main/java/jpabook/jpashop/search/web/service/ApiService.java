package jpabook.jpashop.search.web.service;

import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;

@Service
public class ApiService {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    public String getGroupingSearch(Map<String, String> map, Model model, String Type){
        List<Map<String, String>> result;
        String value="";
        String categoryClass = "foodNation";

        try {
            String name = "jpabook.jpashop.search.dao." +categoryClass+"DAO";
            String methodName = categoryClass+ "Get" + Type;
            Class<?> formatClass = Class.forName(name);
            Object newObj = formatClass.newInstance();
            Method m = formatClass.getMethod(methodName,Map.class, Model.class);
            result = (List<Map<String, String>>) m.invoke(newObj, map, model);
            value = new Gson().toJson(result);

        } catch (Exception e) {
            //throw new RuntimeException(e);
            logger.error(Type + " grouping error - "+e.toString());
        }
        return value;
    }

}
