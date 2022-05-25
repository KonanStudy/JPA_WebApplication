package jpabook.jpashop.search.web.vo;

import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper=false)
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class RestResultVo {

	//조회 상태
	private String status;
	//전체건수
	private long total;
	//데이터
	private int rows;
	//데이터리스트
	private List<Map<String, String>> result;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public int getRows() {
		return rows;
	}
	public void setRows(int rows) {
		this.rows = rows;
	}
	public List<Map<String, String>> getResult() {
		return result;
	}
	public void setResult(List<Map<String, String>> result) {
		this.result = result;
	}

	
}
