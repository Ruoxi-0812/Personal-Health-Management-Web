package cn.kmbeast.service;

import cn.kmbeast.pojo.api.Result;
import cn.kmbeast.pojo.dto.query.extend.HealthModelConfigQueryDto;
import cn.kmbeast.pojo.entity.HealthModelConfig;
import cn.kmbeast.pojo.vo.ChartVO;
import cn.kmbeast.pojo.vo.HealthModelConfigVO;

import java.util.List;

/**
 * Health model service logic interface
 */
public interface HealthModelConfigService {

    Result<Void> save(HealthModelConfig healthModelConfig);

    Result<Void> batchDelete(List<Long> ids);

    Result<Void> update(HealthModelConfig healthModelConfig);

    Result<List<HealthModelConfigVO>> query(HealthModelConfigQueryDto healthModelConfigQueryDto);

    Result<List<HealthModelConfigVO>> modelList();


}
