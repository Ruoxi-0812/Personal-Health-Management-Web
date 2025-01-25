package cn.kmbeast.pojo.dto.query.extend;

import cn.kmbeast.pojo.dto.query.base.QueryDto;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@EqualsAndHashCode(callSuper = true)
@Data
public class UserHealthQueryDto extends QueryDto {

    /**
     * user ID
     */
    private Integer userId;

    /**
     * Health Model ID
     */
    private Integer healthModelConfigId;

}
