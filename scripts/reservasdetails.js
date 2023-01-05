self.Events = ko.observableArray([]);
self.Id = ko.observable('');
self.Name = ko.observable('');
self.Price = ko.observable('');
self.OrgName = ko.observable('');
self.Image = ko.observable('');
self.Description = ko.observable('');

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

/*trimmed value binder for knockout*/
ko.bindingHandlers.trimedValue = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        $(element).on("change", function () {
            var observable = valueAccessor();
            var trimedValue = $.trim($(this).val());
            observable($(this).val());
            observable(trimedValue);
        });
    },
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        var trimedValue = $.trim(value);
        $(element).val(trimedValue);
    }
};

    var self = this;
    var boing = dict.orgs
    self.events = ko.observableArray([]);
    self.activate = function () {
        data = dict.orgs
        console.log(data)
        self.orgs(dict.orgs);

    };

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    };

$(document).ready(function () {
    id = getUrlParameter('id');
    boingerino = boing[id - 1];
    info = boingerino.Info;
    events = info.Events;
    console.log(id);
    console.log(info);
    console.log(boingerino);
    console.log(events);
    self.Events(events);
    self.Id(events.Id);
    self.Name(events.Name);
    self.Price(events.Preco);
    self.Description(events.Descricao);
    console.log(events[0].Descricao);
    console.log(info.Name);
    self.OrgName(info.Name);
    self.Image(info.Image);
    console.log(info.Image);
    var map = { "first": "1", "second": "2" };
    console.log(getKeyByValue(dict, "2"));
    console.log(dict);
    console.log(boing[getKeyByValue("Id", 1)]);
    console.log("ready!");
    ko.applyBindings();
        
    });


