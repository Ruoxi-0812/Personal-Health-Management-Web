package cn.kmbeast.pojo.api;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * Generic Response - Pagination
 */
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PageResult<T> extends Result<T> {

    /**
     * Paginated response data
     */
    private T data;
    /**
     * Total number of records that match the query conditions
     */
    private Integer total;

    /**
     * Constructor with status code
     */
    public PageResult(Integer code) {
        super(code, "Query successfully");
    }


    /**
     * Paginated query response
     */
    public static <T> Result<T> success(T data, Integer total) {
        PageResult<T> result = new PageResult<>(ResultCode.REQUEST_SUCCESS.getCode());
        result.setData(data);
        result.setTotal(total);
        return result;
    }

}
