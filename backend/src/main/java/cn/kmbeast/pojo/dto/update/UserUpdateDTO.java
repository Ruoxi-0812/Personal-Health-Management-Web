package cn.kmbeast.pojo.dto.update;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdateDTO {
    /**
     * user password
     */
    private String userAccount;

    /**
     * user name
     */
    private String userName;

    /**
     * user password
     */
    private String userPwd;

    /**
     * user avatar
     */
    private String userAvatar;

    /**
     * user email
     */
    private String userEmail;
}
