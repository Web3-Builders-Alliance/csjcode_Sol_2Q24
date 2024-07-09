# doerz-jsonserver Docs

### Why?

Substantial API development can be done initially by implementing this locally.

This speeds up the development process and allows for rapid prototyping.

I use this in conjunction with Postman to prototype and test the API endpoints.

Endpoints:
http://localhost:3003/fundingPool
http://localhost:3003/validate
http://localhost:3003/favorites
http://localhost:3003/users
http://localhost:3003/groups
http://localhost:3003/userRewards
http://localhost:3003/tasks

Full docs if needed
https://github.com/typicode/json-server

### Getting Started

```sh
npm install -g json-server
```

json-server --watch db.json --port 3003


To change the port to `3003`, you can specify the port number when you start the `json-server`. Here’s how you can do it:

### Step 1: Install `json-server`

If you haven’t already installed `json-server`, you can do so by running:

```sh
npm install -g json-server
```

### Step 2: Create a JSON file

Create a file named `db.json` in your project directory with your initial data:

```json
{
  "posts": [
    { "id": 1, "title": "Hello World", "author": "John Doe" }
  ],
  "comments": [
    { "id": 1, "postId": 1, "body": "Nice post!" }
  ]
}
```

### Step 3: Start the JSON server on port 3003

In your terminal, navigate to the directory containing `db.json` and start the server on port `3003` by running:

```sh
json-server --watch db.json --port 3003
```

### Step 4: Perform a POST request to update the JSON

You can use `curl` or Postman to perform a POST request. Here’s an example using `curl` to add a new post:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"title": "New Post", "author": "Jane Doe"}' http://localhost:3003/posts
```

### Step 5: Verify the changes

To verify the changes, you can perform a GET request or simply open your browser and navigate to `http://localhost:3003/posts` to see the updated list of posts.

### Example Usage

Here's a summary of the steps and commands:

1. Install `json-server`:

   ```sh
   npm install -g json-server
   ```

2. Create `db.json` with initial data:

   ```json
   {
     "posts": [
       { "id": 1, "title": "Hello World", "author": "John Doe" }
     ],
     "comments": [
       { "id": 1, "postId": 1, "body": "Nice post!" }
     ]
   }
   ```

3. Start the server on port `3003`:

   ```sh
   json-server --watch db.json --port 3003
   ```

4. Add a new post using `curl`:

   ```sh
   curl -X POST -H "Content-Type: application/json" -d '{"title": "New Post", "author": "Jane Doe"}' http://localhost:3003/posts
   ```

5. Check the updated data at `http://localhost:3003/posts`.

This will serve your JSON data on port `3003` and allow you to update it with POST requests.

   ```sh
   curl -X POST -H "Content-Type: application/json" -d '{"title": "New Post", "author": "Jane Doe"}' http://localhost:3003/tasks
   ```


```sh

curl --location 'http://localhost:3003/tasks'

```


   ```js

       {
        "id": "2e8a13b8-2e8d-6cf1-8a71-1dcb5c3f3f1f",
        "dateCreated": 1672531200,
        "dateModified": 1675219600,
        "dateExpired": 1704067200,
        "rewardId": "07b39a18-3e70-6824-8149-6a20c614e1f6",
        "tags": [
            "Magic Eden",
            "social",
            "Facebook"
        ],
        "taskId": "TASK-8782",
        "title": "Share a project update on Facebook",
        "status": "doing",
        "label": "social",
        "rewardSize": "medium",
        "brand": "Magic Eden",
        "description": "Share a project update on Facebook for Magic Eden to engage with your audience and keep them informed about the latest developments. This task involves posting updates about your project to enhance visibility and engagement on social media.",
        "image": ""
    },

   ```

