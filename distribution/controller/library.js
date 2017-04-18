'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _library = require('../model/library');

var _library2 = _interopRequireDefault(_library);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var api = (0, _express.Router)();

    api.get('/pin', function (req, res) {
        _library2.default.find({ type: 'pin' }, function (err, library) {
            if (err) {
                res.send(err);
            }

            var jsonString = library;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 4; i++) {
                message += json[0]['pin'][i] + '\n';
            }
            res.send(message);
        });
    });

    api.get('/laptop', function (req, res) {
        _library2.default.find({ type: 'laptop' }, function (err, library) {
            if (err) {
                res.send(err);
            }

            var jsonString = library;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 4; i++) {
                message += json[0]['laptop'][i] + '\n';
            }
            res.send(message);
        });
    });

    api.get('/refworks', function (req, res) {
        _library2.default.find({ type: 'refworks' }, function (err, library) {
            if (err) {
                res.send(err);
            }

            var jsonString = library;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 3; i++) {
                message += json[0]['refworks'][i] + '\n';
            }
            res.send(message);
        });
    });

    api.get('/printcredit', function (req, res) {
        _library2.default.find({ type: 'printcredit' }, function (err, library) {
            if (err) {
                res.send(err);
            }

            var jsonString = library;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 1; i++) {
                message += json[0]['printcredit'][i] + '\n';
            }
            res.send(message);
        });
    });

    api.get('/account', function (req, res) {
        _library2.default.find({ type: 'account' }, function (err, library) {
            if (err) {
                res.send(err);
            }

            var jsonString = library;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 2; i++) {
                message += json[0]['account'][i] + '\n';
            }
            res.send(message);
        });
    });

    api.get('/book', function (req, res) {
        _library2.default.find({ type: 'book' }, function (err, library) {
            if (err) {
                res.send(err);
            }

            var jsonString = library;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 2; i++) {
                message += json[0]['bookborrow'][i] + '\n';
            }
            res.send(message);
        });
    });

    api.get('/bookfind', function (req, res) {
        _library2.default.find({ type: 'bookfind' }, function (err, library) {
            if (err) {
                res.send(err);
            }

            var jsonString = library;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 2; i++) {
                message += json[0]['bookfind'][i] + '\n';
            }
            res.send(message);
        });
    });

    api.get('/librarytimes', function (req, res) {
        _library2.default.find({ type: 'times' }, function (err, library) {
            if (err) {
                res.send(err);
            }

            var jsonString = library;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 4; i++) {
                message += json[0]['librarytimes'][i] + '\n';
            }
            res.send(message);
        });
    });
    return api;
};
//# sourceMappingURL=library.js.map