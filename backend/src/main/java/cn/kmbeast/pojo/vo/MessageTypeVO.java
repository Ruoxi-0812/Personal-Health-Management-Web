package cn.kmbeast.pojo.vo;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MessageTypeVO {
    /**
     * type
     */
    private Integer type;
    /**
     * type details
     */
    private String detail;
}
