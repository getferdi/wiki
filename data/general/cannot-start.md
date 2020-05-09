---
type: "article"
title: "I cannot start Ferdi anymore - what should I do?"
path: "general/cannot-start"
category: "general"
---
There are multiple reasons why Ferdi could refuse to start. Please try the following steps in the right order and try starting Ferdi again after each step.

1. Open the Task Manager (Windows) or Activity Monitor (Mac) and stop all "Ferdi" process if there are any
2. Delete the Ferdi .exe (Windows) or .app (Mac) and redownload it from <https://getferdi.com>. This will probably log you out of your account but won't delete any of your data.
3. Open "%appdata%/Ferdi" (Windows), "~/Library/Application Support/Ferdi" (Mac) or "~/.config/Ferdi" (Linux) in your File Explorer or Finder and delete the "config/settings.json" and "config/proxy.json" files.