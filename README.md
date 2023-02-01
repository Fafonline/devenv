# Content
- Ubuntu development machine
- reveal.js server
- couchbase local instance
- Simple server: Multi-purpose server using node.js

# Build and run
> You need Docker-desktop or other compatible container management software.
```bash
docker compose -f "docker-compose.yml" up -d --build 
```
# Docker containers
 - Ubuntu: Base image with custom install (e.g: python, go, oh-my zsh etc ...)
 - Couchbase: Stand-alone install
 - Simple Server: A simple javascript server running on nodejs.
 - gitlab : [Working in progress]


