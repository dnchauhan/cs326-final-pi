# **Team Name:** pi

## **Application Name:** S(pi)ghetti & Meatballs

### **Semester:** Fall 2020

**Overview:** Our project idea is to make a space for users to have their own personal recipe library. The application will allow users to create their own food recipes and look at other users' recipes as well. Users will be able to like and save food recipes from the feed to their own profile as well as search up specific recipes from the database. The data that will come with recipes include data for recipe names, ingredients, recipe image, and user likes. Users can also find other users by their username and can interact with them by viewing their profiles and liking recipes.

**Team Overview:**

-Dhruvi Chauhan, dnchauhan
-Ji Ye, jye6013
-William Murphy, william-murphy 

**User Interface:**

 - Login/Signup: When the user first goes on the website, it will take the user to the login page. Before interacting further, the user should login with their account or sign up for a new account.

<img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/final-images/login.JPG" width="700" height="310">

<img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/final-images/signup.JPG" width="700" height="258">

 - Feed: This page is the application's feed page where the user can see the most recent recipes shared by users. They can interact with the recipe posts by saving it to their profile.

<img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/final-images/feed.JPG" width="700" height="319">

 - Recipes: The user can search for recipes and save it to their profile.

<img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/final-images/recipes.JPG" width="700" height="269">

 - People: This page allows the user to find people by username.

 <img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/final-images/people.JPG" width="700" height="278">

 - Post: This page allows the user to post a recipe of their own along with a picture. This will show up on the 'My recipe' section of user's profile.

<img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/final-images/post.JPG" width="700" height="329">

 - Profile: This is the profile page where the user can edit their avatar as well as their bio. They can also see recipes saved from searching for recipes or liked from the feed page on the Liked Recipes tab. There is also another tab, My Recipes, where the user can see the recipes they created themselves.

<img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/final-images/profile-my-recipes.JPG" width="700" height="327">

<img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/final-images/profile-liked.JPG" width="700" height="312">

 - Logout: Lets the user log out from the application.

**APIs:**

Login/Sign up

 - /login/user : logs in the user
 - /signup/user : sign up the user

 Feed

 - /getFeed : loads recent recipes shared
 - /feed/like : load more recipes

Recipe

 - /recipe/search/:input : populate page with search results
 - /recipe/save : save recipe to profile

People

 - /people/search/:input : populate page with search results

Post

 - /post/upload : creates a new recipe and adds it to *my recipes* as well as recent recipes (shared to feed)

Profile

 - /getProfile : load default data (bio, *saved recipes, my recipes*)
 - /profile/edit : update user bio
 - /profile/edit-pic : update user's profile picture
 - /profile/delete : delete a recipe from profile
 - /profile/unlike : unlike a recipe from profile

 Authentication

- /login : Log into the account
- /logout : Log out of account
- /register : Signup for an account

**Database:** 

Users table
| Column       | Data Type | Description                         |
|--------------|-----------|-------------------------------------|
| username     | String    | User’s username (primary key)       |
| email        | String    | The user’s login email              |
| salt         | String    | The salt value for password   	     |
| hash         | String    | The hash value for password   	     |
| bio          | String    | The bio user has for profile  	     |
| profile_pic  | String    | The imgur link to profile pic 	     |


Recipes table
| Column       | Data Type  | Description                               |
|--------------|------------|-------------------------------------------|
| recipe_id    | integer    | The unique id of the recipe (primary key) |
| username     | integer    | The username of user (unique identifier)  |
| recipe_name  | String     | The name of the recipe                    |
| recipe_desc  | String     | The description of the recipe             |
| recipe_likes | integer    | The number of likes the recipe has        |
| recipe_pic   | String     | The link to the image of the recipe       |


Liked table
| Column       | Data Type | Description                               |
|--------------|-----------|-------------------------------------------|
| recipe_id    | integer   | The id for recipe (unique)                |
| username     | string    | The username of user (unique identifier)  |

**URL Routes/Mappings:** 
<br /><br />GET /
- takes the user to the login page

GET /login
- takes the user to the login page

GET /signup
- takes the user to the signup page

GET /feed
- takes the user to the feed page
- can only be interacted with logged in users

GET /recipe
- takes the user to the recipe page
- can only be interacted with logged in users

GET /post 
- takes the user to the post page
- can only be interacted with logged in users

GET /people
- takes the user to the people page
- can only be interacted with logged in users

GET /profile
- takes the user to the profile page
- can only be interacted with logged in users

GET /logout
- logs the user out and takes them to the login page

**Authentication/Authorization:** 

When logging into the application, the application will take the password that the user entered and decrypt the hash and salt together based on the user to check if it matches the password. If it is successful, it redirects the user to the next route. If not, it goes back to the login page. Users can only interact with the data loaded in the UI in the application only if they are logged in. With the logout feature, the application will remove the user from the session and if the user wants to use the application, they will have to login to authenticate again.

**Division of Labor:** 

- Dhruvi
  - Milestone 1: Worked on wireframes & HTML/CSS for feed and recipe lookup pages.
  - Milestone 2: Worked on feed + recipe .js/.html files, end-point structure, the milestone2 markdown
  - Milestone 3: created the datatables, worked on Worked on database + index.js, Milestone3.md
  - final: debugging, modified SQL queries to increase functionality, final.md

- Ji
  - Milestone 1: Worked on wireframes & HTML/CSS for login/sign up and people pages.
  - Milestone 2: Worked on database/index.js and login/sign up/people js files
  - Milestone 3: Worked on database/index.js, implementing login/signup to passport.js
  - final: debugging

- Will
  - Milestone 1: Worked on wireframes & HTML/CSS for profile page.
  - Milestone 2: Profile page backend and added functionality, added page to upload recipes and did backend, wrote some endpoints as well as some functions for database.js, worked on milestone2 documents
  - Milestone 3: Profile and Post pages, some database functions, image uploading
  - final: debugging

**Conclusion:**

 Our team's experience working on this project was an emotional rollercoaster filled with highs and lows, victories and failures, and breakthroughs and setbacks. There were many times that we thought all hope was lost, only to have a 2 a.m. programming epiphany that would give us hope of a brighter tomorrow. Despite the numerous frustrating defeats our team faced, we persevered, and eventually had an application resembling the vision we dreamed of when we first started this journey. Along the way we learned many valuable lessons, including but not limited to an increased understanding of the github workflow, the magic of database queries, front-end design, enhanced skills in javascript as well as back-end functionality in Node. It seems like such a long time ago when we were first starting this project, how young and naive we seemed. If we could ride the wrinkles of time to go back and bestow wisdom upon ourselves before we started this project, we would have told ourselves to meet more consistently, ask for help from the TAs earlier on in the process, as well as bugfix sooner and more often during the development process.