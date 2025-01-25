package cn.kmbeast.pojo.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * News Save Entity
 */
@Data
public class NewsSave {
    /**
     * ID
     */
    private Integer id;

    /**
     * User ID
     */
    private Integer userId;

    /**
     * Health News ID
     */
    private Integer newsId;

    /**
     * Save Time
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;
}
