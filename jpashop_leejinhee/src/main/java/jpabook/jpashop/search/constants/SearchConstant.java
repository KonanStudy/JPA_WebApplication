package jpabook.jpashop.search.constants;


import org.springframework.beans.factory.annotation.Value;

public class SearchConstant {

    public static String	SITE  = "KONAN";
    //charset
    public static String   CHARSET = "UTF-8";
    //Security
    public static String	CREDENTIAL = "0baea2f0ae20150d";

    //검색엔진 URL
    public static String	SEARCH_URL = "http://10.10.20.223:9577/search5?";
    //KSF URL
    public static String   KSF_URL;

    /** 검색서버 연결 대기 시간 */
    public static int TIMEOUT = 5000;

    public static final int DEFAULT_PAGE_SIZE = 10;

    public static final int TOTAL_PAGE_SIZE = 3;

    public static final String CHARSET_UTF8                     = "utf-8";

    public static final String CONTENT_TYPE_APPLICATION_JSON    = "application/json;charset=utf-8";

    public static final String CONTENT_TYPE_FORM_POST                 = "application/x-www-form-urlencoded; charset=UTF-8";

    public static final String HTTP_METHOD_POST                = "POST";

    public static final String HTTP_METHOD_GET                = "GET";

    public static final String HTTP_CONTENT_TYPE                = "Content-Type";

    public static final String HTTP_CONTENT_LENGTH               = "Content-Length";

    public static final String SEARCH_WARNING                = "\\(WARNING: EVALUATION COPY\\[SEARCH\\]\\)";

    public static final int HTTP_OK                             = 200;

    public static final String KWD_DELIMITER                     = ",";

    public static final String URL_SEPARATOR                    = "\\?";

    public static String MSG_SEARCH_ERROR	= "조회 시 오류가 발생하였습니다.";

    public SearchConstant() {
    }
}
