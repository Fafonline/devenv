
FROM ubuntu:latest
FROM python:latest
ENV user=zeke

WORKDIR /home/${zeke}
RUN HOME="/home/${user}"
RUN USER=${zeke}
RUN apt update -y
RUN date > version.txt
RUN apt install -y git

# <Oh my ZSH>
RUN apt install -y zsh
RUN apt install -y curl
RUN bash -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# </Oh my ZSH>

#<vim>
RUN apt-get install -y vim
#</vim>

#<Openshift>
RUN apt update -y
RUN apt-get install -y libgpgme-dev
#</Openshift>

#<PIP>
RUN apt-get  update
RUN apt-get install -y python3-pip
#</PIP>

#<autoPEP>
RUN python3 -m pip install -U autopep8 
#</autoPEP>

#<matplotlib>
# RUN python3 -m pip install matplotlib requests
#</matplotlib>

# For MealMe
RUN python3 -m pip install -U Flask couchbase
# RUN apt-get install npm -y
# RUN npm install -g @angular/cli

#<Repo>
RUN mkdir -p /opt/bin
ENV PATH="/opt/bin:${PATH}"
RUN curl https://storage.googleapis.com/git-repo-downloads/repo > /opt/bin/repo
RUN chmod a+rx /opt/bin/repo
#</Repo>

#<Node>
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
# RUN apt-get install npm
RUN npm install axios bootstrap
RUN npm install jsonpath 
RUN npm install deep-equal 
RUN npm install json-diff 
RUN npm install -g @angular/cli

#lang chain
RUN python3 -m pip install colorama langchain openai chromadb tiktoken unstructured "unstructured[pdf]"

#<For prometheus_pods_alerting>
# RUN pip3 install --index-url https://repository.rnd.amadeus.net/api/pypi/pypi/simple pyyaml Jinja2



