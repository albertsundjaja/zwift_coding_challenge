# Zwift Coding Challenge

## Installation

Clone this repository

```
git clone https://github.com/albertsundjaja/zwift_coding_challenge
cd zwift_coding_challenge
```

initialize and pull the react and vue app submodule

```
git submodule update --init --recursive
```

Do NPM install for this project

```
npm install
```

*note* sometimes npm install stucks, if it does, try deleting `package-lock.json` and do another `npm install`

Run the node server

```
npm run start
```

##### note 
by default the node server will serve the vue frontend app,
to change it to react, we need to set the environment variable `FRONTEND`

```
// windows
set FRONTEND=react
npm run start
```

```
// mac / linux
FRONTEND=react npm run start
```

Open your browser and navigate to

```
http://localhost:8080
```

**note** when switching between vue and react, sometimes the browser will cache the files.
Thus, when switching be sure to empty cache and reload

### Notes

for simplicity (although this is a bad practice), the Google Map API key is **included** in this project, and there is no need to change anything

for faster testing, the build folder was committed inside the React web app repo (it took a few minutes to do npm install and build the web app)
to build it manually do the following:

```
cd zwift_coding_challenge_react
npm install
npm run build
cd ..
```