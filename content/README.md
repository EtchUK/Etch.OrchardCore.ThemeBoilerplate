# Boilerplate Theme

Theme boilerplate is our starting point for building Orchard Core themes.

## Orchard Core Reference

This theme is referencing a stable build of Orchard Core ([`1.6.0`](https://www.nuget.org/packages/OrchardCore.Theme.Targets/1.6.0)).

## Prerequisities

### [.NET Core](https://docs.microsoft.com/en-us/dotnet/core/)

Orchard Core runs on the .NET Core. Download the latest version from [https://www.microsoft.com/net/download/core](https://www.microsoft.com/net/download/core).

### [NodeJS](https://nodejs.org/en/)

It's recommended to use the latest LTS version of NodeJS. NodeJS used is for handling compilation of source code in to front-end assets that are served to the user. Compilation of front-end assets is handled by [Vite](https://vitejs.dev/).

## Commands

### Developing

When working with the theme within a develoment environment the following command must be run because the front-assets will be loaded via a local development server spun up by Vite. Vite uses [hot module replacement](https://vitejs.dev/guide/features.html#hot-module-replacement) to automatically display CSS changes or reload the browser when there is a change to the JavaScript.

    npm run start

### Compiling Front-end Assets

When the theme is deployed to a production environment assets will be compiled for optimial delivery to improve page load times. The command below will compile assets and place them within the `wwwroot` folder of the theme. Requests to `./Etch.OrchardCore.ThemeBoilerplate` will serve the assets.

    npm run build

### Packaging

When the theme is compiled (using `dotnet build`) it's configured to generate a `.nupkg` file (this can be found in `\bin\Debug\` or `\bin\Release`).

## Notes

This theme was created using `v#{VersionNumber}#` of [our boilerplate template](https://github.com/EtchUK/etch.orchardcore.themeboilerplate).
