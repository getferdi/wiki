<p align="center">
  <img alt="Ferdi Wiki" src="src/images/icon.png" width="250" />
</p>
<h1 align="center">
  Ferdi Wiki
</h1>

This repository hosts Ferdi's wiki.

Visit <http://help.getferdi.com/> to get answers to your most asked questions.

Ferdi Wiki is build on [sprous](https://github.com/vantezzen/sprous).

- [Quick start](#quick-start)
- [Adding pages](#adding-pages)
  - [Creating categories](#creating-categories)
  - [Creating articles](#creating-articles)
- [Deploy](#deploy)
- [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)

## Quick start

1.  **Clone.**

    Clone this repository.

2.  **Install dependencies.**

    Navigate into Ferdi Wiki's directory and install all dependencies using
    ```bash
    yarn install
    ```
3. **Test your page.**
    Start a local developement server using `yarn develop`
4. **Deploy.**
    Create a production-ready build using
    ```bash
    yarn build
    ```
    Please refer to [GatsbyJS' docs "Deploying and Hosting" section](https://www.gatsbyjs.org/docs/deploying-and-hosting/) if you run into any problems with GatsbyJS.

## Adding pages
Ferdi Wiki's pages are located inside of subdirectories of `data/` - these subdirectories represent categories of your support page. 
You can also create category-less page files inside of `data/` itself but we advice to only create pages inside of category folders as category-less pages can only be found by searching for them.

When creating files and folders inside of `data/` we advice using hypen-case (`How can I reset by password` => `How-can-I-reset-my-password`) or camelCase (`How can I reset by password` => `HowCanIResetMyPassword`).

Please take a look at `data/` for example categories and articles

### Creating categories
You can create a new category by creating a new folder inside of `data/` with the name of your category (e.g. `billing`). 
You then need to create an `index.md` file inside this folder with the following content:
```md
---
type: "category"
title: "Category title"
description: "Short description that will be shown on the index page"
icon: "HelpCircle"
path: "category"
---
This optional text will be shown on the category page
```
This will define:
- `type: "category"`: Define that this file will define the category information
- `title`: Title/Name of this category
- `description`: Short description of this category. This will be shown on the category list on the index page
- `icon`: Icon that will be used for the category. This icon is part of [Feather Icon](https://feathericons.com/), the icon name has to be *uppercase camelCased* (`credit-card` => `CreditCard`), as the icons are pulled from [react-feather](https://github.com/feathericons/react-feather)
- `path`: Path/URL that the category page will be located at (e.g. `billing` => `https://example.com/billing`)
- In the body of this file you can optionally add a markdown-formatted text that will be shown on the category page

### Creating articles
You can create articles inside of category folders by creating a new markdown file. You can name this file anything you want but we advice to name your article files after the article title.

Inside this file, add your article in this format:
```md
---
type: "article"
title: "Article title"
path: "category/article-title"
category: "category"
---
*Markdown-formatted* Article body
```
This will define:
- `type: "article"`: Define that this file will define an article
- `title`: Title/Name of this article
- `path`: Path/URL that the article page will be located at (e.g. `billing/credit-card` => `https://example.com/billing/credit-card`). This can be any path you want, the category name will *not* be automatically prepended, but we advice you to use the `category-path/article-path` format.
- `category`: Path of the category this article belongs to. This should match the `path` property of the category.
- The body of this markdown file will be the body of your article

## Contributing
Thank you for your interest in contributing to Ferdi's wiki. Please take a look at [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for more information on how to contribute.

## License
Licensed under the [MIT License](license.md)