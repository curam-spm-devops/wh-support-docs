# Merative Support docs transition site

Here you'll find transitional support and release documentation for the Merative Social Program Management portfolio.

## Installation instructions

Clone this repository.

### Requirements

node.js - version 20.11.0

It is recommended to install node using [Node Version Manager](https://github.com/nvm-sh/nvm)
Mac: See the 'Troubleshooting on macOS' section, you might need to create a bash profile (see related bullet)

### Install dependencies

```console
  npm install
```

### Running the site locally

Run `npm run dev` to build the site. (In VSC, open a new terminal window - change it to a bash window for the run command to work)

After the command completes, the site will be accessible at `http://localhost:8000/` in your browser.

If you are adding static assets, such as pdfs in the static directory, run the full build commands to test your links:

```console
  npm run build
  npm run serve
```

## Deployment

The content is automatically managed and deployed on the `gh-pages` branch by the deploy GitHub Actions *Deploy* workflow.
The deployed site is viewable at [https://curam-spm-devops.github.io/wh-support-docs/](https://curam-spm-devops.github.io/wh-support-docs/).

## Lint and mdx files

In VSC, install the markdownlint extension, then open the markdownlint extension settings and edit the json config to insert mdx:

```"files.associations": {
 "*.md": "markdown",
 "*.mdx": "markdown"
},
```

## YAML file syntax checker

In VSC, install the YML Language Support by Red Hat exension. This extension identifies issues in the yaml nav file.

## Markdown syntax

This gives a good overview: [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#syntax.)
