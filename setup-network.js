import { setGlobalDispatcher, ProxyAgent } from 'undici';

// L'indirizzo del proxy della tua azienda
const proxyUrl = 'http://10.102.162.14:3128';

// Forza il proxy per TUTTE le chiamate interne di Next.js e Clerk
setGlobalDispatcher(new ProxyAgent(proxyUrl));

// Ignora i certificati autofirmati del firewall
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

console.log(`🌐 Proxy di rete aziendale attivato nel processo: ${process.pid}`);