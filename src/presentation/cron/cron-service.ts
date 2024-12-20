import { CronJob } from "cron"

type CronTime = string | Date;
type OnTick = () => void;

export class CronServer {
     static createJob( cronTime:CronTime, onTick:OnTick ): CronJob {
        const job = new CronJob(cronTime, onTick)
        job.start();

        return job;
     }
}