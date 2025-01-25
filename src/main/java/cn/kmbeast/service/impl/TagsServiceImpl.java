package cn.kmbeast.service.impl;

import cn.kmbeast.mapper.TagsMapper;
import cn.kmbeast.pojo.api.ApiResult;
import cn.kmbeast.pojo.api.PageResult;
import cn.kmbeast.pojo.api.Result;
import cn.kmbeast.pojo.dto.query.extend.TagsQueryDto;
import cn.kmbeast.pojo.entity.Tags;
import cn.kmbeast.service.TagsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Tags service logic implementation
 */
@Service
public class TagsServiceImpl implements TagsService {

    @Resource
    private TagsMapper tagsMapper;

    /**
     * Tag save
     */
    @Override
    public Result<Void> save(Tags tags) {
        tagsMapper.save(tags);
        return ApiResult.success();
    }

    /**
     * Tag deletion
     */
    @Override
    public Result<Void> batchDelete(List<Long> ids) {
        tagsMapper.batchDelete(ids);
        return ApiResult.success();
    }

    /**
     * Tag uodate
     */
    @Override
    public Result<Void> update(Tags tags) {
        tagsMapper.update(tags);
        return ApiResult.success();
    }

    /**
     * Tag query
     */
    @Override
    public Result<List<Tags>> query(TagsQueryDto tagsQueryDto) {
        List<Tags> tagsList = tagsMapper.query(tagsQueryDto);
        Integer totalCount = tagsMapper.queryCount(tagsQueryDto);
        return PageResult.success(tagsList, totalCount);
    }


}
