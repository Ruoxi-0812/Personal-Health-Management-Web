package cn.kmbeast.pojo.dto.query.base;

import lombok.*;

import java.time.LocalDateTime;

/**
 * Base Class for Query Parameter Objects
 * Contains four basic parameters that can be extended as needed.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class QueryDto {
    /**
     * Primary Key ID
     */
    private Integer id;
    /**
     * Current Page
     */
    private Integer current;
    /**
     * Page Size
     */
    private Integer size;
    /**
     * Start Time (Query Start Time)
     */
    private LocalDateTime startTime;
    /**
     * End Time (Query End Time)
     */
    private LocalDateTime endTime;
}

