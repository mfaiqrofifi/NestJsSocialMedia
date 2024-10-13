# NestJS CRUD API with Relationships

This project is a simple CRUD API built with NestJS and TypeORM, which demonstrates how to manage relationships between entities (User and Post). Each user can have multiple posts, and posts are related to users.

## Project Structure

```plaintext
src/
├── user/
│   ├── user.controller.ts
│   ├── user.entity.ts
│   ├── user.module.ts
│   └── user.service.ts
├── post/
│   ├── post.controller.ts
│   ├── post.entity.ts
│   ├── post.module.ts
│   └── post.service.ts
├── app.controller.ts
├── app.module.ts
└── app.service.ts

```

### Installation

To install this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/yourprojectname.git
    cd yourprojectname
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up the MySQL database. Update `app.module.ts` with your database credentials:
    ```typescript
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'your-username',
      password: 'your-password',
      database: 'nestjs_crud',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    })
    ```

4. Run the application:
    ```bash
    npm run start
    ```

The API will be running on `http://localhost:3000`.

### API Endpoints

#### Users

- **Create User**

  - **Method**: `POST`
  - **URL**: `/users`
  - **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
    ```

- **Get All Users**

  - **Method**: `GET`
  - **URL**: `/users`
  - **Response**:
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "posts": []
      }
    ]
    ```

- **Get User By ID**

  - **Method**: `GET`
  - **URL**: `/users/:id`
  - **Response**:
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "posts": []
    }
    ```

#### Posts

- **Create Post**

  - **Method**: `POST`
  - **URL**: `/posts`
  - **Request Body**:
    ```json
    {
      "title": "My First Post",
      "content": "This is the content of my first post",
      "userId": 1
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "title": "My First Post",
      "content": "This is the content of my first post",
      "user": {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com"
      }
    }
    ```

- **Get All Posts**

  - **Method**: `GET`
  - **URL**: `/posts`
  - **Response**:
    ```json
    [
      {
        "id": 1,
        "title": "My First Post",
        "content": "This is the content of my first post",
        "user": {
          "id": 1,
          "name": "John Doe",
          "email": "john.doe@example.com"
        }
      }
    ]
    ```

- **Get Post By ID**

  - **Method**: `GET`
  - **URL**: `/posts/:id`
  - **Response**:
    ```json
    {
      "id": 1,
      "title": "My First Post",
      "content": "This is the content of my first post",
      "user": {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com"
      }
    }
    ```

### Running Tests

You can run the tests with:

```bash
npm run test
