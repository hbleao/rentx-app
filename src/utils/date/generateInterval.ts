import { addDays, eachDayOfInterval, format } from 'date-fns';

type MarkingProps = {
  color: string;
  textColor: string;
  disabled?: boolean;
  disabledTouchEvent?: boolean;
}

type MarkedDatesProps = {
  [key: string]: MarkingProps;
}

export type DayProps = {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

export type GenerateIntervalProps = {
  start: DayProps; 
  end: DayProps;
  periodColor: string;
  dayColor: string;
}

export function generateInterval({
  start,
  end,
  dayColor,
  periodColor
}: GenerateIntervalProps) {
  let interval: MarkedDatesProps = {};

  const dateList = eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp)
  });

  dateList.forEach(item => {
    const date = format(addDays(item, 1), 'yyyy-MM-dd');
    
    interval = {
      ...interval,
      [date]: {
        color: start.dateString === date || end.dateString === date
        ? dayColor : periodColor,
        textColor: start.dateString === date || end.dateString === date
        ?  periodColor :  dayColor
      }
    }
  });

  return interval;
}
