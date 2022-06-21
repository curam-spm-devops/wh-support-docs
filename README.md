# Support docs transition site
Here you'll find transitional support documentation for the Social Programs portfolio.

## Installation instructions

### Requirements

node.js - version 14.17.6 [^1]

[^1]: It is recommended to install node using [Node Version Manager](https://github.com/nvm-sh/nvm).

### Install dependencies
After cloning this repository, [open a terminal](https://support.apple.com/en-ie/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac) at the root of the project

```console
cd /wh-support-docs
```

and run the install command.

```console
npm install
```

### Running the site locally
Run `npm run dev` to build the site.

After the command completes, the site will be accessible at `http://localhost:8000/` in your browser.

## Deployment

The content is managed and deployed on the `gh-pages` branch by the GitHub Actions *Deploy* workflow.