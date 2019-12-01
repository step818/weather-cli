import chalk from 'chalk';

const menus = {
  main: `
    ${chalk.bgMagenta('You must first go to https://openweathermap.org/api and sign up for an API key to be able to retreive weather data from here.')}
    ${chalk.bgMagenta('Then use the command, \'weather config -k=[yourAPIKEY]\' to save your API key to this program. Don\'t worry, it will be stored secretly.')}

    ${chalk.greenBright('weather [command] <options>')}
    
    ${chalk.blueBright('config')} .......... set API key, default city ID, default temperature units
    ${chalk.blueBright('now')} ............. show weather for now
    ${chalk.blueBright('forecast')} ........ show weather forecast
    ${chalk.blueBright('version')} ......... show package version
    ${chalk.blueBright('help')} ............ show help menu for a command
    `,

    now: `//...
      `,
    forecast: `//...
      `,
    config: `//...
      `,
}

export async function help(args) {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
  console.log(menus[subCmd] || menus.main)
}