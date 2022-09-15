# Build and run
```bash
docker compose -f "docker-compose.yml" up -d --build 
```
# About the server implementation
You can find the server implementation in ./volumes/server/server.js
So that you can modify the server on the fly without need to rebuild the image.

# Javascript function server
You can find in volumes/functions/functions.js content you can access via the URL /functions
Port 49160 is used

# Example

http://localhost:49160/functions