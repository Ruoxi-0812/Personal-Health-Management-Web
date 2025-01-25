package cn.kmbeast.pojo.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * User Entity
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    /**
     * User ID
     */
    private Integer id;

    /**
     * User Account
     */
    private String userAccount;

    /**
     * Username
     */
    private String userName;

    /**
     * User Password
     */
    private String userPwd;

    /**
     * User Avatar
     */
    private String userAvatar;

    /**
     * User Email
     */
    private String userEmail;

    /**
     * User Role
     */
    private Integer userRole;

    /**
     * Login Status (0: active, 1: disabled)
     */
    private Boolean isLogin;

    /**
     * Ban Status (0: active, 1: muted)
     */
    private Boolean isWord;

    /**
     * Registration Time
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;
}
