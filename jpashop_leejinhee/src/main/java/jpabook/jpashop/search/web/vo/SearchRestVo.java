package jpabook.jpashop.search.web.vo;

import static jpabook.jpashop.search.constants.SearchConstant.CHARSET;
import static jpabook.jpashop.search.constants.SearchConstant.SEARCH_URL;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper=false)
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class SearchRestVo{

	// restUrl
	private String url=SEARCH_URL;
	// 조회할 필드명
	private String selectFields="";
	// 볼륨명
	private String from="";
	//조건절
	private String where="";
	//검색시작
	private int offset = 0;
	//결과개수
	private int pagelength = 10;
	//Top-N 쿼리 제약시 N값 지정. 상위 N개에 대해서만 검색/정렬 등 수행
	private int limit = 10;
	//kla custom 로그
	private String customLog="";
	//콜백함수
	private String callback = "";
	//중복레벨 설정
	private int distinct = 0;
	//필드에 대한 하일라이팅 설정
	private String hilightFields="";
	//하일라이팅할 키워드
	private String hilightKeywords="";
	// 적합도 점수
	private String score="";
	//디폴트 하일라이팅을 적용
	private String defaultHilite="on";
	//캐릭터 인코딩
	private String charset=CHARSET;

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getSelectFields() {
		return selectFields;
	}
	public void setSelectFields(String selectFields) {
		this.selectFields = selectFields;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getWhere() {
		return where;
	}
	public void setWhere(String where) {
		this.where = where;
	}
	public int getOffset() {
		return offset;
	}
	public void setOffset(int offset) {
		this.offset = offset;
	}
	public int getPagelength() {
		return pagelength;
	}
	public void setPagelength(int pagelength) {
		this.pagelength = pagelength;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public String getCustomLog() {
		return customLog;
	}
	public void setCustomLog(String customLog) {
		this.customLog = customLog;
	}
	public String getCallback() {
		return callback;
	}
	public void setCallback(String callback) {
		this.callback = callback;
	}
	public int getDistinct() {
		return distinct;
	}
	public void setDistinct(int distinct) {
		this.distinct = distinct;
	}
	public String getHilightFields() {
		return hilightFields;
	}
	public void setHilightFields(String hilightFields) {
		this.hilightFields = hilightFields;
	}
	public String getHilightKeywords() {
		return hilightKeywords;
	}
	public void setHilightKeywords(String hilightKeywords) {
		this.hilightKeywords = hilightKeywords;
	}
	public String getScore() {
		return score;
	}
	public void setScore(String score) {
		this.score = score;
	}
	public String getDefaultHilite() {
		return defaultHilite;
	}
	public void setDefaultHilite(String defaultHilite) {
		this.defaultHilite = defaultHilite;
	}
	public String getCharset() {
		return charset;
	}
	public void setCharset(String charset) {
		this.charset = charset;
	}
	
	
}
