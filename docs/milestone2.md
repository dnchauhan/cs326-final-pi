## **APIs**
**Login/Sign up**
 - /login/user : logs in the user
 - /signup/user : sign up the user

 **Feed**
 - /feed : loads recent recipes shared
 - /feed/load : load more recipes
 - /feed/save : save/like recipe for profile

**Recipe**
 - /recipe/search : populate page with search results
 - /recipe/load : load more results
 - /recipe/save : save recipe to profile

**People**
 - /people/search : populate page with search results
 - /people/load : load more results
 - /people/follow : follow person

**Create**
 - /create : creates a new recipe and adds it to *my recipes* as well as recent recipes (shared to feed)

**Profile**
 - /profile : load default data (bio, *saved recipes, my recipes*)
 - /profile/edit : update user bio
 - /profile/delete : delete a recipe from profile
 - /profile/unlike : unlike a recipe from profile

 **Post**
 - /post/upload : upload new recipe

**Tables (for endpoints)**
- Users
<img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/milestone2-images/userstable.PNG" width="500" height="123">
- Recipes
<img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/milestone2-images/recipetable.PNG" width="700" height="111">
- Saved
<img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/milestone2-images/savedtable.PNG" width="377" height="239">

## **CRUD**
 **Create**
 - Takes four inputs which creates a new user by adding corresponding row (*name, email, username, password, bio*) to *Users* table
 <img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/milestone2-images/signupform.PNG" width="700" height="514">

 **Read**
 - Retrieves the recipes from the database and dynamically renders them on the page, the like button has an id containing the id of the recipe in the database so each like button will be connected to each recipe. Selects a predetermined number of rows from recipes from the database and displays them dynamically.
 <img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/milestone2-images/feed.png" width="700" height="514">

 **Update**
 - Extracts the field to update from the database and changes it to the new value. 
 For example: A user can edit their bio on their profile page, update will allow to find the user through their *username* in our *Users* Table (*name, email, username, password, bio*) and update the field *bio* for that user.
 <img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/milestone2-images/UpdateBio-before.png" width="700" height="514">
 <img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/milestone2-images/UpdateBio-after.png" width="700" height="514">

**Delete**
- Extracts the *recipeID* and deletes the corresponding row from the table of concern in our database. For Example: Below we have displayed the saved recipes of a user. The user can delete a given recipe from their profile by clicking on the delete button. This will extract the recipeID of that recipe from the *Saved* (recipes) table (*username, recipeID*) in our database, by deleting the corresponding row (given the user and the recipeID) from the table.
 <img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/milestone2-images/delete-before.png" width="700" height="514">
 <img src="https://github.com/william-murphy/cs326-final-pi/blob/main/docs/milestone2-images/delete-after.png" width="700" height="514">
 
 ## **Breakdown**
- Ji: Worked on database/index.js and login/sign up/people js files
- Dhruvi: created the required tables in our postgreSQL database on heroku app, worked on feed + recipe .js/.html files, end-point structure, the milestone2 markdown, random work here and there while with team-mates during zoom meetings. 
- Will: Profile page backend and added functionality, added page to upload recipes and did backend, wrote some endpoints as well as some functions for database.js, worked on milestone2 documents

## **Heroku Application**

https://spighetti.herokuapp.com/
