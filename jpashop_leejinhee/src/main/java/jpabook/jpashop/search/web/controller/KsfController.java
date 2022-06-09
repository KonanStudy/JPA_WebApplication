package jpabook.jpashop.search.web.controller;

import static jpabook.jpashop.search.constants.SearchConstant.CHARSET;
import static jpabook.jpashop.search.constants.SearchConstant.CONTENT_TYPE_APPLICATION_JSON;

import jpabook.jpashop.search.util.HttpUtil;
import jpabook.jpashop.search.web.service.KsfService;
import jpabook.jpashop.search.web.vo.KsfParamVo;
import lombok.RequiredArgsConstructor;
import org.springframework.aop.scope.ScopedObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class KsfController {

    private final KsfService ksfService;
    private KsfParamVo paramvo;
    private Model model;
    HttpUtil httpUtil;

    /**
     * ksf_자동완성
     * @param paramvo
     * @param model
     * @return
     */
    @RequestMapping(value = "/ksf/akc", produces=CONTENT_TYPE_APPLICATION_JSON, method = RequestMethod.GET)
    public String getCompleteKwd(@ModelAttribute KsfParamVo paramvo , Model model) {
        this.paramvo = paramvo;
        this.model = model;

        String result = null;

        if( !paramvo.getTerm().isEmpty()) {
            result = ksfService.getAutocomplete(paramvo);
            System.out.println("result : " + result);
        }

        return result;
    }

    /**
     * ksf_인기검색어
     * @param paramvo
     * @param model
     * @return
     */
    @RequestMapping(value = "/ksf/ppk", produces=CONTENT_TYPE_APPLICATION_JSON, method = RequestMethod.GET)
    public String getPopularKwd(@ModelAttribute KsfParamVo paramvo , Model model) {

        String result = null;
        result = ksfService.getPopularKwd(paramvo);

        return result;
    }

    /**
     * ksf_추천검색어
     * @param paramvo
     * @param model
     * @return
     */
    @RequestMapping(value = "/ksf/kre", produces=CONTENT_TYPE_APPLICATION_JSON, method = RequestMethod.GET)
    public String getRelatedKwd(@ModelAttribute KsfParamVo paramvo , Model model) {

        String result = null;

        if( !paramvo.getTerm().isEmpty()) {
            result = ksfService.getRelatedKwd(paramvo);
        }
        System.out.println("result : " + result);
        return result;
    }

    /**
     * 오타교정 단어 조회
     * @param map
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/ksf/spell", produces=CONTENT_TYPE_APPLICATION_JSON, method = RequestMethod.GET)
    public String getSpellChek(@RequestParam Map<String, String> map, Model model) throws Exception {

        String result = null;

        if(map.get("term").length() > 0) {
            String kwd = map.get("term");
            result = ksfService.getSpellChek(kwd);

        }
        System.out.println("spell : " + result);
        return result;
    }

}
