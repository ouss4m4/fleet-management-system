import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { IAnalytics } from '@/typings';

type Props = {
  data: IAnalytics;
};
export default function AnalyticsCards({ data }: Props) {
  return (
    <>
      <Card className="h-full cursor-pointer shadow-none transition hover:shadow-md">
        <CardHeader>
          <h2 className="text-lg font-semibold"> Usage & Metrics</h2>
        </CardHeader>
        <CardContent className="grid grid-cols-2 space-y-1">
          <p className="text-muted-foreground text-sm capitalize">
            Distance Traveled
          </p>
          <span className="text-primary font-semibold">
            {data.distanceTraveled}
          </span>
          <p className="text-muted-foreground text-sm capitalize">
            Hours Operated
          </p>
          <span className="text-primary font-semibold">
            {data.hoursOperated}
          </span>
          <p className="text-muted-foreground text-sm capitalize">
            Last Updated At
          </p>
          <span className="text-primary font-semibold">{data.lastUpdated}</span>
        </CardContent>
      </Card>
    </>
  );
}
