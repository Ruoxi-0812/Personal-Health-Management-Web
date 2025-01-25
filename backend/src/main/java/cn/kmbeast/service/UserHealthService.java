package cn.kmbeast.service;

import cn.kmbeast.pojo.api.Result;
import cn.kmbeast.pojo.dto.query.extend.UserHealthQueryDto;
import cn.kmbeast.pojo.entity.UserHealth;
import cn.kmbeast.pojo.vo.ChartVO;
import cn.kmbeast.pojo.vo.UserHealthVO;

import java.util.List;

/**
 * User health record service logic interface
 */
public interface UserHealthService {

    Result<Void> save(List<UserHealth> userHealths);

    Result<Void> batchDelete(List<Long> ids);

    Result<Void> update(UserHealth userHealth);

    Result<List<UserHealthVO>> query(UserHealthQueryDto userHealthQueryDto);

    Result<List<ChartVO>> daysQuery(Integer day);
}
