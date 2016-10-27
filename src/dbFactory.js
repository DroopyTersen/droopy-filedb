var low = require("lowdb");
var Collection = require("./collection");

var fileDatabase = {
    create(filepath = "db.json") {
        var db = low(filepath);

        var collectionsProxy = new Proxy({}, {
            get: function(target, name) {
                if (!(name in target)) {
                    return new Collection(db, name);                    
                }
                return target[name];
            }
        });

        //supports dynamic property names mapping to collections
        //Example: db.users or db.settings or db.posts
        return collectionsProxy;
    }
};

module.exports = fileDatabase;
