package cn.kmbeast.pojo.vo;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Data Source VO
 */
@Data
@AllArgsConstructor
public class ChartVO {
    /**
     * Description item: can be a time value or a specific statistical item
     */
    private String name;
    /**
     * Total count of data
     */
    private Integer count;
}
