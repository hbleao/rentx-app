import { DateData } from "react-native-calendars";

type MarkingProps = {
  color: string;
  textColor: string;
  disabled?: boolean;
  disabledTouchEvent?: boolean;
}

export type MarkedDatesProps = {
  [key: string]: MarkingProps;
}

export type CalendarProps = {
  markedDates: MarkedDatesProps;
  onDayPress: (date: DateData) => void;
}

export type DayProps = {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}
