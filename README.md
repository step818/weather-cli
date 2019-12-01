# _Weather CLI_

## Usages

` node . `
` node . --help `
` node . --version `
` node . config -k=<ApiToken> `
` node . now `
` node . forecast `

or

` weather `
` weather --help `
` weather --version `
` weather config -k=<ApiToken> `
` weather config -c=<cityID> `
` weather config -u=<Temperature Units recieved as: C, F, or K> `
` weather now `
` weather forecast `

## Description

This console program is designed to take particular commands from the user. The main goal is to retrieve current weather and a 3 hour / 5 day forecast from the OpenWeather api at openweathermap.org.

----------

## Setup/Installation Requirements
----------
### Pre - Installation Requirements

You will need to install Node & npm on your computer if you haven't already.

`npm install`

Go to https://nodejs.org/en/download and follow instructions for either Windows, Mac, or Linux depending on what platform you are using.

Open your computer’s command prompt (Windows) or terminal (macOS/Linux).

Just type `node -v` in the command line and hit Enter to make sure Node was installed.
The version of Node you downloaded will appear, something like `v12.13.0`.

Then type `npm -v` in the command line and hit Enter to make sure NPM was installed.
The version of NPM you downloaded will appear, something like `6.12.0`.

### Opening the Food Truck CLI Program

Drag or copy the "foodtruck-cli" folder to your desktop.

Open your terminal and `cd` to the `weather-cli` project directory.

Once inside the root directory, to build locally, `npm install` and `npm link` 

Once inside the root directory, use the command `weather --help`,
to see a menu of valid commands.

If this returns an error, ` node . --help ` or `node . -h` will return the correct help menu to the console. The `npm link` command isn't recognized by your terminal, since that is the command that allows the custom `weather` to work. 

You will need to apply your own API token, instructions on how to do so follow:

If the `weather -h` command is not recognized, then use ` node . config -k=<ApiToken> ` but insert your Api token in place of the `<ApiToken>`.  

Use the ` weather config -k=<ApiToken> ` command with your API token to configure the program to gain access to the OpenWeather API.

This will safely save your Api Token for use of the CLI program so that you won't have to configure your way through the back end of the code. And your token will not be visible to any one else either. 

The default city is Seattle, and can be changed.
Use the command ` weather config -c=<cityID> ` to change the location.

The default temperature units isi Celsius, and can be changed. Use the command ` weather config -u=F ` for Fahrenheit, ` weather config -u=K ` for Kelvin, and ` weather config -u=C ` for Celsius.

Next, use the ( ` node . now ` ) or ` weather now ` command to see the current weather of Seattle, WA.

Then, use the ` weather forecast ` command to see a forecast.

Enjoy!

## Technologies Used
_Node.js, VSCode, Windows 10.1, powershell, OpenWeather

### License
*Licensed under the GPL License*
Copyright (c) 2019 **_Stephen Trewick_**