# TODO API

### BASE URL: https://yazilim-koyu-todo-api.herokuapp.com/

`GET /todos/list`

### Response
    HTTP/1.1 200 OK
    [
        {
            "_id": "61278b2f60fbcd99cc4dd444",
            "title": "test",
            "listId": "23278b2f60fbcd99cc4dd444",
            "date": "2021-07-12T00:00:00.000Z",
            "completed": true,
            "__v": 0
        }
    ]

`GET /todos/:id`

### Response
    HTTP/1.1 200 OK
    {
        "_id": "61278b2f60fbcd99cc4dd444",
        "title": "test",
        "listId": "23278b2f60fbcd99cc4dd444",
        "date": "2021-07-12T00:00:00.000Z","
        "completed": true,
        "__v": 0
    }

`POST /todos/`

### Request
    {
        "title": "test",
        "listId": "23278b2f60fbcd99cc4dd444",
        "date": "2021-07-12T00:00:00.000Z",
        "completed": true
    }


### Response
    HTTP/1.1 200 OK
    {
        "_id": "61278b2f60fbcd99cc4dd444",
        "title": "test",
        "date": "2021-07-12T00:00:00.000Z",
        "completed": true,
        "__v": 0
    }

`PUT /todos/:id`

### Request
    {
        "title": "test",
        "listId": "23278b2f60fbcd99cc4dd444",
        "date": "2021-07-12T00:00:00.000Z",
        "completed": true
    }


### Response
    HTTP/1.1 200 OK
    {
        success: true
    }

`DELETE /todos/:id`

### Response
    HTTP/1.1 200 OK
    {
        success: true
    }

NOTES: 
* Same routes applicable for `/lists` too
* It has auto-deploy when pushed or merged anything to `main` branch
