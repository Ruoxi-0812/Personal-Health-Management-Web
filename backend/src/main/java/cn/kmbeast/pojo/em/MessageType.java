package cn.kmbeast.pojo.em;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum MessageType {

    EVALUATIONS_BY_REPLY(1,"comment"),
    EVALUATIONS_BY_UPVOTE(2,"like"),
    DATA_MESSAGE(3,"Indicator reminder"),
    SYSTEM_INFO(4,"systematic notification");

    /**
     * message type
     */
    private final Integer type;

    /**
     * message type detail
     */
    private final String detail;

}
