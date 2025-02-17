package cn.kmbeast.service.impl;

import cn.kmbeast.mapper.HealthModelConfigMapper;
import cn.kmbeast.mapper.NewsMapper;
import cn.kmbeast.mapper.UserHealthMapper;
import cn.kmbeast.mapper.UserMapper;
import cn.kmbeast.pojo.api.ApiResult;
import cn.kmbeast.pojo.api.Result;
import cn.kmbeast.pojo.dto.query.extend.HealthModelConfigQueryDto;
import cn.kmbeast.pojo.dto.query.extend.NewsQueryDto;
import cn.kmbeast.pojo.dto.query.extend.UserHealthQueryDto;
import cn.kmbeast.pojo.dto.query.extend.UserQueryDto;
import cn.kmbeast.pojo.vo.ChartVO;
import cn.kmbeast.service.ViewsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Home page visualization
 */
@Service
public class ViewsServiceImpl implements ViewsService {

    @Resource
    private UserMapper userMapper;
    @Resource
    private NewsMapper newsMapper;
    @Resource
    private HealthModelConfigMapper healthModelConfigMapper;
    @Resource
    private UserHealthMapper userHealthMapper;

    /**
     * Collect some basic data of the system
     */
    @Override
    public Result<List<ChartVO>> staticControls() {
        List<ChartVO> chartVOS = new ArrayList<>();

        UserQueryDto userQueryDto = new UserQueryDto();
        int userCount = userMapper.queryCount(userQueryDto);
        change(userCount, "Stock user", chartVOS);

        NewsQueryDto newsQueryDto = new NewsQueryDto();
        int newsCount = newsMapper.queryCount(newsQueryDto);
        change(newsCount, "Collect information", chartVOS);

        HealthModelConfigQueryDto queryDto = new HealthModelConfigQueryDto();
        int modelCount = healthModelConfigMapper.queryCount(queryDto);

        change(modelCount, "Inclusion model", chartVOS);
        UserHealthQueryDto dto = new UserHealthQueryDto();
        int healthCount = userHealthMapper.queryCount(dto);
        change(healthCount, "health data", chartVOS);
        return ApiResult.success(chartVOS);
    }

    /**
     * Parameter processing
     */
    private void change(Integer count, String name, List<ChartVO> chartVOS) {
        ChartVO chartVO = new ChartVO(name, count);
        chartVOS.add(chartVO);
    }


}
