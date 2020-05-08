---
type: "article"
title: "Using user.css and user.js (User-styles and User-scripts)"
path: "features/userfiles"
category: "features"
---
`user.js` and `user.css` allow you to inject custom code into any service. This can be used to automate or alter the service in any form, e.g. adding custom styles or adding a script to automatically login.

`user.js` and `user.css` are only stored locally on your device and won't be transmitted to other devices that use the same account.

## Editing the files
To edit `user.js` or `user.css`, open Ferdi's settings using the cog in the bottom left corner, in the left sidebar go to "Services" and choose a service.
On this screen, scroll down and click one of the buttons `Open darkmode.css`, `Open user.css` or `Open user.js`:
- `darkmode.css` will only be injected into the page if you have enabled dark mode inside Ferdi
- `user.css` will always be injected
- `user.js` will always be injected. The file will only be injected after the DOM completed loading

Please note that these buttons will only show up when editing existing services - not when creating a new service as the files have not been created yet there.

After editing one of those files, you can reload the current service using CMD/CTRL + R.

Please keep in mind that the same `user.css` and `user.js` file will be loaded for **all** services that use the same recipe (e.g. all Telegram services use the same `user.js` and `user.css`). You can however add service-specific features using the helpers mentioned below. 

## User.js
When opening a `user.js` file for the first time, you will see that the file contains the following template:

Example:
```JavaScript
module.exports = (config, Ferdi) => {
  // Write your scripts here
  console.log("Hello, World!", config);
}
```

You script will be executed inside the service itself (i.e. your code has full access to the page). Additionally, you get the following arguments to help you write your code:

1. `config`: Configuration of the current service. This config will look something like this
```JavaScript
{
  "franzVersion": "5.4.4-beta.1", // Current version of Ferdi
  "hasCustomIcon": false, // true if you uploaded your own icon
  "id": "31b3dba0-efb7-4ecf-919b-084d68160bb1", // Unique ID for every instance of a recipe
  "isDarkModeEnabled": false,
  "spellcheckerLanguage": "en-EN",
  "team": "",
  "url": "https://web.telegram.org",
  "recipe": { // General information about the recipe
    "description": "Telegram",
    "disablewebsecurity": false,
    "hasCustomUrl": false,
    "hasDirectMessages": true,
    "hasHostedOption": false,
    "hasIndirectMessages": false,
    "hasNotificationSound": true,
    "hasPredefinedUrl": false,
    "hasTeamId": false,
    "id": "telegram",
    "message": "",
    "name": "Telegram",
    "path": "/Users/.../Library/Application Support/Ferdi/recipes/telegram",
    "rawAuthor": "Stefan Malzner <stefan@adlk.io>",
    "serviceURL": "https://web.telegram.org",
    "urlInputPrefix": "",
    "urlInputSuffix": "",
    "version": "1.0.5"
  }
}
```

2. `Ferdi`: The Ferdi instance allows you to interact with Ferdi. It is an instance of the `Userscript` class (see https://github.com/getferdi/ferdi/blob/develop/src/webview/lib/Userscript.js). You can find the full documentation of this class below:

### Ferdi instance
The `Ferdi` instance gives the script the following methods and variables:

`config` - Service configuration, same as the first "config" argument

`settings` - Full settings object, containing Ferdi's and the service's settings. Please note that this object should be treated _read-only_ - you can not change settings through it! The settings object will look like this:
```
{
   "overrideSpellcheckerLanguage":false,
   "app":{ // Ferdi's settings
      "autoLaunchInBackground":false,
      "runInBackground":true,
      "reloadAfterResume":true,
      "enableSystemTray":false,
      "startMinimized":true,
      "minimizeToSystemTray":false,
      "privateNotifications":false,
      "showDisabledServices":true,
      "showMessageBadgeWhenMuted":true,
      "showDragArea":true,
      "enableSpellchecking":true,
      "spellcheckerLanguage":"en-us",
      "darkMode":false,
      "locale":"en-US",
      "fallbackLocale":"en-US",
      "beta":false,
      "isAppMuted":false,
      "enableGPUAcceleration":true,
      "serviceLimit":5,
      "server":"https://api.getferdi.com",
      "predefinedTodoServer":"https://app.franztodos.com",
      "autohideMenuBar":false,
      "lockingFeatureEnabled":false,
      "locked":false,
      "lockedPassword":"",
      "useTouchIdToUnlock":true,
      "scheduledDNDEnabled":false,
      "scheduledDNDStart":"17:00",
      "scheduledDNDEnd":"09:00",
      "hibernate":true,
      "hibernationStrategy":"10",
      "inactivityLock":0,
      "automaticUpdates":true,
      "showServiceNavigationBar":false,
      "universalDarkMode":true,
      "adaptableDarkMode":false,
      "accentColor":"#7367f0",
      "serviceRibbonWidth":68,
      "iconSize":20,
      "sentry":false,
      "navigationBarBehaviour":"never",
      "customTodoServer":"",
      "noUpdates":false,
      "todoServer":"isUsingCustomTodoService",
      "isDarkThemeActive":false
   },
   "service":{ 
       // ... Same as "config"
   }
}
```

The settings object can change through time. When first loading the user script this settings object will most likely not contain your customised settings yet as the settings have to be loaded through Electron. To make sure that you are getting the right settings, you may want to also register a settings handler:

`onSettingsUpdate(handler)` - Set a custom callback that should be called when the settings object above has changed

```JavaScript
module.exports = (config, Ferdi) => {
  Ferdi.onSettingsUpdate(() => {
      console.log(Ferdi.settings);
  });
}
```

`setBadge(direct = 0, indirect = 0)` - Set badge count (unread messages count) for the current service
```JavaScript
module.exports = (config, Ferdi) => {
  let i = 1;
  // Increase the badge count by one every second
  setInterval(() => {
     Ferdi.setBadge(i);
     i += 1;
  }, 1000);
}
```

`injectCSSFiles(...files)` - Inject local CSS file or files into the page
```JavaScript
module.exports = (config, Ferdi) => {
  // With one file:
  Ferdi.injectCSSFiles("C:/.../Desktop/style.css");
  // With multiple files:
  Ferdi.injectCSSFiles("C:/.../Desktop/style.css", "C:/.../Documents/style.css");
}
```

`injectCSS(styles)` - Inject CSS string into the page
```JavaScript
module.exports = (config, Ferdi) => {
  Ferdi.injectCSS(`body {
    background-color: red;
  }`);
}
```

`openFindInPage()` - Open the "Find in Page" popup
```JavaScript
module.exports = (config, Ferdi) => {
  Ferdi.openFindInPage();
}
```

`set(key, value)` and `get(key)` - Simple key-value store that can be used inside user scripts to save state.
```JavaScript
module.exports = (config, Ferdi) => {
  if (Ferdi.get("hasBeenLoadedBefore")) {
    // ...
  }

  Ferdi.set("hasBeenLoadedBefore", true);
}
```

`externalOpen(url)` - Open a URL in an external browser. Normally, when using `window.open`, Ferdi will decide whether to open the URL in Ferdi or an external browser. With `Ferdi.externalOpen(...)` you can force Ferdi to open the URL externally.

`internalOpen(url)` - Open a URL in Ferdi. Normally, when using `window.open`, Ferdi will decide whether to open the URL in Ferdi or an external browser. With `Ferdi.internalOpen(...)` you can force Ferdi to open the URL inside Ferdi.