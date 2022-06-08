package jpabook.jpashop.search.module;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jpabook.jpashop.search.util.HttpUtil;
import jpabook.jpashop.search.web.vo.RestResultVo;
import jpabook.jpashop.search.web.vo.SearchRestVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;

import static jpabook.jpashop.search.constants.ExceptionConstant.SEARCH5_EXCEPTION;
import static jpabook.jpashop.search.constants.SearchConstant.SEARCH_WARNING;


@Component
public class RestModule {

	private static final Logger logger = LoggerFactory.getLogger(RestModule.class);


	/**
	 * 검색 호출시 클릭순으로 정렬하기 위한 데이터 조회
	 * @param paramvo
	 * @param duration
	 * @param datenum
	 * @return
	 */
	/*public String getKeywordDocidRank(String kwd, String category, String duration) {
		KlaParamVo paramvo = new KlaParamVo();
		CommonUtil comUtil = new CommonUtil();

		paramvo.setKeyword(kwd);
		paramvo.setCategory(category);
		paramvo.setFromDate(comUtil.getDateMinusFormat(duration, "yyyy-MM-dd", paramvo.getDatenum() ));
		paramvo.setToDate(comUtil.getDateFormat("yyyy-MM-dd"));

		KlaService klaService = new KlaServiceImpl();
		return klaService.getKeywordDocidRank(paramvo);
	}*/

	/**
	 * restFull API이용하여 검색엔진  리턴결과를 gson을통해 파싱하여 객체로 전달한다.
	 * @param restUrl 호출 URL
	 * @param restVO	입력vo
	 * @param selectField 조회필드명
	 * @return
	 */
	public RestResultVo restSearchPost(SearchRestVo restVo) {

		logger.debug(restVo.toString());
		HttpUtil httpUtil = new HttpUtil();

		StringBuffer sb = httpUtil.getUrlDataPost(restVo);
		RestResultVo resultVo = new RestResultVo();

		// 결과 파싱
		try{
			Gson gson = new Gson();

			JsonObject jsonObject = gson.fromJson( sb.toString(), JsonObject.class);
			JsonObject rsObject = jsonObject.get("result").getAsJsonObject() ;

			//결과 set
			resultVo.setStatus( jsonObject.get("status").getAsString() );
			resultVo.setTotal(rsObject.get("total_count").getAsLong() );

			JsonArray arr = rsObject.get("rows").getAsJsonArray();

			List<Map<String, String>> list = new ArrayList<> ();
			String[] fields = restVo.getSelectFields().split(",");
			Map<String, String> map;
			JsonObject fieldobj;
			String data;
			for(JsonElement element : arr){
				map = new HashMap<>();
				fieldobj = (element.getAsJsonObject()).get("fields").getAsJsonObject();

				for(String field:fields){
					data =  fieldobj.get(field).getAsString();
					map.put(field,data.replaceAll(SEARCH_WARNING, ""));
				}

				//rowid
				fieldobj = (element.getAsJsonObject()).get("location").getAsJsonObject();
				map.put("rowid", fieldobj.get("rowid").toString());

				list.add(map);
				map = null;
			}
			resultVo.setResult(list);

		} catch (JsonParseException e){
			logger.error(SEARCH5_EXCEPTION, e);
			return null;
		}

		logger.debug(resultVo.toString());

		return resultVo;

	}


	public RestResultVo restSearchGroupingPost(SearchRestVo restVo) {

		logger.debug(restVo.toString());
		HttpUtil httpUtil = new HttpUtil();

		StringBuffer sb = httpUtil.getUrlDataPost(restVo);
		RestResultVo resultVo = new RestResultVo();

		// 결과 파싱
		try{
			Gson gson = new Gson();

			JsonObject jsonObject = gson.fromJson( sb.toString(), JsonObject.class);
			JsonObject rsObject = jsonObject.get("result").getAsJsonObject() ;

			JsonArray arr = rsObject.get("rows").getAsJsonArray();

			List<Map<String, String>> list = new ArrayList<> ();
			String[] fields = restVo.getSelectFields().split(",");
			Map<String, String> map;
			JsonObject fieldobj;
			String data;
			for(JsonElement element : arr){
				map = new HashMap<>();
				fieldobj = (element.getAsJsonObject()).get("fields").getAsJsonObject();

				for(String field:fields){
					data =  fieldobj.get(field).getAsString();
					map.put("name",data.replaceAll(SEARCH_WARNING, ""));
				}

				//rowid
				data = (element.getAsJsonObject()).get("sortkey").getAsString();
				map.put("value", data);

				list.add(map);
				map = null;
			}
			resultVo.setResult(list);

		} catch (JsonParseException e){
			logger.error(SEARCH5_EXCEPTION, e);
			return null;
		}

		logger.debug(resultVo.toString());

		return resultVo;

	}

	public RestResultVo restSearchGroupingGet(SearchRestVo restVo) {

		logger.debug(restVo.toString());
		HttpUtil httpUtil = new HttpUtil();

		StringBuffer sb = httpUtil.getUrlDataGet(restVo);
		RestResultVo resultVo = new RestResultVo();

		// 결과 파싱
		try{
			Gson gson = new Gson();

			JsonObject jsonObject = gson.fromJson( sb.toString(), JsonObject.class);
			JsonArray arr = jsonObject.get("result").getAsJsonArray();

			List<Map<String, String>> list = new ArrayList<> ();
			String[] fields = restVo.getSelectFields().split(",");
			Map<String, String> map;
			JsonObject fieldobj;
			String data;
			for(JsonElement element : arr){
				map = new HashMap<>();
				fieldobj = (element.getAsJsonObject()).getAsJsonObject();

				for(String field:fields){
					data =  fieldobj.get(field).getAsString();

					if("region".equals(field)){
						map.put("name",data.replaceAll(SEARCH_WARNING, ""));
					}
					if("count(*)".equals(field)){
						map.put("value",data.replaceAll(SEARCH_WARNING, ""));
					}
				}
				list.add(map);
				map = null;
			}
			logger.info(list.toString());
			resultVo.setResult(list);

		} catch (JsonParseException e){
			logger.error(SEARCH5_EXCEPTION, e);
			return null;
		}

		logger.debug(resultVo.toString());

		return resultVo;

	}


	public RestResultVo restSearchCloudPost(SearchRestVo restVo) {

		logger.debug(restVo.toString());
		HttpUtil httpUtil = new HttpUtil();

		//StringBuffer sb = httpUtil.getUrlDataPost(restVo);
		StringBuffer sb = httpUtil.getUrlDataGet(restVo);
		RestResultVo resultVo = new RestResultVo();

		// 결과 파싱
		try{
			Gson gson = new Gson();

			//결과 set
			JsonArray arr = gson.fromJson(sb.toString(), JsonArray.class);

			List<Map<String, String>> list = new ArrayList<> ();
			String[] fields = restVo.getSelectFields().split(",");
			Map<String, String> map;
			JsonObject fieldobj;
			String data;
			for(JsonElement element : arr){
				map = new HashMap<>();
				fieldobj = (element.getAsJsonObject()).getAsJsonObject();

				for(String field:fields){
					data =  fieldobj.get(field).getAsString();
					map.put("name",data.replaceAll(SEARCH_WARNING, ""));
					data = fieldobj.get("size("+field+")").getAsString();
					map.put("value",data.replaceAll(SEARCH_WARNING, ""));
				}

				list.add(map);
				map = null;
			}
			resultVo.setResult(list);

		} catch (JsonParseException e){
			logger.error(SEARCH5_EXCEPTION, e);
			return null;
		}

		logger.debug(resultVo.toString());

		return resultVo;

	}



	public RestResultVo customRestSearchGet(SearchRestVo restVo) {
		logger.debug(restVo.toString());
		HttpUtil httpUtil = new HttpUtil();
		StringBuffer sb = httpUtil.getUrlDataGet(restVo);
		RestResultVo resultVo = new RestResultVo();
		//List<Map<String, String>> list = new ArrayList<> ();

		// 결과 파싱
		try{
			Gson gson = new Gson();

			JsonObject jsonObject = gson.fromJson( sb.toString(), JsonObject.class);

			//결과 set
			List<Map<String, String>> list = new ArrayList<> ();
			String[] fields = restVo.getSelectFields().split(",");

			if(restVo.getUrl().equals(restVo.getCustomSearchUrl())){
				JsonObject rsObject = jsonObject.get("result").getAsJsonObject() ;
				resultVo.setStatus( jsonObject.get("status").getAsString() );
				resultVo.setTotal(rsObject.get("total_count").getAsLong() );
				JsonArray arr = rsObject.get("rows").getAsJsonArray();

				list = customSearchParsing(arr, fields);

			}else{
				JsonArray arr = jsonObject.get("result").getAsJsonArray();

				list = customMapParsing(arr, fields);
			}
			resultVo.setResult(list);

		} catch (JsonParseException e){
			logger.error(SEARCH5_EXCEPTION, e);
			return null;
		}

		logger.debug(resultVo.toString());

		return resultVo;

	}

	private List<Map<String, String>> customMapParsing(JsonArray arr, String[] fields) {
		List<Map<String, String>> list = new ArrayList<>();
		Map<String, String> map;
		JsonObject fieldobj;
		String data;
		for(JsonElement element : arr) {
			map = new HashMap<>();
			fieldobj = (element.getAsJsonObject()).getAsJsonObject();

			for (String field : fields) {
				data = fieldobj.get(field).getAsString();

				if ("region".equals(field)) {
					map.put("name", data.replaceAll(SEARCH_WARNING, ""));
				}
				if ("count(*)".equals(field)) {
					map.put("value", data.replaceAll(SEARCH_WARNING, ""));
				}
			}
			list.add(map);
			map = null;
		}
			return list;
	}

	private List<Map<String, String>> customSearchParsing(JsonArray arr, String[] fields) {
		List<Map<String, String>> list = new ArrayList<>();
		Map<String, String> map;
		JsonObject fieldobj;
		String data;
		for(JsonElement element : arr) {
			map = new HashMap<>();
			fieldobj = (element.getAsJsonObject()).get("fields").getAsJsonObject();

			for (String field : fields) {
				data = fieldobj.get(field).getAsString();
				map.put(field, data.replaceAll(SEARCH_WARNING, ""));
			}
			list.add(map);
			map = null;
		}
		return list;
	}
}
