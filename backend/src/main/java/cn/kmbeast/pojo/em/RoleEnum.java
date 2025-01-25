package cn.kmbeast.pojo.em;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * User role enumeration
 */
@Getter
@AllArgsConstructor
public enum RoleEnum {

    ADMIN(1, "admin"),
    USER(2, "account");

    /**
     * role
     */
    private final Integer role;
    /**
     * role name
     */
    private final String name;

    /**
     * Gets the role name by role encoding
     */
    public static String ROLE(Integer role) {
        for (RoleEnum value : RoleEnum.values()) {
            if (value.getRole().equals(role)) {
                return value.name;
            }
        }
        return null;
    }

}
