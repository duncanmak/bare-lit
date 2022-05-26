## update and install some things we should probably have
apt-get update
apt-get install -y \
  curl \
  git \
  gnupg2 \
  jq \
  sudo \
  unzip \
  zsh

# setup and install deno
curl -fsSL https://deno.land/x/install/install.sh | sh

deno install --allow-net --allow-read https://deno.land/std@0.133.0/http/file_server.ts