package cn.kmbeast.pojo.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * Message Entity
 */
@Data
public class Message {
    /**
     * Primary Key ID
     */
    private Integer id;
    /**
     * Message Content
     */
    private String content;
    /**
     * Message Type
     */
    private Integer messageType;

    /**
     * Receiver User ID
     */
    private Integer receiverId;

    /**
     * Sender User ID
     */
    private Integer senderId;
    /**
     * Whether the message has been read
     */
    private Boolean isRead;
    /**
     * Content ID
     */
    private Integer contentId;
    /**
     * Message Send Time
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;
}
