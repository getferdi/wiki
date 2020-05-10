---
type: "article"
title: "What is a 'recipe'?"
path: "general/recipe"
category: "general"
---
Ferdi's "recipes" are pieces of code that provide the connection between Ferdi and your services.

Some of Ferdi's features require Ferdi to fetch information from your services, e.g. getting the number of unread messages you have. As this process is not the same across all services (i.e. WhatsApp needs another process to get unread messages than GMail), we need a "recipe" for each service.

Without a recipe, Ferdi will still be able to display your services but not provide some of the features.

Here are some tasks a recipe might handle:
- Get the number of unread messages
- Verify the service URL you've entered (e.g. for Slack to verify you entered a valid Team ID)
- Handle Dark-Mode
- Add custom styling to the service to better display it in Ferdi
- Provide an icon for Ferdi to use in its sidebar

If you are interested in creating a recipe for a new service yourself, take a look at <https://github.com/getferdi/recipes/blob/master/docs/integration.md>.