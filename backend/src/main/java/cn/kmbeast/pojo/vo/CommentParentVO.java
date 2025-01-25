package cn.kmbeast.pojo.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Parent Comment VO
 */
@Data
public class CommentParentVO {
    /**
     * Comment ID
     */
    private Integer id;
    /**
     * User ID
     */
    private Integer userId;
    /**
     * Content ID
     */
    private Integer contentId;
    /**
     * Username
     */
    private String userName;
    /**
     * User Avatar
     */
    private String userAvatar;
    /**
     * Comment Content
     */
    private String content;
    /**
     * Whether the reply box is displayed
     */
    private Boolean showReplyInput;
    /**
     * Total number of child comments
     */
    private Integer childTotal;
    /**
     * Whether the user has upvoted
     */
    private Boolean upvoteFlag;
    /**
     * Upvote list
     */
    private String upvoteList;
    /**
     * Upvote count
     */
    private Integer upvoteCount;
    /**
     * Comment Timestamp
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;
    /**
     * Child Comments
     */
    private List<CommentChildVO> commentChildVOS;
}
