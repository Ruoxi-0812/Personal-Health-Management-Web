package cn.kmbeast.pojo.em;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum IsReadEnum {

    READ_OK(true, "read"),
    READ_NO(false, "unread");

    /**
     * is read
     */
    private final Boolean status;
    /**
     * detail
     */
    private final String detail;

}
