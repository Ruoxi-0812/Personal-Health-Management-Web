package cn.kmbeast.pojo.em;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Login status enumeration
 */
@Getter
@AllArgsConstructor
public enum LoginStatusEnum {

    USE(false, "loggeable"),
    BANK_USE(true, "Abnormal login status");

    private final Boolean flag;

    private final String name;

}
