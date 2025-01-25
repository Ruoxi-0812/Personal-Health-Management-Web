package cn.kmbeast.pojo.em;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Forbidden state enumeration
 */
@Getter
@AllArgsConstructor
public enum WordStatusEnum {

    USE(false, "usable"),
    BANK_USE(true, "Gag state");

    /**
     * state
     */
    private final Boolean flag;
    /**
     * name
     */
    private final String name;

}
