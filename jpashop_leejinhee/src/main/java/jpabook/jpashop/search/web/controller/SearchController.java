package jpabook.jpashop.search.web.controller;

import jpabook.jpashop.search.util.CommonUtil;
import jpabook.jpashop.search.web.service.SearchService;
import jpabook.jpashop.search.web.vo.RestResultVo;
import jpabook.jpashop.search.web.vo.SearchParamVo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static jpabook.jpashop.search.constants.SearchConstant.DEFAULT_PAGE_SIZE;
import static jpabook.jpashop.search.constants.SearchConstant.TOTAL_PAGE_SIZE;

@Controller
@RequiredArgsConstructor
public class SearchController {

    @Autowired
    CommonUtil comUtil;

    private final SearchService searchService;

    private String totalCategory = "foodNation,foodBaek";

    @GetMapping("/searchgo")
    public String SearchGet(@ModelAttribute("params") SearchParamVo paramvo, Model model){

        setDefaultParam(paramvo);

        searchService.searchModel(paramvo, model, totalCategory);
        model.addAttribute("params",paramvo);

        return "search/searchHome";
    }

    @RequestMapping(value = "/searchpo", method = {RequestMethod.GET, RequestMethod.POST})
    public String SearchPost(@ModelAttribute("params") SearchParamVo paramvo, Model model){

        setDefaultParam(paramvo);

        searchService.searchModel(paramvo, model, totalCategory);
        model.addAttribute("params",paramvo);

        return "search/searchHome";
    }

    private void setDefaultParam(SearchParamVo paramVo) {

        if("total".equals(paramVo.getCategory())){
            paramVo.setPageSize(TOTAL_PAGE_SIZE);
            paramVo.setOffset(0);
        } else {
            paramVo.setPageSize(DEFAULT_PAGE_SIZE);
            paramVo.setOffset((paramVo.getPage()-1) * paramVo.getPageSize());
        }

        //정렬
        if("r".equals(paramVo.getSort())) {
            paramVo.setSortNm("정확도순");
        }else if("c".equals(paramVo.getSort())) {
            paramVo.setSortNm("클릭순");
        }else {
            paramVo.setSortNm("최신순");
        }

        if(null == paramVo.getDate() || "".equals(paramVo.getDate()) || "input".equals(paramVo.getDate())) {
            paramVo.setStartDate("");
            paramVo.setEndDate("");
            return;
        }

        int datenum =1;
        if("3m".equals(paramVo.getDate())) {
            datenum = 3;
        }

        paramVo.setStartDate(comUtil.getDateMinusFormat(paramVo.getDate(), "yyyyMMdd", datenum));
        paramVo.setEndDate(comUtil.getDateFormat("yyyyMMdd"));

    }
}
