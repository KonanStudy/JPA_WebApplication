package jpabook.jpashop.web.controller;

import jpabook.jpashop.web.vo.SearchParamVo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class SearchController {

    @GetMapping("/search")
    public String Search(@ModelAttribute("params") SearchParamVo paramvo, Model model){

        model.addAttribute("sampleTotal",1);
        model.addAttribute("error","");

        List<Map<String, String>> getResult = new ArrayList<>();
        Map<String, String> map = new HashMap<>();
        map.put("post_id", "1");
        map.put("post_url", "url");
        map.put("title", "타이틀");
        map.put("created_ymd", "20220517");
        map.put("message","메시지");
        map.put("category", "샘플");

        getResult.add(map);
        model.addAttribute("sampleList", getResult);
        model.addAttribute("ed", "20220517");

        return "search/searchHome";
    }
}
