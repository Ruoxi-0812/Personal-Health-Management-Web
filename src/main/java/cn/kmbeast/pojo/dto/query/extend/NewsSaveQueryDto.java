package cn.kmbeast.pojo.dto.query.extend;

import cn.kmbeast.pojo.dto.query.base.QueryDto;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class NewsSaveQueryDto extends QueryDto {

    /**
     * User ID
     */
    private Integer userId;
    /**
     * Health news ID
     */
    private Integer newsId;

}
