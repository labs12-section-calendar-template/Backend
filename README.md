

# Section Calendar Template Manager 

## Backend 

#### Backend Deployment: https://calendrserver.herokuapp.com <br>

#### Users Routes

| Method | Endpoint            | Description                                            |
| ------ | ------------------- | ------------------------------------------------------ |
| GET    | `/users`            | Returns info for all users.                            |
| GET    | `/users/:id`        | Returns only the user with the provided id.            |
| GET    | `/users/:id/groups` | Returns all groups for the user with the provided id.  |
| POST   | `/users/:id/groups` | Creates a new group for the user with the provided id. |
| POST   | `/users`            | Creates a new user                                     |
| DELETE | `/users/:id`        | Deletes user with the provided id                      |

