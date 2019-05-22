

# Section Calendar Template Manager 

## Backend 

#### Backend Deployment: https://calendrserver.herokuapp.com <br>

#### User Routes

| Method | Endpoint            | Description                                            |
| ------ | ------------------- | ------------------------------------------------------ |
| GET    | `/users`            | Returns info for all users.                            |
| GET    | `/users/:id`        | Returns the user with the provided id.                 |
| GET    | `/users/:id/groups` | Returns all groups for the user with the provided id.  |
| POST   | `/users/:id/groups` | Creates a new group for the user with the provided id. |
| POST   | `/users`            | Creates a new user                                     |
| DELETE | `/users/:id`        | Deletes user with the provided id                      |

#### Group Routes

| Method | Endpoint                | Description                                               |
| ------ | ----------------------- | --------------------------------------------------------- |
| GET    | `/groups`               | Returns info for all groups.                              |
| GET    | `/groups/:id`           | Returns the group with the provided id.                   |
| GET    | `/groups/:id/templates` | Returns all templates for group with the provided id.     |
| POST   | `/groups`               | Creates a new group.                                      |
| POST   | `/groups/:id/templates` | Creates a new template for the group with the provided id |
| PUT    | `/groups/:id`           | Edits info for the group with the provided id.            |
| DELETE | `/groups/:id`           | Deletes user with the provided id                         |