var self = this;
self.data = ko.observableArray([]);
self.info = ko.observableArray([]);
self.activate = function () {
    console.log(data)
    daterino = dict.orgs;
    self.data(dict.orgs);
    console.log(dict.orgs)

    // banana = ??? -> filtro

};

$(document).ready(function () {
    console.log("ready!");
    console.log(data)
    self.data(dict.ativ);
    ko.applyBindings();
});