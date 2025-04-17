# Fleet Management System

● Develop a simplified version of a Fleet Management System that allows users to track and
manage different vehicles used in logistics, construction, or any other fleet-intensive industry.

● Simulate IoT devices sending real-time data to the backend (like location, speed ...)

## Overview

### System Design

![Fleet Management System - Design](./system_design.png)

#### Future Improvements to scale.

- IoT is a heavy traffic domain, Ingesting the traffic should be done separately, we can decouple it using Kafka when it's time to scale.

- Sensors requests should be saved as is. (raw) for reconsiliation and history purposes. a separate high traffic DB (like Cassandra) might be used to store telemetry data.

- A background service is enough for this demo API. but for a production scale. an ETL setup with a data warehouse is needed. for reporting and queries

## DB Schema

![Database](./db_diagram.png)

#### Future Improvements

- SensorType: A separate Collection, and Sensor should reference the Id to control the allowed types and add more validation

- VehicleType: A separate Collection for Vehicle Types. Vehicle model should reference it for type

- VehicleAnalytics: the current setup allows a single analytic/vehicle. in a real world app. analytics should be a time series. (rollups) where we can see the history (by Stat_date, Stat_hour)

## Workflow
