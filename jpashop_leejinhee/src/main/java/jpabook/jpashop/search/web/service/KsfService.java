package jpabook.jpashop.search.web.service;

import static jpabook.jpashop.search.constants.SearchConstant.CHARSET;
import static jpabook.jpashop.search.constants.SearchConstant.KSF_URL;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import jpabook.jpashop.search.util.HttpUtil;
import jpabook.jpashop.search.web.vo.KsfParamVo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class KsfService {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());
    HttpUtil httpUtil;

    @Autowired
    public KsfService(HttpUtil httpUtil) {
        this.httpUtil = httpUtil;
    }

    //자동완성
    public String getAutocomplete(KsfParamVo paramvo) {
        StringBuilder sbUrl = new StringBuilder();
        sbUrl.append(KSF_URL);
        sbUrl.append("suggest");
        sbUrl.append("?target=complete");
        sbUrl.append("&term=").append(httpUtil.urlEncode(paramvo.getTerm(), CHARSET) );
        sbUrl.append("&mode=").append(paramvo.getMod());
        sbUrl.append("&domain_no=").append( paramvo.getDomainNo());
        sbUrl.append("&max_count=").append(paramvo.getMaxCount());


        logger.info(sbUrl.toString());
        StringBuffer sb = httpUtil.getUrlData(sbUrl.toString());
        logger.info(sb.toString());
        return sb.toString();

    }

    public String getPopularKwd(KsfParamVo paramvo) {
        StringBuilder sbUrl = new StringBuilder();
        sbUrl.append(KSF_URL);
        sbUrl.append("rankings");
        sbUrl.append("?domain_no=").append(paramvo.getDomainNo());
        sbUrl.append("&max_count=").append( paramvo.getMaxCount());
        logger.debug(sbUrl.toString());
        StringBuffer sb = httpUtil.getUrlData(sbUrl.toString());
        try{
            List<Map<String, String>> list = new ArrayList<> ();
            Map<String, String> map;

            Gson gson = new Gson();
            List<String[]> ppkjson = gson.fromJson(sb.toString(), new TypeToken<List<String[]>>() {}.getType());

            for(String[] arr : ppkjson ) {
                map = new HashMap<>();
                map.put("ppk",  arr[0]);
                map.put("meta", arr[1]);
                list.add(map);
                map = null;
            }

            return gson.toJson(list);

        } catch (Exception e){
            return "";
        }

    }

    public String getRelatedKwd(KsfParamVo paramvo) {
        StringBuilder sbUrl = new StringBuilder();
        sbUrl.append(KSF_URL);
        sbUrl.append("suggest");
        sbUrl.append("?target=related");
        sbUrl.append("&term=" ).append( httpUtil.urlEncode(paramvo.getTerm(), CHARSET) );
        sbUrl.append("&domain_no=").append(paramvo.getDomainNo());
        sbUrl.append("&max_count=").append(paramvo.getMaxCount());
        logger.info(sbUrl.toString());
        StringBuffer sb = httpUtil.getUrlData(sbUrl.toString());

        return sb.toString();

    }

    public String getSpellChek(String term) {
        StringBuilder sbUrl = new StringBuilder();
        sbUrl.append(KSF_URL);
        sbUrl.append("suggest");
        sbUrl.append("?target=spell");
        sbUrl.append("&term=").append(httpUtil.urlEncode(term) );
        logger.info(sbUrl.toString());
        StringBuffer sb = httpUtil.getUrlData(sbUrl.toString());

        return sb.toString();
    }

}
