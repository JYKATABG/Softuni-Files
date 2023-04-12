# Cheat Sheet

1. Initialize project
2. Install & setup express
    * add routes
    * add body parser
    * add static route
3. Add view engine: express-handlebars
    * register with express
    * add views folder
    * add home template 
    * add main layout
    * add partial template folder
4. Add home controller
    * add controller to routes
5. Connect database
    * set strict query / deprecation warning
6. Authentication
    * fix html links in layout
    * add auth controller
    * add reigster page
    * add login page
7. Add user model
8. Add auth service
9. Install bcrypt and cookie-parser and configure
10. Register user
    * validate repeat password
    * check if user exists
    * use bcrypt to hash password
11. Login user
    * check if user exists
    * check if password is valid
12. Generate jwt token
    * OPTIONAL: use util.promisify to use async
    * generate token with payload
    * add token to cookie
13. Add authentication middleware
    * add decoded token to request
    * use authentication middleware
14. Logout
15. Authorization middleware
16. Dynamic navigation
17. Error handling (local error handling) - error container
18. Add error notification to main layout
19. Login automatically after register
20. Parse errors

# Functional stage

1. Add all needed resources (views, etc..)
2. Fix navigation
    * fix routes
3. Add new model for specific item
 * add schema
 * add owner if needed
4. Add new controller for items
    * add controller in router
5. Add create page
    * change method
    * set name's
    * change route in hbs
    * render create page
    * authenticate page
    * create service ||always add try catch in controller
    * +ownerId
    * redirect
6. Setup catalog 
    * change path in main
    * make new action in controller
    * add exports getAll
    * use export in action
    * setup hbs in view / check if item is found
7. Setup details page
8. Setup item action - object in array
9. Setup edit
    * setup paths 
    * make actions
    * authenticate actions
    * get item
    * redirect 
10. Setup delete
    * make action
    * make service

    

