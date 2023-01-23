# DevCamper API

> Backend API for devcamper application, which is a bootcamp directory website

## Usage 

Rename "config/config.env.env" to "config/config.env" and update the value/settings to your owen

## Install Dependencies 
```
npm start
```

## Run App
```
# Run in dev mode 
npm run dev

# run in Production mode 
npm start
```


# API

**Backend API for the DevCamper Application to manage bootcamps, courses, reviews, users and authentication.**

<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->


## Endpoints

* [Bootcamps](#bootcamps)
    1. [Get All Bootcamps](#1-get-all-bootcamps)
    1. [Get Single Bootcamps](#2-get-single-bootcamps)
    1. [Create New Bootcamp](#3-create-new-bootcamp)
    1. [Update Bootcamp](#4-update-bootcamp)
    1. [Delete Bootcamp](#5-delete-bootcamp)
    1. [Upload Photo](#6-upload-photo)
* [Courses](#courses)
    1. [Get All Courses](#1-get-all-courses)
    1. [Get  Courses for Bootcamp](#2-get--courses-for-bootcamp)
    1. [Get Single Course](#3-get-single-course)
    1. [Create Bootcamp Course](#4-create-bootcamp-course)
    1. [Update Course](#5-update-course)
    1. [Delete Course](#6-delete-course)
* [Authentication](#authentication)
    1. [Register User](#1-register-user)
    1. [Login User](#2-login-user)
    1. [Get Logged in User Via Token](#3-get-logged-in-user-via-token)
    1. [Forgot Password](#4-forgot-password)
    1. [Reset Password](#5-reset-password)
    1. [Update User Details](#6-update-user-details)
    1. [Logout User](#7-logout-user)
* [Users](#users)
    1. [Get All Users](#1-get-all-users)
    1. [Update Password](#2-update-password)
    1. [Get Single User](#3-get-single-user)
    1. [Create User](#4-create-user)
    1. [Update  User](#5-update--user)
    1. [Delete  User](#6-delete--user)
* [Reviews](#reviews)
    1. [Get All Reviews](#1-get-all-reviews)
    1. [Get Reviews For Bootcamps](#2-get-reviews-for-bootcamps)
    1. [Get Single Reviews](#3-get-single-reviews)
    1. [Add Review For Bootcamp](#4-add-review-for-bootcamp)
    1. [Update Review](#5-update-review)
    1. [Delete Review](#6-delete-review)

--------



## Bootcamps

**Bootcamps CRUD Functionality.**



### 1. Get All Bootcamps


Fetch all bootcamps from database. Includes pagination, filtering, etc


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/bootcamps
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
|  |  |  |



### 2. Get Single Bootcamps


Get single bootcamp by ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a037b292f5f8ceff787
```



### 3. Create New Bootcamp


Add new bootcamp to database. Must be authenticated and must be publisher or admin.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
		"name": "Test Bootcamp",
		"description": "Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer",
		"website": "https://devworks.com",
		"phone": "(111) 111-1111",
		"email": "enroll@devworks.com",
		"address": "233 Bay State Rd Boston MA 02215",
		"careers": ["Web Development", "UI/UX", "Business"],
		"housing": true,
		"jobAssistance": true,
		"jobGuarantee": false,
		"acceptGi": true
}
```



### 4. Update Bootcamp


Update single bootcamp in database.


***Endpoint:***

```bash
Method: PUT
Type: 
URL: {{URL}}/api/v1/bootcamps/1
```



### 5. Delete Bootcamp


Delete bootcamp from database


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/bootcamps/63c68e1e6d52721b9c4e5d57
```



### 6. Upload Photo


Route to upload a bootcamp photo


***Endpoint:***

```bash
Method: PUT
Type: FORMDATA
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/photo
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| file |  |  |



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| f |  |  |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| file |  |  |



## Courses

Create, read, update and delete courses



### 1. Get All Courses


Get all courses in database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| page | 2 |  |
| limit | 2 |  |



### 2. Get  Courses for Bootcamp


Get the spacific courses for a bootcamp


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a037b292f5f8ceff787/courses
```



### 3. Get Single Course


Get a single course by its ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```



### 4. Create Bootcamp Course


Create a course for a spacific bootcamp.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/63c7832169393e1d6a15cbef/courses/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
        "title": "Full Stack Web Development 2",
		"description": "In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB",
		"weeks": 12,
		"tuition": 13000,
		"minimumSkill": "intermediate",
		"scholarhipsAvailable": true
}
```



### 5. Update Course


Update Courses in database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/courses/63c790a4d12eeac0cbfa8e84
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "tuition": 13000,
    "minimumSkill": "advanced"
}
```



### 6. Delete Course


Remove Course from Database


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/courses/63c790a4d12eeac0cbfa8e84
```



## Authentication

Routes for user authentication including register, login, reset password, etc



### 1. Register User


Add user to database with encrypted password


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
        "name": "Publisher Account",
		"email": "publisher@gmail.com",
		"role": "publisher",
		"password": "123456"
}
```



### 2. Login User



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
		"email":"publisher@gmail.com",
		"password": "123456"
}
```



### 3. Get Logged in User Via Token



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/auth/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 4. Forgot Password


Generate password token and send email


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/forgotpassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "email":"admin@gmail.com"
}
```



### 5. Reset Password


Reset user password using token


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/resetpassword/96285660fffa9797a00ccc6f383e8cb4f9dd8539
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "password":"1234567"
}
```



### 6. Update User Details


Update logged in user name and email


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatedetails
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "email": "kevin@gmail.com",
    "name": "Kevin Smith"
}
```



### 7. Logout User


Clear Token Cookie


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/auth/logout
```



## Users

CRUD Functionality for users only available to admin



### 1. Get All Users


Get all users(Admin)


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/users
```



### 2. Update Password


Update logged in user password, send in the body currentPassword and newPassword 


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatepassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "currentPassword":"1234567",
    "newPassword":"123456"
}
```



### 3. Get Single User


Get single user by id (admin)


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/users/5c8a1d5b0190b214360dc040
```



### 4. Create User


Create user to database (admin)


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "name": "Harik Kensing",
        "email": "harik@gmail.com",
        "role": "publisher",
        "password": "123456"
}
```



### 5. Update  User


Update user in database (admin)


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/users/63c90a364868debe4670bfa7
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "name": "Harik Stark"
}
```



### 6. Delete  User


Delete user from Database (admin)


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/users/63c90a364868debe4670bfa7
```



## Reviews

Manage Course Reviews



### 1. Get All Reviews


Get all reviews from database and populate with bootcamp, name, and description


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews
```



### 2. Get Reviews For Bootcamps


Fetch the reviews for a spacific bootcamp


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/reviews
```



### 3. Get Single Reviews


Fetch a review from database by id and populate Bootcamp name and description


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews/5d7a514b5d2c12c7449be027
```



### 4. Add Review For Bootcamp


Insert review for a spacific bootcamp


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "title": "Nice Bootcamp",
    "text": "I Learned a Lot",
    "rating": 9
}
```



### 5. Update Review


Update Review in Database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/reviews/63ca3a349c8e30d0d50b3a5c
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
    "title": "Had Fun!"

}
```



### 6. Delete Review


Remove review from database


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/reviews/63ca3a349c8e30d0d50b3a5c
```



---
[Back to top](#devcamper-api)
