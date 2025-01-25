package cn.kmbeast.pojo.api;

/**
 * Base Response Class
 */
public class Result<T> {
    /**
     * Response status code
     */
    private Integer code;

    /**
     * Response message
     */
    private String msg;

    @Override
    public String toString() {
        return "Result{" +
                "code=" + code +
                ", msg='" + msg + '\'' +
                '}';
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Result() {
    }

    public Result(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }
}
