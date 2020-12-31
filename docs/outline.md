# Student Records
### [Back to Readme](../README.md)

Let's start with a design outline.

1. Obviously, we are going to need to store data
     - :x: Flat File Storage
    > Since we are not using PHP or Node to create a full service, this is not an option
     - :x: MySQL -o- MongoDB
    > Maybe in a future refactor for enterprise scale
     - :x: localStorage
    > Simple to use, but size limitations indicate it may not work so good
     - :heavy_check_mark: indexedDB
    > A bit more overhead than localStorage, but better size range
  - CONCLUSION: indexedDB for local use, and a method of bulk storage, likely MongoDB, elsewhere

2. Navigation Concerns:  
  Alright, we are aiming for a single page, so all of pieces will have to masked, to be displayed as needed. This will require a panel system.  
  So, [Here](https://linen-ubiquitous-scraper.glitch.me/) is a link to the initial proposed view.
