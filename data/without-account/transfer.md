---
type: "article"
title: "How do I import data from a server?"
path: "without-account/transfer"
category: "without-account"
---

## Import from a Ferdi server
Ferdi servers have the option to import and export your account data (including services and workspaces) to `.ferdi-data` files. These files are simple JSON files that follow a specific format.

Visit "https://[Your server]/user/account" (e.g. <https://api.getferdi.com/user/account> for the official server). Log into your account and navigate to "Import/Export account data" and choose "Export data".

To import your data, visit <http://localhost:45569/transfer>, choose your file and click "Import data".

## Import from a Franz server
Visit <http://localhost:45569> in your browser. For "API server to import from", type `https://api.franzinfra.com` and enter your account details.