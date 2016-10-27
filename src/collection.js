var Collection = function(db, name) {
    this.name = name;
    this._db = db;
    // ensure the collection
    if (!this._db.has(this.name).value()) {
        this._db.set(this.name, []).value();
    }
};

Collection.prototype.__defineGetter__("items", function() { 
        return (this._db.get(this.name).value() || [])
});

Collection.prototype.toObj = function() {
    return (this._db.get(this.name).value() || [])        
        .reduce((items, item) => {
            items[item.key] = item.value;
            return items;
        }, {});
};

Collection.prototype.get = function(key) {
    try {
        return this._db.get(this.name).find({key}).value()['value']
    } catch (ex) {
        return null;
    }
};

Collection.prototype.set = function(key, value) {
    this.remove(key);
    this._db.get(this.name)
        .push({ key, value })
        .value();
};

Collection.prototype.remove = function(key) {
    this._db.get(this.name).remove({ key }).value();
};

Collection.prototype.clear = function() {
    this._db.set(this.name, []).value();
}
Collection.prototype.empty = function() {
    this.clear();
}

module.exports = Collection;