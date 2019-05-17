# aformjs

aformjs is a fast json-schema form generator using a fork of hyperapp within futilsjs. This is underheavy construction for the moment, so don't expect much of it.

## # build instructions on windows

To build aformjs you need to get a local copy of futilsjs first.

```sh
$~\> git clone https://github.com/jklarenbeek/futilsjs.git futilsjs
```

Then get yourself a copy of aformjs.

```sh
$~\> git clone https://github.com/jklarenbeek/aformjs.git aformjs
$~\> cd .\aformjs
```

From this aformjs project location, create a junction to the futilsjs dist folder.

```sh
$~\aformjs> cd src
$~\aformjs\src> mklink /j __futilsjs ~\futilsjs\dist
```

Now build and start the development environment.

```sh
$~\aformjs\src> cd ..
$~\aformjs> npm run start
```
