package cn.kmbeast.pojo.em;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AuditStatusEnum {

    NO_AUDIT(1, "unreviewed"),
    HAVE_AUDIT(2, "have reviewed");

    /**
     * state
     */
    private final Integer status;
    /**
     * state detail
     */
    private final String detail;


}
