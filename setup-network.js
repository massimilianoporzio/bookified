/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */
import { setGlobalDispatcher, ProxyAgent } from "undici";

// Attiva il proxy solo se USE_PROXY è impostato a 'true' nell'env
if (process.env.USE_PROXY === "true") {
  // L'indirizzo del proxy della tua azienda
  const proxyUrl = "http://10.102.162.14:3128";
  setGlobalDispatcher(new ProxyAgent(proxyUrl));
  // Ignora i certificati autofirmati del firewall
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(
    `🌐 Proxy di rete aziendale attivato nel processo: ${process.pid}`,
  );
}
