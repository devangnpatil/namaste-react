- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      - Img
-      - Name of Res, Star Rating, Cuisine, etc, Delivery Time
- Footer
- - Copyright
- - Links
- - Address

- Default Export / Import
  export default Component
  import Component from 'path'

- Named Export/Import
  export const Component
  import {Component} from 'path'

#Routing in web apps

1. Client side routing, /, /about, /contact
2. Server side routing, /api/signin, /api/signup, /api/create,

[699105](http://localhost:1234/restaturants/699105)

#Redux toolkit

- Install library @reduxjs/toolkit and react-redux
- Build our store
- Cnnect our store to our app
- Slice (cartSlice)
- dispactch (action)
- selector

# Types of testing (Developer)-

- Unit Testing
  To test react component in isolation
- Integration Testing
  Testing of integration of components. components talks to each other
- End to End testing
  - User journey
  - cypress, selenium

# Setting up testing in out app

- install react testing library
- install jest
- install babel dependancies
- configure babel
- jest configuration
  npx jest --init
  install npm jstdom
