package cn.kmbeast.pojo.dto.query.extend;

import cn.kmbeast.pojo.dto.query.base.QueryDto;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class MessageQueryDto extends QueryDto {

    /**
     * user ID
     */
    private Integer userId;
    /**
     * sender ID
     */
    private Integer senderId;
    /**
     * content ID
     */
    private Integer contentId;
    /**
     * message type
     */
    private Integer messageType;
    /**
     * news content
     */
    private String content;
    /**
     * Is read
     */
    private Boolean isRead;

}
