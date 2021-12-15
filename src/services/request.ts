/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from 'instagram-private-api';
const shttps = require('socks-proxy-agent'); // you should install SOCKS5 client via: npm i socks-proxy-agent
// eslint-disable-next-line
(async () => {
  const ig = new IgApiClient();
  // @ts-ignore
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.request.defaults.agentClass = shttps; // apply agent class to request library defaults
  ig.request.defaults.agentOptions = {
    // @ts-ignore
    hostname: '127.0.0.1', // proxy hostname
    port: 8000, // proxy port
    protocol: 'socks:', // supported: 'socks:' , 'socks4:' , 'socks4a:' , 'socks5:' , 'socks5h:'
    //username: 'myProxyUser', // proxy username, optional
    //password: 'myProxyPassword123', // proxy password, optional
  };
  // Now we can perform authorization using our SOCKS5 proxy.
  // @ts-ignore
  const auth = await ig.account.login(
    // @ts-ignore
    process.env.IG_USERNAME,
    // eslint-disable-next-line
    process.env.IG_PASSWORD
  );
  console.log(JSON.stringify(auth));
  // Do your things.
})();
