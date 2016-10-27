# Droopy File Database

A simple JSON flat file database. Written on top of [lowdb](https://www.npmjs.com/package/lowdb)

## Installation
```
npm install droopy-filedb
```

## Create a Database
The default filepath is `db.json`
```javascript
var db = require("droopy-filedb").create();
```

You can pass in your own filepath. The folder must already exist, the file doesn't.
```javascript
var db = require("droopy-filedb").create('./appdata/data.json');
```

## Get a Collection
When you ask for a collection, it will be created if it doesn't already exist.
```javascript
// Get the users collection
var users = db.users;
// Get the 'device123-settings' collection
var settings = db['device123-settings'];
```
## Working with Collections

### Add an Item 
`set(key, value)`

```javascript
db.users.set("apetersen", { login: "apetersen", display: "Andrew Petersen" });
```

### Retrieve an Item
`get(key)`

```javascript
var user = db.users.get("apetersen"); 
// { login: "apetersen", display: "Andrew Petersen" }
```

### Get all Items as an Array
`items`

```javascript
var users = db.users.items
// [{ 
//     key: "apetersen, 
//     value: { login: "apetersen", display: "Andrew Petersen" } 
// }, {
//     key: "jsmith",
//     value: { login: "jsmith", display: "John Smith" }
// }]
```

### Get all Items as an Object
`.toObj()`

```javascript
var users = db.users.toObj();
// { 
//     "apetersen": { 
//         login: "apetersen", 
//         display: "Andrew Petersen" 
//     }, 
//     "jsmith": { 
//         login: "jsmith", 
//         display: "John Smith" 
//     }
// }
```

### Remove an Item
`remove(key)`

```javascript
db.users.remove("apetersen"); 
```

### Remove All Items
`clear()`
```javascript
db.users.clear(); 
```