# Antstream Test - React App

## Table of Contents

- [Install](#install)
- [Run](#run)
- [Development](#development)
- [Documentation](#documentation)

## Install

- Move to app folder with `cd antstream-test`
- Install dependencies with `npm install`

## Run

- Move to app folder with `cd antstream-test`
- Run React with `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Development

- Prettier runs on pre-commit

## Documentation

The Input Manager follows the following rule set

```md
- When moving with Arrows, has it prioritizes the direction where clicked
- Selectable Components reside inside Containers which be be restricted with props
  -- This is so that if we wanted to create a pop-up, all it needs is props to "close down"
- If it reaches the end of a row/column, spin around to the other side
- It decides on a set of proximity rules which component to move to always based on visible area
- Popups have access to store the previous selectable state in the store so that when closed the selection goes back
```

Little bug: Found bug in gamesparks-es6.js where if the connection is higher than 2000ms to authenticate it will instantly kill the app, so slow connections/throttled) will be stuck in a forever loading screen
