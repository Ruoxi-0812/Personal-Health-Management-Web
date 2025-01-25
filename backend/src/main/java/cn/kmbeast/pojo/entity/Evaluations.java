package cn.kmbeast.pojo.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

/**
 * Comment Entity
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Evaluations {
    /**
     * Primary Key
     */
    private Integer id;

    /**
     * Parent Comment ID
     */
    private Integer parentId;

    /**
     * Commenter ID
     */
    private Integer commenterId;

    /**
     * Replier ID
     */
    private Integer replierId;

    /**
     * Content Type
     */
    private String contentType;

    /**
     * Comment Content
     */
    private String content;

    /**
     * Content ID
     */
    private Integer contentId;

    /**
     * List of Upvotes
     */
    private String upvoteList;

    /**
     * Comment Creation Time
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;

}
