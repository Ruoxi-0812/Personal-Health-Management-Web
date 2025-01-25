package cn.kmbeast.pojo.dto.query.extend;

import cn.kmbeast.pojo.dto.query.base.QueryDto;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class NewsQueryDto extends QueryDto {

    /**
     * news name
     */
    private String name;
    /**
     * Tag ID
     */
    private Integer tagId;
    /**
     * Is the news top
     */
    private Boolean isTop;

}
