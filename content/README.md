# Boilerplate Theme

Theme boilerplate is our starting point for building Orchard Core themes.

## Orchard Core Reference

This theme is referencing the RC2 build of Orchard Core ([`1.0.0-rc2-13450`](https://www.nuget.org/packages/OrchardCore.Theme.Targets/1.0.0-rc2-13450)).

## Prerequisities

### [.NET Core](https://docs.microsoft.com/en-us/dotnet/core/)

Orchard Core runs on the .NET Core. Download the latest version from [https://www.microsoft.com/net/download/core](https://www.microsoft.com/net/download/core).

### [NodeJS](https://nodejs.org/en/)

The theme requires NodeJS 14.15.5 or higher to assist with gathering third party front-end dependencies and compiles front-end assets. Compilation of front-end assets is handled by [Webpack](https://webpack.js.org/).

## Pattern Library

The theme comes with a Fractal pattern library baked in. Head over to the [official Fractal website](https://fractal.build/) to learn more about working with Fractal. The [commands](/#commands) used when developing on the theme are geared to encouraging development through with the pattern library. The pattern library will be included in the theme package, which makes it accessible when referenced within an Orchard Core project. While your Orchard Core site is running navigate to `/Etch.OrchardCore.ThemeBoilerplate/patterns/index.html` to view the pattern library.

## Commands

### Developing

When developing on the theme it's likely you're be working with HTML and static assets (CSS & JavaScript). To assist with building the theme and provide a resource to content managers the theme comes with a pattern library. Running the command below will set up compilation of front end assets and spin up a web server for viewing the pattern library in your web browser.

    npm run start

### Compiling Front-end Assets

When developing, it's likely you'll be working with front-end assets (located in `/Assets`) that need to be compiled in to files that are referenced by the theme (in `Views/Layout.cshtml`). The command shown below will compile CSS & JavaScript assets via Webpack and keep watch of files that will trigger compilation.

    npm run bundle:watch

_Hint: Running `npm start` will run the command above after running `npm install`._

When the theme is deployed to a production environment we need to serve compressed assets for optimial delivery to improve page load times. The command below will compile assets ready for optimal delivery. This command ia automatically run when the project is compiled with `--configuration Release`.

    npm run bundle:prod

### Launching Pattern Library

To spin up a web server (seperate from an Orchard Core site) that'll provide access to the pattern library run the command below. Any changes to theme assets will automatically be reflected in the pattern library. Once the command below has been run, navigate to `http://localhost:3000` to view the pattern library.

    npm run start:patterns

_Hint: Running `npm start` will run the command above after running `npm install`._

### Packaging

When the theme is compiled (using `dotnet build`) it's configured to generate a `.nupkg` file (this can be found in `\bin\Debug\` or `\bin\Release`).

## Notes

This theme was created using `v0.7.0` of [Etch.OrchardCore.ThemeBoilerplate](https://github.com/EtchUK/Etch.OrchardCore.ThemeBoilerplate) template.
