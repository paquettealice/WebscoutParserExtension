#!/usr/bin/env bash

#install nodejs
sudo wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash
. ~/.bashrc
sudo nvm install 0.10.25
sudo nvm use 0.10.25
sudo ln -s /usr/bin/nodejs /usr/bin/node

#install npm
sudo apt-get -y update
sudo apt-get -y install npm

#install git
sudo apt-get -y install git

#install grunt
sudo npm install grunt-cli -g

#install ruby
sudo apt-get -y install ruby

#install tmux
sudo apt-get -y install tmux

#install tmuxinator
sudo gem install tmuxinator -v 0.6.9

#install bower
npm install -g bower





