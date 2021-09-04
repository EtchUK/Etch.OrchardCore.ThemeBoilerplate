# Theme Boilerplate

Theme boilerplate is our starting point for building [Orchard Core](https://orchardcore.readthedocs.io/en/latest/) themes.

## Build Status

[![Build Status](https://secure.travis-ci.org/etchuk/Etch.OrchardCore.ThemeBoilerplate.png?branch=master)](http://travis-ci.org/etchuk/Etch.OrchardCore.ThemeBoilerplate) [![NuGet](https://img.shields.io/nuget/v/Etch.OrchardCore.ThemeBoilerplate.svg)](https://www.nuget.org/packages/Etch.OrchardCore.ThemeBoilerplate)

## Getting Started

To create a new theme using the boilerplate it's quickest to use the `dotnet new` command. First you'll need to install the template, which is hosted on NuGet.

    dotnet new -i Etch.OrchardCore.ThemeBoilerplate --nuget-source https://api.nuget.org/v3/index.json

Once installed successfully, run the command below, which demonstrates all the possible parameters that are available.

    dotnet new orchardcore-themeboilerplate -n Example.OrchardCore.Theme -o Example.OrchardCore.Theme -au "Your Company Ltd." -d "Description for your theme" -t "Your Theme Name" -w "https://yourwebsite.co.uk"

### Parameters

Below are the different parameters that can be included in the `dotnet new` command. The majority of the parameters will be used in the `package.json`, `.csproj` (to describe author of NuGet package) and the theme manifest. `-n` & `-o` are parameters required by `dotnet new`.

#### -au/--author

Author of the theme.

#### -d/--description

Short description of the theme.

#### -t/--themeName

Name of your theme.

#### -w/--website

URL for your website.

## Packaging Template

This template has been made available on NuGet. To create the `.nupkg` file that can be published to NuGet, run the command shown below.

    nuget pack ./Etch.OrchardCore.ThemeBoilerplate.nuspec
