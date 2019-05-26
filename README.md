# ruuvi_node_listener
A nodejs service for listening data transmitted by RuuviTag IOT sensors and relaying that data to a database


There are a few steps that need to be done before running `npm install` and `node app.js` commands, at least when
running this project on raspberry pi 3. You need to run the project with node 8 (tested on 8.16.0), it seems that
building the libraries on ubuntu for newer node versions fails.

1) run `sudo setcap cap_net_raw+eip $(eval readlink -f `which node`)` (https://github.com/noble/noble) for noble 
(used for bluetooth library). Seems to be related to running npm as sudo.
2) you might need to run  `sudo apt-get install libudev-dev` to install newest linux libs
