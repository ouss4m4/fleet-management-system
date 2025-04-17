# Fleet Management System API

## Run in development

### 1) Setup Infrastructure

create an `.env` file at `/FMS_API` and provide `PORT` for the server and `DATABASE_URL`

```bash
# .env.example
PORT=3500
DATABASE_URL=mongodb://localhost:27017/fms?authSource=admin
```

> N.B: Prisma require mongodb with a replica instance. if you face problems setting up the db. use MongoDB Atlas Cloud

### Recomended MongoDb Setup (docker)

the easiest way to setup MongoDB is using the provided docker-compose.yml file

make sure you have `docker` and `docker-compose` installed. then run

```bash
docker-compose up -d
```

### 2) Run the API

make sure you have `node` and `npm` installed. and run

```bash
npm install
npm run dev
```

> if you encounter prisma problem. run `npx prisma generate` then try again

You should see the Api runnig at this point

```bash
npm run dev

> fms_api@1.0.0 dev
> ts-node-dev --inspect --respawn --transpile-only ./index.ts

[INFO] 17:11:35 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.8.3)
Debugger listening on ws://127.0.0.1:9229/efe9b907-a53f-46bc-9e5b-4c3c49057d29
For help, see: https://nodejs.org/en/docs/inspector
info: Server up and running on port 3500 {"timestamp":"2025-04-17 17:11:36"}
Swagger docs: http://localhost:3500/api/v1
```

### 3) Run the background services (iot simulation)

1. in a separate terminal. run the Analytics Rollup with the command `npm run rollup:dev`
   the terminal should print

```bash
npm run rollup:dev

> fms_api@1.0.0 rollup:dev
> ts-node-dev src/modules/analytics/analytics.rollup.ts

[INFO] 17:14:19 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.8.3)
info: updateVehicleAnalytics: Starting {"timestamp":"2025-04-17 17:14:20"}
```

2. open another terminal run `npm run iot:dev` to start sending telemetry

```bash
npm run iot:dev

> fms_api@1.0.0 iot:dev
> ts-node-dev src/simulation/sendSensorData.ts

[INFO] 17:16:44 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.8.3)
working on sensors 4
```

Create a vehicle. and start adding sensors to see data (auto refresh)

- GPS sensor will add location
- Mileage and Hours will show analytics

## Run In Production

make sure you have built the front end as mentioned in [readme.md](../FMS_WEB/README.md) and copied the `dist` content to `FMS_API/public`

build and run the api

```bash
npm run build
npm start

and then in 2 separate terminals

npm run rollup:prod
npm run iot:prod
```
