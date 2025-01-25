package cn.kmbeast.utils;

import cn.kmbeast.pojo.dto.query.base.QueryDto;
import cn.kmbeast.pojo.vo.ChartVO;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Time tool class
 */
public class DateUtil {

    /**
     * Constructs a time query that specifies a start time and an end time
     */
    public static QueryDto startAndEndTime(Integer days) {
        if (days == -1) {
            return new QueryDto();
        }
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime nextDayStart = now.minusDays(days).plusDays(1).with(LocalTime.of(0, 0));
        LocalDateTime daysAgoEnd = nextDayStart.minusSeconds(1);
        return QueryDto.builder().startTime(daysAgoEnd).endTime(now).build();
    }

    /**
     * Collects statistics on the number of records in the specified days
     */
    public static List<ChartVO> countDatesWithinRange(Integer dayRange, List<LocalDateTime> dates) {
        LocalDate startDate = LocalDate.now().minusDays(dayRange);
        List<ChartVO> chartVOS = new ArrayList<>();
        for (int offset = 0; offset <= dayRange; offset++) {
            LocalDate currentDate = startDate.plusDays(offset);
            String dateKey = String.format("%02d-%02d", currentDate.getMonthValue(), currentDate.getDayOfMonth());
            int count = (int) dates.stream()
                    .filter(dateTime -> dateTime.toLocalDate().equals(currentDate))
                    .count();
            if (count != 0){
                chartVOS.add(new ChartVO(dateKey, count));
            }
        }
        return chartVOS;
    }
}
