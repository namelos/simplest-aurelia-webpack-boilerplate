import { bootstrap } from 'aurelia-bootstrapper'

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'), document.body)
}

bootstrap(configure)
