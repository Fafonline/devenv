# Build

docker build -t devenv:latest
Get-Content .\Dockerfile | docker build -t devenv:latest -


# In Vscode
- Attach devenv with vscode then (with command palette "Attach to running container)
- Define defaut terminal profile for zsh