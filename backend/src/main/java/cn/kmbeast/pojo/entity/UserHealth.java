package cn.kmbeast.pojo.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * User Health Record Entity
 */
@Data
public class UserHealth {
    /**
     * ID
     */
    private Integer id;

    /**
     * User ID
     */
    private Integer userId;

    /**
     * Health Model ID
     */
    private Integer healthModelConfigId;

    /**
     * Recorded Value
     */
    private String value;

    /**
     * Record Time
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;
}
