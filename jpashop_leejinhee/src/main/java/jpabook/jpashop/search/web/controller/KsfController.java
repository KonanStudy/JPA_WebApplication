package jpabook.jpashop.search.web.controller;

import static jpabook.jpashop.search.constants.SearchConstant.CONTENT_TYPE_APPLICATION_JSON;

import jpabook.jpashop.search.web.service.KsfService;
import jpabook.jpashop.search.web.vo.KsfParamVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KsfController {

    private final KsfService ksfService;
    private KsfParamVo paramvo;
    private Model model;

    @Autowired
    public KsfController(KsfService ksfService) {
        this.ksfService = ksfService;
    }

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

        return result;
    }

}
