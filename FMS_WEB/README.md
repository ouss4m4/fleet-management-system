# Fleet Management System - Frontend

## Run in development

Make sure you have `node` and `pnpm` installed.  
Setup the API url in `FMS_WEB/.env` 

```.env
# FMS_WEB/.env

VITE_API_URL=http://localhost:3500
```

```
pnpm install
pnpm dev
```

You should see the output in terminal

```bash
> fms_web@0.0.0 dev /Users/ouss/personel/fleet-management-system/FMS_WEB
> vite


  VITE v6.2.6  ready in 186 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

visit http://localhost:5173 (or the port showing in terminal)

## For Production

Run `pnpm build` and then copy the `dist` folder content to `FMS_API/public`

`mv dist ../FMS_API/public`

## Built with

- React + vite
- Shadcn + TailwindCss
- Zod + react-hook-form for Validation
- react-leaflet
- react-leaflet + leaflet for map
- @tanstack/react-query + react-error-boundary (for suspense)
