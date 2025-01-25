package cn.kmbeast.pojo.api;

/**
 * Request Response Codes
 */
public enum ResultCode {
    /**
     * Request success code
     */
    REQUEST_SUCCESS(200),

    /**
     * Request failure code
     */
    REQUEST_ERROR(400);

    private Integer code;

    @Override
    public String toString() {
        return "ResultCode{" +
                "code=" + code +
                '}';
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    ResultCode(Integer code) {
        this.code = code;
    }
}
