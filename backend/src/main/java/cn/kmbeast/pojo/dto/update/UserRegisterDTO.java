package cn.kmbeast.pojo.dto.update;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisterDTO {
    /**
     * user name
     */
    private String userName;
    /**
     * user account
     */
    private String userAccount;
    /**
     * user password
     */
    private String userPwd;
    /**
     * user email
     */
    private String userEmail;
    /**
     * user avatar
     */
    private String userAvatar;
}
