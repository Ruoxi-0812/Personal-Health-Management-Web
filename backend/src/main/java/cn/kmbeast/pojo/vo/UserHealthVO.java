package cn.kmbeast.pojo.vo;

import cn.kmbeast.pojo.entity.UserHealth;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * User Health Record VO
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class UserHealthVO extends UserHealth {
    /**
     * Username
     */
    private String userName;
    /**
     * Health Model Name
     */
    private String name;
    /**
     * Health Model Unit
     */
    private String unit;
    /**
     * Health Model Symbol
     */
    private String symbol;
    /**
     * Normal Value Range of the Model
     */
    private String valueRange;
}
