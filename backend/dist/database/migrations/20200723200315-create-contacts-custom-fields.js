'use strict';
function _0x152f() {
    const _0x49a3d7 = [
        'STRING',
        'exports',
        'dsxgu',
        '554292ZwuFkw',
        '__esModule',
        'sequelize',
        '193784UHsZiQ',
        'value',
        'autoIncrem',
        'allowNull',
        'DataTypes',
        '2253087iZpojf',
        'type',
        'Contacts',
        'Jqazr',
        '2936070AztmjL',
        'ujTLN',
        'DATE',
        '3xZdWQn',
        '73313ZgenTZ',
        'CASCADE',
        'tomFields',
        '201528qASCby',
        'ent',
        'createTabl',
        '685064lKAtJS',
        '5hXYxiK',
        'ContactCus',
        'defineProp',
        'dropTable',
        'primaryKey',
        'AyapM',
        '56ncTDuG',
        'erty',
        'INTEGER'
    ];
    _0x152f = function () {
        return _0x49a3d7;
    };
    return _0x152f();
}
const _0x30ff14 = _0x3f32;
(function (_0x146fd3, _0x30e34b) {
    const _0x409306 = _0x3f32, _0x49d68e = _0x146fd3();
    while (!![]) {
        try {
            const _0x4fee63 = -parseInt(_0x409306(0x111)) / (0x7 * -0x2f2 + 0x906 + 0xb99) + parseInt(_0x409306(0x124)) / (0x12 * 0x5a + -0x1 * 0xd6f + 0x71d) + parseInt(_0x409306(0x110)) / (-0x1200 + 0x259 * -0xd + -0x2 * -0x1844) * (-parseInt(_0x409306(0x117)) / (-0x580 + -0x1bba + 0x4a * 0x73)) + parseInt(_0x409306(0x118)) / (0x3 * -0x4 + 0x1223 + -0x1212) * (-parseInt(_0x409306(0x114)) / (0x1 * -0x1d0b + -0x18d * -0x6 + -0x1 * -0x13c3)) + parseInt(_0x409306(0x11e)) / (-0x3 * 0x23f + 0x12a8 + -0x5f2 * 0x2) * (parseInt(_0x409306(0x127)) / (-0x81 * -0x2b + -0x4f * -0x49 + -0x2c2a)) + parseInt(_0x409306(0x12c)) / (-0xf7b + -0x9d * -0x13 + -0x1 * -0x3dd) + -parseInt(_0x409306(0x130)) / (-0x2 * -0x33f + -0x2118 + 0x1aa4);
            if (_0x4fee63 === _0x30e34b)
                break;
            else
                _0x49d68e['push'](_0x49d68e['shift']());
        } catch (_0x317d2b) {
            _0x49d68e['push'](_0x49d68e['shift']());
        }
    }
}(_0x152f, -0x4b34 + -0x209e * 0x1 + 0x2b3cd));
const _0x2ccf7e = {};
_0x2ccf7e[_0x30ff14(0x128)] = !![], Object[_0x30ff14(0x11a) + _0x30ff14(0x11f)](exports, _0x30ff14(0x125), _0x2ccf7e);
const sequelize_1 = require(_0x30ff14(0x126));
function _0x3f32(_0x298713, _0x43dc71) {
    const _0x4e8b2d = _0x152f();
    return _0x3f32 = function (_0x847d6d, _0x26e109) {
        _0x847d6d = _0x847d6d - (0xff7 + -0x581 * -0x7 + 0x1ab7 * -0x2);
        let _0x1b5ecd = _0x4e8b2d[_0x847d6d];
        return _0x1b5ecd;
    }, _0x3f32(_0x298713, _0x43dc71);
}
module[_0x30ff14(0x122)] = {
    'up': _0x39d70a => {
        const _0x449a8f = _0x30ff14, _0x2833c9 = {};
        _0x2833c9[_0x449a8f(0x11d)] = _0x449a8f(0x119) + _0x449a8f(0x113), _0x2833c9[_0x449a8f(0x123)] = _0x449a8f(0x12e), _0x2833c9[_0x449a8f(0x131)] = _0x449a8f(0x112);
        const _0x4a80d0 = _0x2833c9, _0x5e85dd = {};
        _0x5e85dd[_0x449a8f(0x12d)] = sequelize_1[_0x449a8f(0x12b)][_0x449a8f(0x120)], _0x5e85dd[_0x449a8f(0x129) + _0x449a8f(0x115)] = !![], _0x5e85dd[_0x449a8f(0x11c)] = !![], _0x5e85dd[_0x449a8f(0x12a)] = ![];
        const _0x5cc42a = {};
        _0x5cc42a[_0x449a8f(0x12d)] = sequelize_1[_0x449a8f(0x12b)][_0x449a8f(0x121)], _0x5cc42a[_0x449a8f(0x12a)] = ![];
        const _0x5d5f85 = {};
        return _0x5d5f85[_0x449a8f(0x12d)] = sequelize_1[_0x449a8f(0x12b)][_0x449a8f(0x121)], _0x5d5f85[_0x449a8f(0x12a)] = ![], _0x39d70a[_0x449a8f(0x116) + 'e'](_0x4a80d0[_0x449a8f(0x11d)], {
            'id': _0x5e85dd,
            'name': _0x5cc42a,
            'value': _0x5d5f85,
            'contactId': {
                'type': sequelize_1[_0x449a8f(0x12b)][_0x449a8f(0x120)],
                'references': {
                    'model': _0x4a80d0[_0x449a8f(0x123)],
                    'key': 'id'
                },
                'onUpdate': _0x4a80d0[_0x449a8f(0x131)],
                'onDelete': _0x4a80d0[_0x449a8f(0x131)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0x449a8f(0x12b)][_0x449a8f(0x132)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x449a8f(0x12b)][_0x449a8f(0x132)],
                'allowNull': ![]
            }
        });
    },
    'down': _0xcd77f1 => {
        const _0x5f0d = _0x30ff14, _0x1cba07 = {};
        _0x1cba07[_0x5f0d(0x12f)] = _0x5f0d(0x119) + _0x5f0d(0x113);
        const _0x53c25a = _0x1cba07;
        return _0xcd77f1[_0x5f0d(0x11b)](_0x53c25a[_0x5f0d(0x12f)]);
    }
};