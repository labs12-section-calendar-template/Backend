

# Section Calendar Template Manager 

## Backend 

#### Backend Deployment: https://calendrserver.herokuapp.com <br>

### User Routes

| Method | Endpoint            | Description                                            |
| ------ | ------------------- | ------------------------------------------------------ |
| GET    | `/users`            | Returns info for all users.                            |
| GET    | `/users/:id`        | Returns the user with the provided id.                 |
| GET    | `/users/:id/groups` | Returns all groups for the user with the provided id.  |
| POST   | `/users/:id/groups` | Creates a new group for the user with the provided id. |
| POST   | `/users`            | Creates a new user                                     |
| DELETE | `/users/:id`        | Deletes user with the provided id                      |

### Group Routes

| Method | Endpoint                | Description                                               |
| ------ | ----------------------- | --------------------------------------------------------- |
| GET    | `/groups`               | Returns info for all groups.                              |
| GET    | `/groups/:id`           | Returns the group with the provided id.                   |
| GET    | `/groups/:id/templates` | Returns all templates for group with the provided id.     |
| POST   | `/groups`               | Creates a new group.                                      |
| POST   | `/groups/:id/templates` | Creates a new template for the group with the provided id |
| PUT    | `/groups/:id`           | Edits info for the group with the provided id.            |
| DELETE | `/groups/:id`           | Deletes user with the provided id                         |


### Member Routes

| Method | Endpoint              | Description                                     |
| ------ | --------------------- | ----------------------------------------------- |
| GET    | `/members`            | Returns info for all members.                   |
| GET    | `/members/:id/groups` | Returns groups for member with the provided id. |
| DELETE | `/members/delete/:id` | Deletes member with the provided id             |

### Template Routes

| Method | Endpoint                | Description                                                |
| ------ | ----------------------- | ---------------------------------------------------------- |
| GET    | `/templates`            | Returns info for all templates.                            |
| GET    | `/templates/:id`        | Returns the template with the provided id.                 |
| GET    | `/templates/:id/events` | Returns all events for template with the provided id.      |
| POST   | `/templates`            | Creates a new template.                                    |
| POST   | `/templates/:id/events` | Creates a new event for the template with the provided id. |
| PUT    | `/templates/:id`        | Edits info for the template with the provided id.          |
| DELETE | `/templates/:id`        | Deletes template with the provided id                      |

### Event Routes

| Method | Endpoint      | Description                                    |
| ------ | ------------- | ---------------------------------------------- |
| GET    | `/events`     | Returns info for all events.                   |
| GET    | `/events/:id` | Returns the event with the provided id.        |
| POST   | `/events`     | Creates a new event                            |
| PUT    | `/events/:id` | Edits info for the event with the provided id. |
| DELETE | `/events/:id` | Deletes event with the provided id.            |