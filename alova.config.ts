// https://alova.js.org/zh-CN/tutorial/getting-started/extension-integration#%E9%85%8D%E7%BD%AE
import type { Config } from '@alova/wormhole/typings';

const config: Config = {
  generator: [
    // {
    //   input:
    //     'https://raw.githubusercontent.com/swagger-api/swagger-petstore/refs/heads/master/src/main/resources/openapi.yaml',
    //   output: 'src/api/petStore',
    //   global: 'PetStore',
    // },
  ],

  autoUpdate: {
    launchEditor: true,
    interval: 5 * 60 * 1000,
  },
};

export default config;
