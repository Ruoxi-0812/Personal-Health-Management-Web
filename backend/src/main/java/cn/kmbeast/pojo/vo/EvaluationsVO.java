package cn.kmbeast.pojo.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Comment VO
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EvaluationsVO {
    /**
     * Total count
     */
    private Integer count;
    /**
     * List of comments
     */
    private List<CommentParentVO> data;
}
