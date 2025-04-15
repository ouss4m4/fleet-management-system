import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateToHumanReadable(
  dateString: string,
  format = 'dd-mm-yyyy hh:ii'
) {
  const date = new Date(dateString);

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const replacements: Record<string, string> = {
    yyyy: String(date.getFullYear()),
    mm: String(date.getMonth() + 1).padStart(2, '0'),
    MM: monthNames[date.getMonth()],
    dd: String(date.getDate()).padStart(2, '0'),
    hh: String(date.getHours()).padStart(2, '0'),
    ii: String(date.getMinutes()).padStart(2, '0'),
  };

  return format.replace(/yyyy|MM|mm|dd|hh|ii/g, (token) => replacements[token]);
}
