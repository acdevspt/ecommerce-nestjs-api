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


## API Documentation

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


## Database Diagram

![Database Diagram](https://i.imgur.com/CRyUg5I.png)