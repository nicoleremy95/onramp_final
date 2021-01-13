# Submission Requirements
## Project Description
suP? is a newsfeed application for the modern chatter. This application was built with MERN and Typescript. 

## User Story: The user can create an account, login, and make a "sup" in the news feed. From there the user can see other news in the news feed from other users. In addition, the user can update or delete their chat. 

## Architectural Overview: 
### One to many relationship
### Each User can have many "sup" News and each "sup" News has one User 

## Data Models: 
    1) users
    2) news(or suP? news) 

## Components (components are capitalized and API calls are in parenthesis)
    1) App.tsx (getCurrentUser)
        A) Pages 
            i. Home (getCurrentUser)
                a. Scroll
                b. Sup (getCurrentUser, login, postNews) 
                c. News (getCurrentUser, updateNews, deleteNews)
            ii. Login
                a. LoginForm (login)
            iii. User
                a. UserComp (signUp)
        B) Components 
        C) AppBar (getCurrentUser) and Footer 

-- High Level File Structure 
    1) client
        A) public
            i. index.html
        B) src
            i. components
                a. Appbar
                b. Footer
                c. LoginForm
                d. News
                e. Scroll
                f. Sup
                g. UserComp
            ii. pages
                a. Account 
                b. Home
                c. Login
                d. User 
            iii. utils
                a. API.tsx 
            iv. App.tsx
            v. Index.tsx
    2) server 
        A) models
            i. index.js (compiles information from items ii and iii)
            ii. news.js
            iii. user.js 
        B) app.js 

-- Architectural Design Pattern : I used the MVC pattern for my project. The Model(M) are my models in the server-> models files. The Controller(C) are my routes, logic, data transformations, processing and API calls in the server-> app.js and client-> src-> utils-> API.tsx. The Views(V) are where all of my client/presentation side information in the client folders as components. 


- Screenshots of each View and descriptions of the overall user flow as well as any place that you made distinct design decisions.  (Screenshots can be taken via any screenshot capture application or native methods).


## Project Requirements
Please list examples of how your project meets the following requirements below:
- [ ] Use a modern JS Library/Framework like React, Angular, etc. We suggest using React.js.
    My project uses React.js.

- [ ] Create an application that can be interacted with in a minimum of three different ways by the user.
    A user can create an account, login/logout, create, delete, and update your "sup" news. 

- [ ] The usage of a specified architectural pattern (MVC, MVP, MVVM,  etc.)
    This project uses the MVC archiectural pattern. See Architectural Design Pattern above. 

- [ ] Use of a [REST API](https://medium.com/@arteko/the-best-way-to-use-rest-apis-in-swift-95e10696c980).
    This project uses these Rest API requests: 
        1. Get: users and news 
        2. Create: users and news
        3. Put: news
        4. Delete: news

- [ ] Usage of at least 5 UI components from the [material-ui/@core](https://material-ui.com/) library (if you are not using React, a comparable UI library is acceptable)
    This project uses these Material UI components:
        1. Appbar
        2. TextFields
        3. Icons 
        4. Styles (ex. makeStyles, Theme, createStyles)
        5. Core (ex. Typography, Container, Grid, Button)
        6. 

- [ ] An example of a reusable UI component that you have created and used in the app. This should be different than the 5 UI components from the vendor library.
    This project I created these reusable components:
        1. Footer
        2. LoginForm
