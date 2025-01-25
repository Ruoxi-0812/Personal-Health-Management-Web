package cn.kmbeast.pojo.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * Health News Entity
 */
@Data
public class News {
    /**
     * Primary Key ID
     */
    private Integer id;

    /**
     * News Title
     */
    private String name;

    /**
     * News Content
     */
    private String content;

    /**
     * Tag ID
     */
    private Integer tagId;

    /**
     * Cover Image
     */
    private String cover;

    /**
     * List of Reader IDs (separated by ",")
     */
    private String readerIds;

    /**
     * Whether it is recommended
     */
    private Boolean isTop;

    /**
     * Publish Time
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;
}
