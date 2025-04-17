import { config } from "dotenv";
config();
import { Sensor } from "../../generated/prisma";
import { prisma } from "../lib/prismaClient";

const insertGpsData = async (sensor: Sensor): Promise<void> => {
  const lat = 25.2 + Math.random() * 0.1;
  const lng = 55.3 + Math.random() * 0.1;

  try {
    await prisma.telemetry.create({
      data: {
        sensorId: sensor.id,
        payload: [lat, lng],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const insertMileageData = async (sensor: Sensor): Promise<void> => {
  console.log(`running insertMileageData`);
  const lastEntry = await prisma.telemetry.findFirst({
    where: { sensorId: sensor.id },
    orderBy: { timestamp: "desc" },
  });
  let lastMile = 0;
  if (lastEntry) {
    lastMile = Number(lastEntry.payload ?? 0);
  }

  try {
    await prisma.telemetry.create({
      data: {
        sensorId: sensor.id,
        payload: lastMile + 3,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const insertTemperatureData = async (sensor: Sensor): Promise<void> => {
  const temp = Math.floor(Math.random() * (90 - 60 + 1)) + 60;

  try {
    await prisma.telemetry.create({
      data: {
        sensorId: sensor.id,
        payload: temp,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const insertHoursData = async (sensor: Sensor): Promise<void> => {
  const lastEntry = await prisma.telemetry.findFirst({
    where: { sensorId: sensor.id },
    orderBy: { timestamp: "desc" },
  });
  let lastHours = Number(lastEntry?.payload ?? 0);

  try {
    await prisma.telemetry.create({
      data: {
        sensorId: sensor.id,
        payload: lastHours + 1,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

async function simulateSensorData(): Promise<void> {
  const sensors = await prisma.sensor.findMany();
  console.log("working on sensors", sensors.length);
  for (const sensor of sensors) {
    switch (sensor.type) {
      case "GPS":
        await insertGpsData(sensor);
        break;
      case "Mileage":
        await insertMileageData(sensor);
        break;
      case "Temperature":
        await insertTemperatureData(sensor);
        break;
      case "Hours":
        await insertHoursData(sensor);
        break;
      default:
        break;
    }
  }
  console.log("done");
}
simulateSensorData();
setInterval(simulateSensorData, 3000);
// read from Sensor. grab all available sensors
// for every sensor insert a fake payload depending to type
// this script should run every 5 seconds. and query the db for sensors everytime (covering new sensors)
// possible types: export const SensorTypeEnum = z.enum(["GPS", "Mileage", "Temperature", "Hours"]);
// possible values. if sensor is type GPS payload should be coordinates [lat,long] (around UAE)
// if sensor is type mileage. fetch last entry. and increase mileage (by 3)
// if sensor is type hours. fetch last entry (sensor id). and increase hours (by 1)
// if its a Temperature. payload is random number between 60-90
