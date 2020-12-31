# Student Records
### [Back to Readme](../README.md)

Let's start with a design outline.

1. Obviously, we are going to need to store data
  - [ ] Flat File Storage
    > Since we are not using PHP or Node to create a full service, this is not an option
  - [ ] MySQL -o- MongoDB
    > Maybe in a future refactor for enterprise scale
  - [ ] localStorage
    > Simple to use, but size limitations indicate it may not work so good
  - [x] indexedDB
    > A bit more overhead than localStorage, but better size range
  - CONCOLUSION: indexedDB for local use, and a method of bulk storage, likely MongoDB, elsewhere

2. 