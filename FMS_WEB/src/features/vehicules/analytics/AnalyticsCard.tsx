import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { IAnalytics } from '@/typings';
import { RefreshCcw } from 'lucide-react';
type Props = {
  data: IAnalytics;
  reload: () => void;
};
export default function AnalyticsCards({ data, reload }: Props) {
  return (
    <>
      <Card className="h-full cursor-pointer shadow-none transition hover:shadow-md">
        <CardHeader>
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold"> Usage & Metrics</h2>
            <Button
              variant={'outline'}
              className="cursor-pointer"
              onClick={() => reload()}
            >
              <RefreshCcw />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="grid grid-cols-2 space-y-1">
          {!data ? (
            <p>No data available right now</p>
          ) : (
            <>
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
              <span className="text-primary font-semibold">
                {data.lastUpdated}
              </span>
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
}
