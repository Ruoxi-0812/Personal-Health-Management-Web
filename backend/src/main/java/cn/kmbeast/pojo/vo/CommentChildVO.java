package cn.kmbeast.pojo.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.ToString;

import java.time.LocalDateTime;

/**
 * Child Comment VO
 */
@Data
@ToString
public class CommentChildVO {
    /**
     * Comment ID
     */
    private Integer id;
    /**
     * Parent Comment ID
     */
    private Integer parentId;
    /**
     * Content ID
     */
    private Integer contentId;
    /**
     * Commenter ID
     */
    private Integer userId;
    /**
     * Commenter's Username
     */
    private String userName;
    /**
     * Commenter's Avatar
     */
    private String userAvatar;
    /**
     * Replier ID
     */
    private Integer replierId;
    /**
     * Replier's Username
     */
    private String replierName;
    /**
     * Replier's Avatar
     */
    private String replierAvatar;
    /**
     * Comment Content
     */
    private String content;
    /**
     * Comment reply status
     */
    private Boolean replyInputStatus;
    /**
     * Upvote list
     */
    private String upvoteList;
    /**
     * Whether the user has already upvoted
     */
    private Boolean upvoteFlag;
    /**
     * Upvote count
     */
    private Integer upvoteCount;
    /**
     * Report count
     */
    private Integer reportsNum;
    /**
     * Content Type
     */
    private String contentType;
    /**
     * Comment Timestamp
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;
}
