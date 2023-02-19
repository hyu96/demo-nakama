FROM node:alpine AS node-builder

WORKDIR /backend

COPY package*.json .
RUN npm install
COPY tsconfig.json .
COPY src/ ./src/
RUN npx tsc

FROM heroiclabs/nakama:3.3.0

ENV NAKAMA_USERNAME="postgres"
ENV NAKAMA_PASSWORD="defaultpassword"
ENV NAKAMA_DB_URL="nakama_db_url"
ENV NAKAMA_DB_PORT="5432"
ENV NAKAMA_DB_NAME="postgres"

COPY --from=node-builder /backend/build/*.js /nakama/data/modules/build/
COPY local.yml /nakama/data
ENTRYPOINT ["/bin/sh", "-ecx", "exec /nakama/nakama --config /nakama/data/local.yml --database.address $NAKAMA_USERNAME:$NAKAMA_PASSWORD@$NAKAMA_DB_URL:$NAKAMA_DB_PORT/$NAKAMA_DB_NAME"]
