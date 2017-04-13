'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _library = require('../model/library');

var _library2 = _interopRequireDefault(_library);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;


    var api = (0, _express.Router)();

    api.get('/pin', function (req, res) {

        _library2.default.find({ type: 'recovery' }, function (err, library) {
            if (err) {
                res.send(err);
            }

            var jsonString = library;
            var json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            var message = '';
            for (var i = 0; i < 4; i++) {
                message += json[0]['pinrecovery'][i] + '\n';
            }

            res.send(message);
        });
    });

    return api;
};
//# sourceMappingURL=library.js.map