package cn.kmbeast.pojo.vo;

import cn.kmbeast.pojo.entity.Message;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Message Response VO
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class MessageVO extends Message {
    /**
     * Sender User ID
     */
    private Integer senderId;
    /**
     * Sender's Avatar
     */
    private String senderAvatar;
    /**
     * Sender's Name
     */
    private String senderName;
    /**
     * Receiver's Avatar
     */
    private String receiverAvatar;
    /**
     * Receiver's Name
     */
    private String receiverName;
    /**
     * Comment Content
     */
    private String evaluationsContent;
}
