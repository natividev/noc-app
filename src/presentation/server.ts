import { CheckService } from "../domain/use-cases/checks/checks-service"
import { CronServer } from "./cron/cron-service"


export class ServerApp {
    public static start(){
        console.log("server running")
        const url = 'https://google.com';
        CronServer.createJob('*/5 * * * * *',() => {
          new CheckService(
            () => console.log(`${url} is ok!`),
            (error) => console.log(error)
          ).execute(url)
        })
    }
}