<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).



## Documentação da API

### Sneakers

#### Add new sneaker

```http
  POST /sneakers
```

| Body   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `model_uuid` | `string` | **Mandatory**. Sneakers Model UUID |
| `description` | `string` | **Mandatory**. Sneakers Description |
| `quantity` | `integer` | **Mandatory**. Stock Quantity |
| `price` | `decimal` | **Mandatory**. Sneakers Price |


#### Get all sneakers

```http
  GET /sneakers
```

| Query   | Type      | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `brand` (optional)      | `string` | **Mandatory**. The sneakers brand name |


#### Deletes a specific sneaker

```http
  DELETE /sneakers/3e563eb4-efdd-406f-af59-d6b71a4c5c16
```

| Param   | Type      | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `sneaker_uuid`       | `string` | **Mandatory**. The sneakers uuid |

### Users

#### Add new user

```http
  POST /users
```

| Body   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `first_name` | `string` | **Mandatory**. User first name |
| `last_name` | `string` | **Mandatory**. User last name |
| `email` | `integer` | **Mandatory**. User email |
| `password` | `decimal` | **Mandatory**. User password |

#### Get all users

```http
  GET /users
```

#### Get the user orders

```http
  GET /users/3e563eb4-efdd-406f-af59-d6b71a4c5c16/orders
```

| Param   | Type      | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `user_uuid`       | `string` | **Mandatory**. The user uuid |



#### Delete a specific user

```http
  DELETE /users/3e563eb4-efdd-406f-af59-d6b71a4c5c16
```

| Param   | Type      | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `user_uuid`       | `string` | **Mandatory**. The user uuid |


### Brands

#### Add new brand

```http
  POST /sneakers/brands
```

| Body   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Mandatory**. Brand name |

#### Get all brands

```http
  GET /sneakers/brands
```

### Models

#### Add new user

```http
  POST /sneakers/models
```

| Body   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Mandatory**. Model name |
| `brand_uuid` | `string` | **Mandatory**. Brand uuid that owns the model |


#### Get all models

```http
  GET /sneakers/brands
```

#### Get the model brand

```http
  GET /sneakers/models/3e563eb4-efdd-406f-af59-d6b71a4c5c16/brand
```

| Param   | Type      | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `brand_uuid`       | `string` | **Mandatory**. Brand uuid |