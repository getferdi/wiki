---
type: "article"
title: "How do I transfer my data between servers?"
path: "server/transfer"
category: "server"
---
Ferdi servers have the option to import and export your account data (including services and workspaces) to `.ferdi-data` files. These files are simple JSON files that follow a specific format.

### Export data from the internal server (using Ferdi without an account)
Visit <http://localhost:45569/transfer> and click "Export data"

### Export data from Ferdi servers
Visit "https://[Your server]/user/account" (e.g. <https://api.getferdi.com/user/account> for the official server). Log into your account and navigate to "Import/Export account data" and choose "Export data".

### Import data into the internal server (using Ferdi without an account)
Visit <http://localhost:45569/transfer>, choose your file and click "Import data".

### Import data into a Ferdi server
Visit "https://[Your server]/user/account" (e.g. <https://api.getferdi.com/user/account> for the official server). Log into your account and navigate to "Import/Export account data", choose your file and click "Import data"