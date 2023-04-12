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
17. Error handling (local error handling)
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
    * add owner to model
    * redirect
6. Setup catalog 
    * change path in main
    * make new action in controller
    * add exports getAll
    * use export in action
    * setup hbs in view / check if item is found
7. Setup details page
    * Make action
    * get item with itemId
    * check if user is owner
    * check if user used and action - "buy"
    * give the values to render
    * setup all buttons
    * 
8. Setup item action
    * Change routes in details
    * Add ObjectId model (object in array)
    * Make new action
    * authenticate
    * service with userId, itemId
    * redirect
9. Setup edit
    * change paths in details and method 
    * change names with correct one
    * add actions in controller
    * authenticate actions
    * check if owner in post action
    * get item data from req.body
    * create edit service with (itemId, itemData);
    * findByIdAndUpdate(itemId, itemData);
    * redirect 
    * get item and give it to render in get action
    * change value with item value in hbs
10. Setup delete
    * make action with itemId
    * authenticate
    * make service findByIdAndDelete
    * redirect
11. Error handling
    * Change messages in model

    

