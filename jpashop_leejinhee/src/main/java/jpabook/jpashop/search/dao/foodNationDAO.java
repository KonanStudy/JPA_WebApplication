package jpabook.jpashop.search.dao;

import jpabook.jpashop.search.constants.SearchConstant;
import jpabook.jpashop.search.module.RestModule;
import jpabook.jpashop.search.util.CommonUtil;
import jpabook.jpashop.search.web.vo.RestResultVo;
import jpabook.jpashop.search.web.vo.SearchParamVo;
import jpabook.jpashop.search.web.vo.SearchRestVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class foodNationDAO {
    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    public Model foodNationSearch(SearchParamVo paramVo, Model model){
        logger.info("foodNationSearch");
        try{
            String listName = "foodNationList";
            String totalName="foodNationTotal";

            //SearchParamVo paramvo = (SearchParamVo)request.getAttribute("params");
            String kwd = paramVo.getKwd();

            //검색어 없을 경우
            /*if(kwd.isEmpty() && paramVo.getClickCity().isEmpty()){
                model.addAttribute(totalName, 0 );
                return model;

            }*/

                //검색어 있을 경우
                SearchRestVo restvo = new SearchRestVo();
                RestModule module = new RestModule();

                CommonUtil comUtil = new CommonUtil();
                StringBuffer sbquery = new StringBuffer();
                StringBuffer sbcustom = new StringBuffer();
                String strNmFd = paramVo.getFields().isEmpty() ? "text_idx" : paramVo.getFields();
                if("title".equals(strNmFd)) strNmFd = "restaurant_nm";

                //상세검색
                if (paramVo.isDetail()) {
                    sbquery.append(comUtil.makeDetailQuery(paramVo, strNmFd));
                } else {  //일반검색
                    //sbquery.append(strNmFd);
                    ////sbquery.append(" = '").append(kwd).append("' allword synonym ");
                    //if("text_idx".equals(strNmFd)){
                    //    sbquery.append(" = '").append(kwd).append("' anyword");
                    //}else{
                    //    sbquery.append(" like '*").append(kwd).append("*' ");
                    //}
                    sbquery.append(kwd);
                }

                if (!kwd.isEmpty() && !paramVo.getClickCity().isEmpty()) {
                    //sbquery.append(" and region = '").append(paramVo.getClickCity()).append("' ");
                    sbquery.insert(0,paramVo.getClickCity().toString() + " ");
                }else if(kwd.isEmpty() && !paramVo.getClickCity().isEmpty()){
                    sbquery.setLength(0);
                    //sbquery.append("region= '").append(paramVo.getClickCity()).append("' ");
                    sbquery.append(paramVo.getClickCity());
                }else if(kwd.isEmpty() && paramVo.getClickCity().isEmpty()){
                    model.addAttribute(totalName, 0 );
                    return model;
                }

                //결과내재검색
                if (paramVo.isResrch()) {
                    if (sbquery.length() > 0) sbquery.append(" and ");
                    sbquery.append(comUtil.makeReSearchQuery(paramVo, strNmFd));
                }

                //범위검색
                if (!paramVo.getStartDate().isEmpty()) {
                    sbquery.append(" and created_ymd >= '").append(paramVo.getStartDate()).append("' ");
                }
                if (!paramVo.getEndDate().isEmpty()) {
                    sbquery.append(" and created_ymd <= '").append(paramVo.getEndDate()).append("' ");
                }


                //정렬조건 d:최신순, r: 정확도순, c: 클릭순
            /*switch(paramVo.getSort()){
                case "d":
                    sbquery.append(" order by created_ymd desc ");
                    break;
                case "r":
                    sbquery.append(" order by $relevance desc ");
                    break;
                case "c":
                    String docids = module.getKeywordDocidRank(kwd, "sample", "w");
                    if(!docids.isEmpty()){
                        sbquery.append(" order by post_id (").append(docids).append(") ");
                    }
                    break;
                default:
                    sbquery.append(" order by created_ymd desc ");
                    break;
            }*/



            restvo.setUrl(restvo.getCustomSearchUrl().toString());
            restvo.setSelectFields("region,city_nm,food_type,menu,restaurant_nm,srch_kwd,corpus,corpus_kwd");
            restvo.setFrom("food_nation.food_nation");
            restvo.setWhere( sbquery.toString());
            restvo.setOffset( paramVo.getOffset() );
            restvo.setPagelength(paramVo.getPageSize() );
            restvo.setHilightFields("{'restaurant_nm':{'length':250,'begin':'<strong>','end':'</strong>'}},{'recommend':{'length':200,'begin':'<strong>','end':'</strong>'}}");
            restvo.setCustomLog(comUtil.getCustomLog(paramVo)  );

            logger.info(">>>>>>>>>>>>>  foodNation query: "+ restvo.toString());
            //RestResultVo resultvo = module.restSearchPost(restvo);
            RestResultVo resultvo = module.customRestSearchGet(restvo);


            logger.debug(">>>>>>>>>>>>>  query-sample "+paramVo);
            logger.debug(">>>>>>>>>>>>>  resultvo list "+resultvo.getResult() );
            logger.debug(">>>>>>>>>>>>>  resultvo total "+resultvo.getTotal());

            model.addAttribute(listName, resultvo.getResult() );
            model.addAttribute(totalName,resultvo.getTotal());


        }catch (Exception e){
            e.printStackTrace();
            logger.error(" foodNation error - "+e.toString());
            model.addAttribute("error", SearchConstant.MSG_SEARCH_ERROR);
        }
    return model;
    }

    public List<Map<String, String>> foodNationGetMap(Map<String, String> map, Model model){
        logger.info("foodNationGetMap");
        List<Map<String, String>> result = new ArrayList<>();
        try{
            //검색어 있을 경우
            SearchRestVo restvo = new SearchRestVo();
            RestModule module = new RestModule();

            CommonUtil comUtil = new CommonUtil();
            StringBuffer sbquery = new StringBuffer();
            StringBuffer sbcustom = new StringBuffer();
            //String strNmFd = paramVo.getFields().isEmpty() ? "text_idx" : paramVo.getFields();

            String kwd = map.get("kwd").toString();
            String region = map.get("region").toString();


            if(!kwd.isEmpty()){
                sbquery.append(kwd);
            }

            if (!kwd.isEmpty() && !region.isEmpty()) {
                //sbquery.append(" and region = '").append(paramVo.getClickCity()).append("' ");
                sbquery.insert(0,region + " ");
            }else if(kwd.isEmpty() && !region.isEmpty()){
                sbquery.setLength(0);
                //sbquery.append("region= '").append(paramVo.getClickCity()).append("' ");
                sbquery.append(region);
            }

            //sbquery.append(" group by region order by count(*) desc");

            restvo.setUrl(restvo.getCustomMapUrl().toString());
            restvo.setSelectFields("region,count(*)");
            restvo.setFrom("food_nation.food_nation");
            restvo.setWhere( sbquery.toString());
            restvo.setPagelength(30);

            logger.info(">>>>>>>>>>>>>  foodNationGetMap query: "+ restvo.toString());
            //RestResultVo resultvo = module.restSearchGroupingPost(restvo);
            //RestResultVo resultvo = module.restSearchGroupingGet(restvo);
            RestResultVo resultvo = module.customRestSearchGet(restvo);

            result = resultvo.getResult();

        }catch (Exception e){
            e.printStackTrace();
            logger.error(" foodNationGetMap error - "+e.toString());
            model.addAttribute("error", SearchConstant.MSG_SEARCH_ERROR);
        }
        return result;
    }



    public List<Map<String, String>> foodNationGetCloud(Map<String, String> map, Model model){
        logger.info("foodNationGetCloud");
        List<Map<String, String>> result = new ArrayList<>();
        try{
            //검색어 있을 경우
            SearchRestVo restvo = new SearchRestVo();
            RestModule module = new RestModule();

            CommonUtil comUtil = new CommonUtil();
            StringBuffer sbquery = new StringBuffer();
            StringBuffer sbcustom = new StringBuffer();
            //String strNmFd = paramVo.getFields().isEmpty() ? "text_idx" : paramVo.getFields();

            sbquery.append("food_type like '").append(map.get("foodType").toString()).append("*'");
            sbquery.append(" group by food_type,menu order by count(*) desc");

            restvo.setUrl(restvo.getCloudGroupingUrl().toString());
            restvo.setSelectFields("menu");
            restvo.setFrom("food_nation");
            restvo.setWhere( sbquery.toString() );
            restvo.setPagelength(100);

            logger.info(">>>>>>>>>>>>>  foodNationGetCloud query: "+ restvo.toString());
            //RestResultVo resultvo = module.restSearchGroupingPost(restvo);
            RestResultVo resultvo = module.restSearchCloudPost(restvo);

            result = resultvo.getResult();

        }catch (Exception e){
            e.printStackTrace();
            logger.error(" foodNationGetCloud error - "+e.toString());
            model.addAttribute("error", SearchConstant.MSG_SEARCH_ERROR);
        }
        return result;
    }


}
