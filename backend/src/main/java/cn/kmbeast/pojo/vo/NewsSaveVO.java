package cn.kmbeast.pojo.vo;

import cn.kmbeast.pojo.entity.NewsSave;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

/**
 * News Save VO
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class NewsSaveVO extends NewsSave {
    /**
     * Username
     */
    private String userName;
    /**
     * Health News Cover Image
     */
    private String cover;
    /**
     * Health News Title
     */
    private String name;
    /**
     * Health News Content
     */
    private String content;
    /**
     * Tag Name
     */
    private String tagName;
    /**
     * News Publish Timestamp
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime newsCreateTime;
}
