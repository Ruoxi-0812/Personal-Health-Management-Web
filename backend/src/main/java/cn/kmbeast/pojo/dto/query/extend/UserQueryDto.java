package cn.kmbeast.pojo.dto.query.extend;

import cn.kmbeast.pojo.dto.query.base.QueryDto;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * The user queries DTO parameters
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class UserQueryDto extends QueryDto {
    /**
     * user account
     */
    private String userAccount;
    /**
     * user name
     */
    private String userName;
    /**
     * user email
     */
    private String userEmail;
    /**
     * user role
     */
    private Boolean role;
    /**
     * Is user can Login
     */
    private Boolean isLogin;
    /**
     * Is user word
     */
    private Boolean isWord;
}
