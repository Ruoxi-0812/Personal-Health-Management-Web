package cn.kmbeast.pojo.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * account VO
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserVO {
    /**
     * user iD
     */
    private Integer id;

    /**
     * user account
     */
    private String userAccount;

    /**
     * user name
     */
    private String userName;

    /**
     * user avatar
     */
    private String userAvatar;

    /**
     * user email
     */
    private String userEmail;

    /**
     * user role
     */
    private Integer userRole;

    /**
     * register time
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;

}
