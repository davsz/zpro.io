'use strict';
function _0x334c(_0x26cd35, _0x3d6753) {
    const _0x3b42e8 = _0x97e1();
    return _0x334c = function (_0xacae77, _0x361267) {
        _0xacae77 = _0xacae77 - (-0x164a + 0x21cf * -0x1 + 0x39dd);
        let _0x296c2f = _0x3b42e8[_0xacae77];
        return _0x296c2f;
    }, _0x334c(_0x26cd35, _0x3d6753);
}
const _0x19acff = _0x334c;
(function (_0x1a786b, _0x105a29) {
    const _0x3c6e69 = _0x334c, _0x436b29 = _0x1a786b();
    while (!![]) {
        try {
            const _0x21f50f = -parseInt(_0x3c6e69(0x1ea)) / (0x1 * -0x4c1 + -0x16f5 + 0x1d9 * 0xf) * (-parseInt(_0x3c6e69(0x1e2)) / (0x132 * 0x9 + -0x1104 + 0x644)) + -parseInt(_0x3c6e69(0x1d6)) / (-0xa46 + -0xc * 0x15e + 0x1ab1) * (parseInt(_0x3c6e69(0x1da)) / (-0x30e + 0x12a + 0x1e8 * 0x1)) + -parseInt(_0x3c6e69(0x1d4)) / (0x20f4 + -0x3c * -0x8 + -0x22cf) * (parseInt(_0x3c6e69(0x1e3)) / (-0x1 * 0xbed + 0x1 * 0x2466 + -0x1873)) + -parseInt(_0x3c6e69(0x1c6)) / (-0x89b * 0x3 + -0x5 * 0x5ab + -0x61 * -0x8f) * (parseInt(_0x3c6e69(0x1c8)) / (-0x257a + 0x18b * -0x19 + -0x4c15 * -0x1)) + -parseInt(_0x3c6e69(0x1cf)) / (-0x2489 + 0x2ff * 0x3 + 0x1b95) * (-parseInt(_0x3c6e69(0x1e8)) / (0x1f4 + 0x2 * -0x54 + -0x2e * 0x7)) + -parseInt(_0x3c6e69(0x1cd)) / (0x1965 + 0xc2 + -0x45a * 0x6) + parseInt(_0x3c6e69(0x1d7)) / (0x1 * -0xd88 + -0x1 * -0x2485 + 0x7 * -0x347) * (parseInt(_0x3c6e69(0x1c5)) / (0x1553 * 0x1 + -0x80a + 0xf2 * -0xe));
            if (_0x21f50f === _0x105a29)
                break;
            else
                _0x436b29['push'](_0x436b29['shift']());
        } catch (_0x45175b) {
            _0x436b29['push'](_0x436b29['shift']());
        }
    }
}(_0x97e1, 0x13c33 + -0x34c9 * -0xa + -0x4 * 0x4a69));
const _0x598822 = {};
_0x598822[_0x19acff(0x1d2)] = !![], Object[_0x19acff(0x1df) + _0x19acff(0x1c4)](exports, _0x19acff(0x1dc), _0x598822);
const sequelize_1 = require(_0x19acff(0x1e6));
module[_0x19acff(0x1ce)] = {
    'up': _0xc9014e => {
        const _0x3b204f = _0x19acff, _0x5710cc = {};
        _0x5710cc[_0x3b204f(0x1e7)] = _0x3b204f(0x1c7), _0x5710cc[_0x3b204f(0x1d3)] = _0x3b204f(0x1d5), _0x5710cc[_0x3b204f(0x1cc)] = _0x3b204f(0x1d0), _0x5710cc[_0x3b204f(0x1e4)] = _0x3b204f(0x1e1), _0x5710cc[_0x3b204f(0x1d8)] = _0x3b204f(0x1ec);
        const _0x3f1229 = _0x5710cc, _0x3fa239 = {};
        return _0x3fa239[_0x3b204f(0x1e5)] = sequelize_1[_0x3b204f(0x1d1)][_0x3b204f(0x1de)], _0x3fa239[_0x3b204f(0x1c9) + _0x3b204f(0x1dd)] = !![], _0x3fa239[_0x3b204f(0x1ca)] = !![], _0x3fa239[_0x3b204f(0x1d9)] = ![], _0xc9014e[_0x3b204f(0x1cb) + 'e'](_0x3f1229[_0x3b204f(0x1e7)], {
            'id': _0x3fa239,
            'userId': {
                'type': sequelize_1[_0x3b204f(0x1d1)][_0x3b204f(0x1de)],
                'references': {
                    'model': _0x3f1229[_0x3b204f(0x1d3)],
                    'key': 'id'
                },
                'onUpdate': _0x3f1229[_0x3b204f(0x1cc)],
                'onDelete': _0x3f1229[_0x3b204f(0x1cc)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[_0x3b204f(0x1d1)][_0x3b204f(0x1de)],
                'references': {
                    'model': _0x3f1229[_0x3b204f(0x1e4)],
                    'key': 'id'
                },
                'onUpdate': _0x3f1229[_0x3b204f(0x1cc)],
                'onDelete': _0x3f1229[_0x3b204f(0x1cc)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[_0x3b204f(0x1d1)][_0x3b204f(0x1de)],
                'references': {
                    'model': _0x3f1229[_0x3b204f(0x1d8)],
                    'key': 'id'
                },
                'onUpdate': _0x3f1229[_0x3b204f(0x1cc)],
                'onDelete': _0x3f1229[_0x3b204f(0x1cc)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[_0x3b204f(0x1d1)][_0x3b204f(0x1db)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0x3b204f(0x1d1)][_0x3b204f(0x1eb)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x3b204f(0x1d1)][_0x3b204f(0x1eb)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x4674c1 => {
        const _0x2bb1e2 = _0x19acff, _0x48e531 = {};
        _0x48e531[_0x2bb1e2(0x1e9)] = _0x2bb1e2(0x1c7);
        const _0x138d11 = _0x48e531;
        return _0x4674c1[_0x2bb1e2(0x1e0)](_0x138d11[_0x2bb1e2(0x1e9)]);
    }
};
function _0x97e1() {
    const _0x575024 = [
        '102ZcTdSb',
        '3228JnEjPh',
        'llOnV',
        'allowNull',
        '3172OcATvx',
        'STRING',
        '__esModule',
        'ent',
        'INTEGER',
        'defineProp',
        'dropTable',
        'Tickets',
        '20hEmUbn',
        '6psaGtn',
        'YSZba',
        'type',
        'sequelize',
        'JZRob',
        '320550yyVpIs',
        'GKuHB',
        '19269yhAuEs',
        'DATE',
        'Queues',
        'erty',
        '18629HkEfJl',
        '579089spUowH',
        'LogTickets',
        '24KZuGdz',
        'autoIncrem',
        'primaryKey',
        'createTabl',
        'StaXd',
        '1045561JJgAMm',
        'exports',
        '54WjDEPE',
        'CASCADE',
        'DataTypes',
        'value',
        'wSjPQ',
        '1302110sYjTAw',
        'Users'
    ];
    _0x97e1 = function () {
        return _0x575024;
    };
    return _0x97e1();
}