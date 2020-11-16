var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * @Author: your name
 * @Date: 2020-11-16 14:26:10
 * @LastEditTime: 2020-11-16 14:53:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \soma.github.io\typescript\3.ts
 */
// 类定义
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'zhangsan';
        // 可在外面初始化，也可在constructor里面
        this.age = 10;
    }
    return Person;
}());
var P1 = new Person();
// 命名空间，可重名
var b;
(function (b) {
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'zhangsan';
            // 可在外面初始化，也可在constructor里面
            this.age = 10;
        }
        return Person;
    }());
})(b || (b = {}));
//继承
var d;
(function (d) {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            // 可在外面初始化，也可在constructor里面
            this.name = name;
            this.age = age;
        }
        Person.prototype.getName = function () {
            return this.name;
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, stuNo) {
            var _this = _super.call(this, name, age) || this;
            _this.stuNo = stuNo;
            return _this;
        }
        Student.prototype.getStuNo = function () {
            return this.stuNo;
        };
        Student.prototype.setStuNo = function (stuNo) {
            this.stuNo = stuNo;
        };
        return Student;
    }(Person));
    var xiaoming = new Student('xiaoming', 1, 2);
    console.log(xiaoming.getName());
})(d || (d = {}));
