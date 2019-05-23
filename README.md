

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
| POST   | `/events`     | Creates a new event.                           |
| PUT    | `/events/:id` | Edits info for the event with the provided id. |
| DELETE | `/events/:id` | Deletes event with the provided id.            |

<br>

# Data Model

![](/datamodel.png)


#### Users

---

```
{
    id: INTEGER
    fullname: STRING
    email: STRING
    username: STRING
    googleId: STRING
    password: STRING
    premiumStatus: BOOLEAN
}
```

#### Groups

---

```
{
    id: INTEGER
    joinCode: INTEGER   
    name: STRING
    user_id: INTEGER foreign key in Users table
 
}
```

#### Members

---

```
{
    id: INTEGER
    user_id: INTEGER foreign key in Users table  
    group_id: INTEGER foreign key in Groups table
  
 
}
```

#### Templates

---

```
{
    id: INTEGER
    title: STRING
    description: STRING
    startDate: DATE
    endDate: DATE
    date: DATE
    isChecked: BOOLEAN
    group_id: INTEGER foreign key in Groups table
  
 
}
```


#### Events

---

```
{
    id: INTEGER
    title: STRING
    description: STRING
    repeat: BOOLEAN
    date: DATE
    startTime: STRING
    endTime: STRING
    template_id: INTEGER foreign key in Templates table
  
 
}
```


## Actions

#### Users

`find()` --> Returns all users

`findById(id)` --> Returns single user by id

`findByGoogleId(profileId)` --> Returns user's googleId

`add(user)` --> Creates new user

`remove(id)` --> Deletes user by id

`getUserGroups(userID)` --> Returns groups for user

`addGroupToUser(group)` --> Adds group to single user

`function update(id, updates)` --> Edits user's info



#### Groups

`find()` --> Returns all groups

`findById(id)` --> Returns single group by id

`add(group)` --> Creates new group

`getBy(select)` --> Returns group by join code

`remove(id)` --> Deletes group by id

`getGroupTemplates(groupID)` --> Returns templates by group_id

`getGroupMembers(groupId)` --> Returns members by group_id

`addTemplateToGroup(template)` --> Creates new template for group

`addMember(member)` --> Creates new member

`update(id, updates)` --> Edits group's info by id

`getGroupMember(options)` --> Returns member in group


#### Members 

`find()` --> Returns all members

`remove(id)` --> Deletes single member by id

`getMembersGroups(memberId)` --> Returns groups by member's id


#### Templates 

`find()` --> Returns all templates

`findById(id)` --> Returns single template by id

`add(template)` --> Creates new template

`remove(id)` --> Deletes template by id

`update(id)` --> Edits template's info

`getTemplateEvents(templateID)` --> Returns events by template id

`addEventsToTemplates(event)` --> Creates event and adds to template

