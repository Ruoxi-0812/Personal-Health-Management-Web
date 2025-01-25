package cn.kmbeast.pojo.entity;

import lombok.Data;

/**
 * Health Model Configuration Entity
 */
@Data
public class HealthModelConfig {
    /**
     * Primary Key
     */
    private Integer id;
    /**
     * User ID
     */
    private Integer userId;
    /**
     * Configuration Name
     */
    private String name;
    /**
     * Configuration Description
     */
    private String detail;
    /**
     * Icon
     */
    private String cover;
    /**
     * Unit
     */
    private String unit;
    /**
     * Symbol
     */
    private String symbol;
    /**
     * Normal Value Range
     */
    private String valueRange;
    /**
     * Whether it is a global model
     */
    private Boolean isGlobal;
}
