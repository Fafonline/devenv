FROM ubuntu:latest
RUN apt update && apt upgrade
RUN apt install -y git
RUN apt install -y zsh
RUN apt install -y curl
WORKDIR /home
RUN bash -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
ENTRYPOINT [ "/bin/zsh"]