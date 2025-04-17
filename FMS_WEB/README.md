# Fleet Management System - Frontend

## To run in development

make sure you have `node` with `pnpm` installed run
setup the api endpoint in `.env` to the api endpoint and run

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

## Built with

- React + vite
- Shadcn + TailwindCss
- Zod + react-hook-form for Validation
- react-leaflet
- react-leaflet + leaflet for map
- @tanstack/react-query + react-error-boundary (for suspense)
