# RINDER REST API

## Description

This is a the backend repository for the React application `RINDER`.

---

## Instructions

When cloning the project, change the <code>sample.env</code> file name for <code>.env</code>. The project will run on **PORT 8000**.

Then, run:

```bash
npm install
```

## Scripts

- To start the project run:

```bash
npm run start
```

- To start the project in development mode, run:

```bash
npm run dev
```

- To seed the database, run:

```bash
npm run seed
```

---

## Models

### User

Users in the database have the following properties:

```js
{
  "username": String,
  "email": String,
  "hashedPassword": String,
  "avatar": String,
  "place": String,
  "rolling": String,
  "games": String,
  "description": String
}
```

### Bulletin

Bulletins in the database have the following properties:

```js
{
  "userId": Schema.Types.ObjectId,
  ref: 'User',
  "username": String,
  "image": String,
  "game": String,
  "campaign": String,
  "role": String,
  "modality": String,
  "place": String,
  "description": String,
}
```

### Pointed

Pointed in the database have the following properties:

```js
{
  "userId": Schema.Types.ObjectId,
  ref: 'User'
  "username": String,
  "bulletinId": Schema.Types.ObjectId,
  ref: 'Bulletin'
}
```

---

## API endpoints and usage

| Action                 | Method | Endpoint                    | Req.body                                                                        | Private/Public |
| ---------------------- | ------ | --------------------------- | ------------------------------------------------------------------------------- | -------------- |
| SIGN UP user           | POST   | /auth/signup                | { username, email, password }                                                   | Public         |
| LOG IN user            | POST   | /auth/login                 | { email, password }                                                             | Public         |
| GET logged in user     | GET    | /auth/me                    |                                                                                 | Private        |
| GET All bulletins      | GET    | /bulletins                  |                                                                                 | Private        |
| GET One bulletin       | GET    | bulletins/:bulletinId       |                                                                                 | Private        |
| GET User bulletins     | GET    | bulletins/:userId           |                                                                                 | Private        |
| POST New bulletin      | POST   | /bulletins/new              | { userId, username, image, game, campaign, role, modality, place, description } | Private        |
| PUT Edit a bulletin    | PUT    | /bulletins/edit/:bulletinId |                                                                                 | Private        |
| DELETE Delete bulletin | DELETE | /bulletins/:bulletinId      |                                                                                 | Private        |
| GET Pointed List       | GET    | /pointed/list/:bulletinId   |                                                                                 | Private        |
| GET User Pointed       | GET    | /pointed/user/:userId       |                                                                                 | Private        |
| POST Point bulletin    | POST   | /pointed/:bulletinId        |                                                                                 | Private        |
| DELETE Delete point    | DELETE | /:bulletin                  | { userId }                                                                      | Private        |
| GET Profile view       | GET    | /profile/:userId            |                                                                                 | Private        |
| PUT Edit profile       | GET    | /profile/edit/:userId       | { avatar, place, rolling, games, description }                                  | Private        |
| GET view other profile | GET    | /profile/other/:userId      |                                                                                 | Private        |
| POST Search username   | POST   | /searchname                 | { username }                                                                    | Private        |

---

## Useful links

- [Presentation slides](https://slides.com/estefaniaegeacalcena/deck-86220e)
- [Frontend repository](https://github.com/ZillionTrout/RINDER-Frontend)
- [Frontend deploy](https://rollrinder.netlify.app/)
- [Deployed REST API](https://rinder.fly.dev/)
