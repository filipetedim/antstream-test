# Antstream Test - NodeJS API

## Table of Contents

- [Install](#install)
- [Run](#run)
- [Database](#database)
- [Development](#development)
- [Documentation](#documentation)

## Install

- Database is hosted under MongoDB Atlas service, [explanation below](#Database)
- Move to api folder with `cd api`
- Install dependencies with `npm install`

## Run

- Move to api folder with `cd api`
- Run nodemon with `npm run dev`

## Database

Decided to use a cloud service instead of a local instance to avoid issues when installing in different Operating Systems.
MongoDB Atlas has a free forever tier sandbox that fits perfectly.

## Development

- Prettier runs on pre-commit

## Documentation

For the sake of demonstration:

- Recommended Games can only be 1x1, 2x1, 3x1
- New Games can only be 2x2
- Trending Games can be 1x2
- All Games can only be 1x1
