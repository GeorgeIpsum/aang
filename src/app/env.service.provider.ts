import {EnvService} from './env.service';

export const EnvServiceFactory = () => {
  const env = new EnvService();

  const browserWindow = window || {};
  const browserWindowEnv = browserWindow['_env'] || {};

  for(const key in browserWindowEnv) {
    if(browserWindowEnv.hasOwnProperty(key)) {
      env[key] = window['_env'][key];
    }
  }
  return env;
}

export const EnvServiceProver = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: [],
}