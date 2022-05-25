package jpabook.jpashop.search.dao;

import jpabook.jpashop.search.util.CommonUtil;
import jpabook.jpashop.search.web.vo.SearchParamVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;

public class boardDAO {
    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    public Model boardSearch(SearchParamVo paramVo, Model model){
        logger.info("boardSearch");
        try{
            String listName = "boardList";
            String totalName="boardTotal";

            //SearchParamVo paramvo = (SearchParamVo)request.getAttribute("params");
            String kwd = paramVo.getKwd();

            //검색어 없을 경우
            if(kwd.isEmpty()){
                model.addAttribute(totalName, 0 );
                return model;
            }

            //검색어 있을 경우
            //SearchRestVo restvo = new SearchRestVo();
            //RestModule module = new RestModule();

            CommonUtil comUtil = new CommonUtil();
            StringBuffer sbquery = new StringBuffer();
            StringBuffer sbcustom = new StringBuffer();
            String strNmFd = paramVo.getFields().isEmpty()? "text_idx": paramVo.getFields();
            //상세검색
            if(paramVo.isDetail() ){
                sbquery.append(	 comUtil.makeDetailQuery(paramVo, strNmFd));
            }else{  //일반검색
                sbquery.append(strNmFd);
                sbquery.append(" = '").append(kwd).append("' allword synonym ");
            }

            //결과내재검색
            if(paramVo.isResrch()){
                if(sbquery.length() > 0) sbquery.append(" and ");
                sbquery.append(  comUtil.makeReSearchQuery(paramVo, strNmFd));
            }

            //범위검색
            if( !paramVo.getStartDate().isEmpty()){
                sbquery.append(" and created_ymd >= '").append(paramVo.getStartDate()).append("' ");
            }
            if( !paramVo.getEndDate().isEmpty()){
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

            //restvo.setSelectFields("post_id,user_id,post_url,created_ymd,category,title,message");
            //restvo.setFrom("sample.post");
            //restvo.setWhere( sbquery.toString() );
            //restvo.setOffset( paramVo.getOffset() );
            //restvo.setPagelength(paramVo.getPageSize() );
            //restvo.setHilightFields("{'title':{'length':250,'begin':'<strong>','end':'</strong>'}},{'message':{'length':200,'begin':'<strong>','end':'</strong>'}}");
            //restvo.setCustomLog(comUtil.getCustomLog(paramVo)  );

            //RestResultVo resultvo = module.restSearchPost(restvo);



            logger.debug(">>>>>>>>>>>>>  query-sample "+paramVo);
            //logger.debug(">>>>>>>>>>>>>  resultvo list "+resultvo.getResult() );
            //logger.debug(">>>>>>>>>>>>>  resultvo total "+resultvo.getTotal());

            //request.setAttribute(listName, resultvo.getResult() );
            logger.info("boardSearch model");
            model.addAttribute(totalName,3);

        }catch (Exception e){
            e.printStackTrace();
            logger.error(" board error - "+e.toString());
            //request.setAttribute("error", SearchConstant.MSG_SEARCH_ERROR);
        }
    return model;
    }

}
