---
type: "article"
title: "How can I use a proxy with Ferdi?"
path: "features/proxy"
category: "features"
---
Ferdi comes build-in with full Proxy support for all your services. The proxy settings can be set up for each insividual service.

1. Open settings using the cog in the bottom left corner
2. Choose "Your services" in the left sidebar
![Services tab](https://imgur.com/k2rjaM1.png)
3. Choose the service you want to set up a proxy for
4. Scroll down and activate "Use Proxy"
![Services tab](https://imgur.com/GI0lH3L.png)
5. Enter your Proxy settings
6. Click "Save service" in the bottom right corner

ℹ️ By default, Ferdi will use HTTP as the Proxy type. If you need to use another Proxy type, e.g. SOCKS5, please add the appropriate protocol name to the start of the "Proxy Host/IP" setting, e.g. `socks5://localhost`.