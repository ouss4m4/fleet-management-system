# --------- Stage 1: Build frontend ---------
FROM node:20-slim AS web-builder

WORKDIR /frontend

COPY FMS_WEB/package.json FMS_WEB/pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

COPY FMS_WEB ./
ENV VITE_API_URL=
RUN pnpm build


# --------- Stage 2: Build API ---------
FROM node:20-slim AS api-builder

WORKDIR /app
RUN apt-get update && apt-get install -y openssl libssl-dev


# Install API dependencies with npm (no pnpm needed here)
COPY FMS_API/package.json FMS_API/package-lock.json ./
RUN npm install

# Copy API source
COPY FMS_API ./


# Copy built frontend into public folder of API
COPY --from=web-builder /frontend/dist ./public

# Generate Prisma Client
RUN npx prisma generate

# Run build (includes copying public into dist and prisma)
RUN npm run build

# --------- Final Image: Runtime only (copy final output and npm install deps) ---------
FROM node:20-slim

WORKDIR /app
RUN apt-get update && apt-get install -y openssl libssl-dev

# Install prod deps
COPY FMS_API/package.json FMS_API/package-lock.json ./
RUN npm install --omit=dev

# Copy final backend dist (which includes frontend inside dist/public)
COPY --from=api-builder /app/dist ./dist

CMD ["node", "dist/index.js"]