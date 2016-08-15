# Angular TypeScript Seed

A very basic seed project for Angular 1 applications written in TypeScript.

## Getting started

### Installing the Node, Bower and Typings dependencies

    npm install

### Starting the development server

    npm start

### Building the application

    gulp

### Watching for changes to LESS and TypeScript files

    gulp watch

## What's included

- Basic development server
- Angular application stub with routing
- LESS stylesheet stub with
  [Normalize.css](https://necolas.github.io/normalize.css/)
- [Gulp.js](http://gulpjs.com/) tasks to:
  - Watch and compile TypeScript source files (with ES6 modules) into the
    public scripts directory
  - Watch and compile LESS source files (with auto-prefixing) into the public
    styles directory
  - Concatenate third party scripts into a single file in the public scripts
    directory

## What's excluded

- Minification
- Cache busting

## Project structure

    bower_components/    Runtime dependencies
    node_modules/        Dev dependencies
    src/                 Source files
      scripts/           TypeScript source files
      styles/            LESS source files
    typings/             TypeScript definition files
    www/                 Public root
      assets/            Public assets
        scripts/         JavaScript files
          app.js         Compiled application scripts
          lib.js         Concatenated library scripts
        styles/          CSS stylesheets
          app.css        Compiled application styles
        templates/       Angular templates

## Package managers

- [npm](https://www.npmjs.com/) for build and dev dependencies
- [Bower](https://bower.io/) for runtime dependencies
- [Typings](https://github.com/typings/typings) for TypeScript type definitions
