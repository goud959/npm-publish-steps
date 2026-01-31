# @goud0612/hello-world

A simple npm package that returns a greeting message.

This package was created to learn how to:
- create a simple npm package
- publish it to the npm registry
- install and use it in another project
- update it by bumping the version and publishing again

---

## What is the npm registry?

The **npm registry** is an online place where JavaScript/Node packages are stored and shared.

When you run:

```bash
npm install <package-name>
npm downloads the package from the registry (default: https://registry.npmjs.org/).

Step 1: Create the package
1) Create a folder and initialize npm

mkdir hello-world
cd hello-world
npm init -y

This creates a package.json.
2) Create the package code

Create a file named index.js:

// index.js
function hello(name = "world") {
  return `Hello, ${name}!`;
}

module.exports = { hello };

3) Ensure package.json has main entry

Make sure package.json contains:

{
  "name": "@goud0612/hello-world",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}

Step 2: Publish to npm
1) Login to npm

npm login

Confirm:
npm whoami

2) Publish the package

Because this is a scoped package (@goud0612/...), publish as public:
npm publish --access public

Step 3: Install and use it in another project
1) Install the package

In another project folder:

npm install @goud0612/hello-world

2) Use it in code (Node/CommonJS)

const { hello } = require("@goud0612/hello-world");

console.log(hello("Sony")); // Hello, Sony!


Step 4: Make changes and publish again (update)

npm does not allow publishing the same version again.

If you try to publish again with 1.0.0, you will get an error like:

You cannot publish over the previously published versions: 1.0.0

1) Update version (minor)

After making code changes, bump the version:

npm version minor
Example:

1.0.0 → 1.1.0

2) Publish again

npm publish --access public

Update the package in another project

To install the latest version:

npm install @goud0612/hello-world@latest

Or update:

npm update @goud0612/hello-world

Helpful npm commands

Check latest version:

npm view @goud0612/hello-world version

See all published versions:

npm view @goud0612/hello-world versions