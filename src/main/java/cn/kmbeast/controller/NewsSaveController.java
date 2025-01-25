package cn.kmbeast.controller;

import cn.kmbeast.aop.Pager;
import cn.kmbeast.context.LocalThreadHolder;
import cn.kmbeast.pojo.api.Result;
import cn.kmbeast.pojo.dto.query.extend.NewsSaveQueryDto;
import cn.kmbeast.pojo.entity.NewsSave;
import cn.kmbeast.pojo.vo.NewsSaveVO;
import cn.kmbeast.service.NewsSaveService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * News Bookmark Controller
 */
@RestController
@RequestMapping(value = "/news-save")
public class NewsSaveController {

    @Resource
    private NewsSaveService newsSaveService;

    /**
     * Bookmark or unBookmark a news article
     */
    @PostMapping(value = "/operation")
    public Result<Void> operation(@RequestBody NewsSave newsSave) {
        return newsSaveService.operation(newsSave);
    }

    /**
     * Bookmark or unBookmark operation
     */
    @PostMapping(value = "/save")
    public Result<Void> save(@RequestBody NewsSave newsSave) {
        return newsSaveService.save(newsSave);
    }


    /**
     * Delete bookmarked news in batch
     */
    @PostMapping(value = "/batchDelete")
    public Result<Void> batchDelete(@RequestBody List<Long> ids) {
        return newsSaveService.batchDelete(ids);
    }

    /**
     * Query health news bookmarked by the user
     */
    @Pager
    @PostMapping(value = "/queryUser")
    public Result<List<NewsSaveVO>> queryUser(@RequestBody NewsSaveQueryDto newsSaveQueryDto) {
        newsSaveQueryDto.setUserId(LocalThreadHolder.getUserId());
        return newsSaveService.query(newsSaveQueryDto);
    }

    /**
     * Query bookmarked news
     */
    @Pager
    @PostMapping(value = "/query")
    public Result<List<NewsSaveVO>> query(@RequestBody NewsSaveQueryDto newsSaveQueryDto) {
        return newsSaveService.query(newsSaveQueryDto);
    }

}
