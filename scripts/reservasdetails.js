self.Events = ko.observableArray([]);
self.Id = ko.observable('');
self.Name = ko.observable('');
self.Price = ko.observable('');
self.OrgName = ko.observable('');
self.Image = ko.observable('');
self.Description = ko.observable('');
var id = getUrlParameter('id');
var self = this;
var boing = dict.orgs
self.events = ko.observableArray([]);
self.activate = function () {
    data = dict.orgs
    console.log(data)
    self.orgs(dict.orgs);

};
boingerino = boing[id - 1];
var info = boingerino.Info;
var events = info.Events;
var Ids = events.IdS;
console.log(events.Preco)
console.log(id);
console.log(info);
console.log(boingerino);
console.log(events);
self.Events(events);
self.Id(events.Id);
self.Name(events.Name);
self.Price(events.Preco);
self.Description(events.Descricao);
console.log(events.Descricao);
console.log(info.Name);
self.OrgName(info.Name);
self.Image(info.Image);
console.log(info.Image);

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

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    };

$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings();
        
    });
// Update the current slider value (each time you drag the slider handle)
function sliderino(elem) {
    console.log(elem.id)
    var ids = elem.parentNode.parentNode.id
    console.log(elem.parentNode.parentNode.id);
    console.log(events)
    console.log(elem.id)
    console.log('preco' + ids)
    console.log(document.getElementById('preco' + ids).innerHTML)
    console.log(document.getElementById('precoadwa'))
    console.log(document.getElementById('myRange' + ids).value)
    console.log(document.getElementById('output' + ids))
    document.getElementById('output' + ids).innerHTML = document.getElementById('myRange' + ids).value;
    console.log(document.getElementById('myRange' + ids).value)
}

function preco_total() {
    var ids = elem.parentNode.parentNode.id
    console.log(document.getElementById('price' + ids).value)
    document.getElementById('price' + ids).value = document.getElementById('preco_fixo' + ids).innerHTML * document.getElementById('myRange' + ids).value;
    document.getElementById('price' + ids).innerHTML = document.getElementById('preco_fixo' + ids).innerHTML * document.getElementById('myRange' + ids).value + '€';
}

