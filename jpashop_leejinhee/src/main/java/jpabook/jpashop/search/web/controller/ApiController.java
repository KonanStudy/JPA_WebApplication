package jpabook.jpashop.search.web.controller;

import jpabook.jpashop.search.web.service.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class ApiController {

    private final ApiService apiService;
    //private String totalCategory = "foodNation,foodBaek";

    @RequestMapping(value = "/api/getDavifData", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public String getDavifData(@RequestParam Map<String, String> map, Model model){
        String result ="";

        String type = map.get("type").toString();
        result = apiService.getGroupingSearch(map, model, type).toString();

        return result;
    }

    @RequestMapping(value = "/api/getCloud", method = {RequestMethod.GET, RequestMethod.POST})
    public String getCloud(@RequestParam Map<String, String> map, Model model){
        String[] result = map.get("cloudData").split(" ");

        List<Map<String,String>> list = new ArrayList<>();
        Map<String, String> mapResult;

        for (String name:result){
            mapResult = new HashMap<>();
            if(!"".equals(name.replace("\"", ""))){
                mapResult.put("name",name.replace("\"",""));
                mapResult.put("value","1");
                list.add(mapResult);
            }
        }
        model.addAttribute("json", list);

        return "search/result/CloudDraw";
    }
}
