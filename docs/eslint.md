# ESLint配置详细解析
我们项目用的vue以及想相关的解析  
> 如果出现下面这样的报错
```
error  Requires a space before '}'  block-spacing
```
> 按照最后一个关键词，就可以找到正确的写法  

下面就是所有的配置
# accessor-pairs
对象中强制配对set和get
```
'accessor-pairs': 2
```
就是对象中不能设置了set却没有get，但是有get没有set是可以的
```js
// 错误
var o = {
  set a(value) {
    this.val = value;
  }
};

// 正确
var o = {
  set a(value) {
    this.val = value;
  },
  get a() {
    return this.val;
  }
};

// 正确
var o = {
  get a() {
    return this.val;
  }
};
```
# space
空格
## arrow-spacing
箭头函数前后空格
```
'arrow-spacing': [2, {
  'before': true,
  'after': true
}]
```
我们要求箭头函数必须前后有空格
```js
// { "before": true, "after": true }前后都要有空格
(a) => {}

// { "before": false, "after": false }前后都不能有空格
(a)=>{}
```
## block-spacing
大括号之内的空格或者换行
```
'block-spacing': [2, 'always']
```
我们要求大括号之内前后必须有空格或者换行
```js
// 正确
function foo() { return true; }
if (foo) { bar = 0; }
function baz() {
  let i = 0;
  return i;
}
// 错误
function foo() {return true;}//两边都没空格
if (foo) { bar = 0;}//右边没空格
function baz() {let i = 0;//左边没有换行或者空格
  return i;
}
```
## key-spacing
属性空格
```
'key-spacing': [2, {
  'beforeColon': false,
  'afterColon': true
}]
```
默认是属性之前没有空格之后有空格
```js
var obj = { "foo": 42 };
```
## keyword-spacing
关键字空格
```
'keyword-spacing': [2, {
  'before': true,
  'after': true
}]
```
关键字前后都加空格
```js
// 正确
if (foo) {
  //...
} else if (bar) {
  //...
} else {
  //...
}

//错误
if (foo) {
  //...
}else if (bar) {// 关键字else前面没有空格
  //...
} else{// 关键字else后面没有空格
  //...
}
```
## generator-star-spacing
生成器的星号空格
```
'generator-star-spacing': [2, {
  'before': true,
  'after': true
}]
```
我们要求星号前后都有空格
```js
// 正确
function * generator() {
  yield "44";
  yield "55";
}

// 错误
function* generator() {
  yield "44";
  yield "55";
}

// 错误
function *generator() {
  yield "44";
  yield "55";
}
```
# yield-star-spacing
生产的空格
```
'yield-star-spacing': [2, 'both']
```
生产跟生成器一样两边加空格
```js
//正确
function * generator() {
  yield * other();
}
//错误
```
## no-multi-spaces
多空格
```
'no-multi-spaces': 2
```
禁止多空格
```js
//正确
var a = 1;
if(foo === "bar") {}
a << b
var arr = [1, 2];
a ? b: c

//错误
var a =  1; // 等号右边多了空格
if(foo   === "bar") {}  // 全等左边多了空格
a <<  b // 逻辑左移右边两个空格
var arr = [1,  2];  // 数组元素中间多了空格
a ?  b: c //?后面多了空格
```
## space-before-blocks
括号前的空格
```
'space-before-blocks': [2, 'always']
```
括号之前要有空格
```js
//正确
if (a) {
  b();
}
if (a) {
  b();
} else{
  c();
}
function a() {}
for (;;) {
    b();
}
try {} catch(a) {}

//错误
if (a){
  b();
}
function a(){}
for (;;){
  b();
}
try {} catch(a){}
class Foo{
  constructor(){}
}
```
## space-before-function-paren
函数空格
```
'space-before-function-paren': [2, 'never']
```
定义函数函数的括号之前不写空格
```js
//正确
function foo() {
  // ...
}
var bar = function() {
  // ...
};
var bar = function foo() {
  // ...
};
class Foo {
  constructor() {
    // ...
  }
}
var foo = {
  bar() {
    // ...
  }
};
var foo = async() => 1;

//错误
function foo () {
  // ...
}
var bar = function () {
  // ...
};
var bar = function foo () {
  // ...
};
class Foo {
  constructor () {
    // ...
  }
}
var foo = {
  bar () {
    // ...
  }
};
var foo = async () => 1;
```
## no-spaced-func
函数空白
```
'no-spaced-func': 2
```
函数间不要有任何空白
```js
//正确
fn()

//错误
fn ()

fn
()
```
## padded-blocks
声明中的空白
```
'padded-blocks': [2, 'never']
```
声明中不要有空白
```js
//正确
if (a) {
  b();
}

//错误
if (a) {

  b();

}
if (a) {

  b();
}
if (a) {
  b();

}
```
## no-trailing-spaces
句尾空格
```
'no-trailing-spaces': 2
```
禁止在句尾也就是分号之后加空格
```js
//错误
var foo = 0;//•••••
var baz = 5;//••
```
## eol-last
页面结尾
```
'eol-last': 2
```
页面的结尾必须有一个空行
```js
// 正确
function doSmth() {
  var foo = 2;
}\n
```
# brace-style
括号样式
```
'brace-style': [2, '1tbs', {
  'allowSingleLine': true
}]
```
我们设置1tbs的的样式，以及允许单行
```js
// 正确
function foo() {
  return true;
}

if (foo) {
  bar();
}

if (foo) {
  bar();
} else {
  baz();
}

try {
  somethingRisky();
} catch(e) {
  handleError();
}

// 没有大括号，没有问题
if (foo) bar();
else if (baz) boom();

// 允许单行
function nop() { return; }

if (foo) { bar(); }

if (foo) { bar(); } else { baz(); }

try { somethingRisky(); } catch(e) { handleError(); }

//错误
function foo()
{// 大括号开始需要跟方法同一行
  return true;
}

if (foo)
{// 大括号开始需要跟控制同一行
  bar();
}

try
{ // 大括号开始需要跟控制同一行
  somethingRisky();
} catch(e)
{ // 大括号开始需要跟捕获同一行
  handleError();
}

if (foo) {
  bar();
}// 大括号结束需要跟后续同一行
else {
  baz();
}
```
# camelcase
驼峰样式
```
'camelcase': [0, {
  'properties': 'always'
}]
```
我们关闭了规则，虽然建议大家都要用驼峰命名变量，但是有时候我们引用的module不是驼峰的
```js
import { no_camelcased as camelCased } from "external-module";

var myFavoriteColor   = "#112C85";
var _myFavoriteColor  = "#112C85";
var myFavoriteColor_  = "#112C85";
var MY_FAVORITE_COLOR = "#112C85";
var foo = bar.baz_boom;
var foo = { qux: bar.baz_boom };

obj.do_something();
do_something();
new do_something();

var { category_id: category } = query;

function foo({ isCamelCased }) {
    // ...
};

function foo({ isCamelCased: isAlsoCamelCased }) {
    // ...
}

function foo({ isCamelCased = 'default value' }) {
    // ...
};

var { categoryId = 1 } = query;

var { foo: isCamelCased } = bar;

var { foo: isCamelCased = 1 } = quz;
```
# comma
逗号
## comma-dangle
尾部逗号，区别于默认
```
'comma-dangle': [1, 'never']
```
数组或者对象，尾部是不能有逗号的，但是为了方便调试，我们只是设置了警告，没有限定为错误
```js
// 正确
var foo = {
    bar: "baz",
    qux: "quux"
};

var arr = [1,2];

foo({
  bar: "baz",
  qux: "quux"
});

// 错误
var foo = {
    bar: "baz",
    qux: "quux",
};

var arr = [1,2,];

foo({
  bar: "baz",
  qux: "quux",
});
```
## comma-spacing
逗号空格
```js
'comma-spacing': [2, {
  'before': false,
  'after': true
}]
```
我们设置的为逗号之前不能有空格，之后必须有空格
```js
// 正确
var foo = 1, bar = 2;
var arr = [1, 2];
var obj = {"foo": "bar", "baz": "qur"};
foo(a, b);
new Foo(a, b);
function foo(a, b){}

// 错误
var foo = 1 ,bar = 2;
var arr = [1 , 2];
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
new Foo(a ,b);
function foo(a ,b){}
```
## comma-style
逗号样式
```
'comma-style': [2, 'last']
```
每个单元以逗号结尾
```js
// 正确
var foo = 1, bar = 2;

var foo = 1,
  bar = 2;

var foo = ["apples",
  "oranges"];

function bar() {
  return {
    "a": 1,
    "b:": 2
  };
}

// 错误
var foo = 1
,
bar = 2;

var foo = 1
  , bar = 2;

var foo = ["apples"
  , "oranges"];

function bar() {
  return {
    "a": 1
    ,"b:": 2
  };
}
```
# regular
正则表达式
## no-control-regex
正则字节控制
```
'no-control-regex': 0
```
正常来说使用的正则字节是ascii(0-31)，但是现在后续多了很多，尤其是要用中文，所以我们关掉了这个
```js
var pattern1 = /\x1f/; //16进制1f就是10进制的31
var pattern2 = new RegExp("\x1f");
```
## no-empty-character-class
禁止空字节
```
'no-empty-character-class': 2
```
正则表达式中不要有空字节
```js
// 正确
/^abc/.test("abcdefg"); // true
"abcdefg".match(/^abc/); // ["abc"]

/^abc[a-z]/.test("abcdefg"); // true
"abcdefg".match(/^abc[a-z]/); // ["abcd"]

// 错误
/^abc[]/.test("abcdefg"); // false
"abcdefg".match(/^abc[]/); // null
```
## no-invalid-regexp
无效的正则
```
'no-invalid-regexp': 2
```
错误的正则只有在执行时候才会报错，定义时候不会，所以我们加入验证
```js
// 正确
RegExp('.');
new RegExp;
this.RegExp('[');

// 错误
RegExp('[');
RegExp('.', 'z');
new RegExp('\\');
```
## no-regex-spaces
正则空格
```
'no-regex-spaces': 2
```
禁止直接输入数量的空格，如果有请用{}定义数字
```js
//正确
var re = /foo {3}bar/;
var re = new RegExp("foo {3}bar");

//错误
var re = /foo   bar/;
var re = new RegExp("foo   bar");
```
# class
类
## constructor-super
构造时候使用超类
```js
// 正确
class A {
  constructor() { }
}

class A extends B {
  constructor() {
    super();
  }
}

// 错误
class A {
  constructor() {
    super();  // 语法错误，因为没有继承
  }
}

class A extends B {
    constructor() { }  // 需要超类
}
```
## new-cap
类首字母大写
```
'new-cap': [2, {
  'newIsCap': true,
  'capIsNew': false
}]
```
默认为首字母大写
```js
// 正确
var friend = new Person();
var friend = Person(); //并没有要求必须new
// 错误
var friend = new person();// 类需要首字母大写
```
## new-parens
插入语
```
'new-parens': 2
```
js里，new一个类，如果没有参数，可以不写后面的括号的，但是别的语言都不行，所以统一一下
```js
// 正确
var person = new Person();
var person = new (Person)();
var person = new Person("Name");

// 错误
var person = new Person;
var person = new (Person);
```
## no-class-assign
类重定义
```
'no-class-assign': 2
```
class的方式定义的类，不要再重新定义
```js
// 错误
class A { }
A = 0;

A = 0;
class A { }

class A {
  b() {
    A = 0;
  }
}

let A = class A {
  b() {
    A = 0;
  }
}
```
## no-dupe-class-members
重复方法
```
'no-dupe-class-members': 2
```
不要再类里定义重复的方法
```js
// 错误
class Foo {
  bar() { }
  bar() { }
}

class Foo {
  bar() { }
  get bar() { }
}

class Foo {
  static bar() { }
  static bar() { }
}
```
## no-dupe-keys
重复键
```
'no-dupe-keys': 2
```
不要定义重复的键
```js
// 正确

// 错误
var foo = {
  bar: "baz",
  bar: "qux"
};

var foo = {
  "bar": "baz",
  bar: "qux"
};

var foo = {
  0x1: "baz",
  1: "qux"
};
```

# curly
圆括号
```
'curly': [2, 'multi-line']
```
函数或者控制可以单行没有大括号，多行需要大括号
```js
// 正确
if (foo) foo++; else doSomething();

if (foo) foo++;
else if (bar) baz()
else doSomething();

do something();
while (foo);

while (foo
  && bar) baz();

if (foo) {
  foo++;
}

if (foo) { foo++; }

while (true) {
  doSomething();
  doSomethingElse();
}

// 错误
if (foo)
  doSomething();
else
  doSomethingElse();

if (foo) foo(
  bar,
  baz);
```
# dot-location
圆点
```
'dot-location': [2, 'property']
```
属性为主体，圆点跟属性作为一个整体
```js
// 正确
var foo = object
.property;
var bar = object.property;

//错误
var foo = object.
property;
```
# eqeqeq
等式，专门应对不正确的等式类型
```
'eqeqeq': [2, 'allow-null']
```
我们要求必须同时应对类型，并且允许为空
```js
// 正确
a === b
foo === true
bananas !== 1
value === undefined
typeof foo === 'undefined'
'hello' !== 'world'
0 === 0
true === true
foo === null

// 错误
a == b
foo == true
bananas != 1
value == undefined
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null
```
可能你会觉得很多地方就是要数字和字符串都适用，那么做个处理就行了
```js
code == 200 // 常用的判断request的code，但是有时候给的是数字有时候给的字符串
code === 200 || code === "200" // 我们加上一个字符串的判断就可以了
parseInt( code ) === 200 // 或者专门吧code转化成数字，但是注意一下，字符串不能做16进制的转换，碰上非数字，后面的内容就会丢失
```
# handle-callback-err
错误回调
```
'handle-callback-err': [2, '^(err|error)$']
```
有错误的话要有抛出操作，就是参数一旦有“err”或者“error”一定要针对这个错误做特殊处理
```js
// 正确
function loadData (err, data) {
  if (err) {
    console.log(err.stack);
  }
  doSomething();
}

function generateError (err) {
  if (err) {}
}

// 错误
function loadData (err, data) {
  doSomething(); // 没做错误处理
}
```
# indent
缩进
## indent
缩进
```
'indent': [2, 2, {
  'SwitchCase': 1
}]
```
建议使用两个空格，理由是
* 用两个空格的人很多，并且在逐渐增加
* 层级多了，也只是一层2个，不会让横向过长
```js
if(true){
  console.log("exec");
}
switch(a){
  case "a":
    break;
  case "b":
    break;
}
```
## no-mixed-spaces-and-tabs
空格和tabs混排
```
'no-mixed-spaces-and-tabs': 2
```
禁止空格和tabs混排
```js
//正确
function add(x, y) {
  return x + y;
}

//错误
function add(x, y) {
 /*tab*/return x + y;
}
```
# jsx-quotes
标签引号
```
'jsx-quotes': [2, 'prefer-single']
```
标签引号请用单引号
```html
<!-- 正确 -->
<a b='c' />
<a b="'" />

<!-- 错误 -->
<a b="c" />
```
# array
数组
## no-array-constructor
数组构造
```
'no-array-constructor': 2
```
数组构造时候可以使用长度作为参数，也可以使用数组中的元素作为参数  
> 但是这样会有冲突，如果数组中只放了一个数字，那么是长度还是元素呢？  
> 所以我们禁止使用元素作为参数构造
```js
// 正确
Array(500);
new Array(someOtherArray.length);

// 错误
Array(0, 1, 2);
new Array(0, 1, 2);
```
## no-sparse-arrays
数组空元素
```
'no-sparse-arrays': 2
```
禁止设置数组的空元素
```js
//正确
var colors = [ "red", "blue", ]; // 结尾有个逗号不是语法错误

//错误
var items = [,];
var colors = [ "red",, "blue" ];
```
# no-caller
隐含参数
```
'no-caller': 2
```
未来版本会去除这个，并且在es5的严格模式中不能用，所以我们禁止
```js
// 正确
function foo(n) {
  if (n <= 0) {
    return;
  }
  foo(n - 1);
}
[1,2,3,4,5].map(function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
});

// 错误
function foo(n) {
  if (n <= 0) {
    return;
  }
  arguments.callee(n - 1);
}
[1,2,3,4,5].map(function(n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```
# no-console
输出
```
'no-console': 'off'
```
虽然是关闭状态，但是最好做完一个阶段之后去掉输出
# no-cond-assign
条件定义变量
```
'no-cond-assign': 2
```
不要再条件里面定义变量
```js
// 正确
var x;
if (x === 0) {
    var b = 1;
}
function setHeight(someNode) {
  "use strict";
  do {
    someNode.height = "100px";
  } while ((someNode = someNode.parentNode) !== null);
}


// 错误
var x;
if (x = 0) {
    var b = 1;
}

function setHeight(someNode) {
  "use strict";
  do {
    someNode.height = "100px";
  } while (someNode = someNode.parentNode);
}
```
# no-const-assign
常量定义
```
'no-const-assign': 2
```
不要给常量再赋值
```js
// 错误
const a = 0;
a = 1;
```

# no-delete-var
删除变量
```
'no-delete-var': 2
```
delete是用来删除属性的，如果删除变量会有非预期的错误
```js
// 正确
let obj = { a:1 };
delete obj.a; //这时候obj是{}，没有了a属性

// 错误
var x;
delete x;
```
# no-dupe-args
重复参数
```
'no-dupe-args': 2
```
不要再函数中定义重复的参数
```js
// 正确
function foo(a, b, c) {
  console.log(a, b, c);
}
var bar = function (a, b, c) {
  console.log(a, b, c);
};

// 错误
function foo(a, b, a) {
  console.log("value of the second a:", a);
}
var bar = function (a, b, a) {
  console.log("value of the second a:", a);
};
```
# no-duplicate-case
相同的case
```
'no-duplicate-case': 2
```
不要设置相同的case
```js
// 正确
switch (a) {
  case one:
    break;
  case 2:
    break;
  case 3:
    break;
  default:
    break;
}

// 错误
var a = 1,
  one = 1;

switch (a) {
  case 1:         // 重复
    break;
  case 2:
    break;
  case 1:         // 重复
    break;
  default:
    break;
}

switch (a) {
  case one:         // 重复
    break;
  case 2:
    break;
  case one:         // 重复
    break;
  default:
    break;
}

switch (a) {
  case "1":         // 重复
    break;
  case "2":
    break;
  case "1":         // 重复
    break;
  default:
    break;
}
```
# no-empty-pattern
空匹配
```
'no-empty-pattern': 2
```
禁止空匹配
```js
// 正确
var {a = {}} = foo; // 创建变量a
var {a = []} = foo;
function foo({a = {}}) {}
function foo({a = []}) {}

// 错误
var {} = foo;
var [] = foo;
var {a: {}} = foo;  // 不会创建任何变量
var {a: []} = foo;
function foo({}) {}
function foo([]) {}
function foo({a: {}}) {}
function foo({a: []}) {}
```
# no-eval
转化执行
```
'no-eval': 2
```
禁止使用eval
```js
// 正确
var obj = { x: "foo" },
  key = "x",
  value = obj[key];

// 错误
var obj = { x: "foo" },
  key = "x",
  value = eval("obj." + key);

(0, eval)("var a = 0");

var foo = eval;
foo("var a = 0");

this.eval("var a = 0");
```
# no-ex-assign
抛出异常定义
```
'no-ex-assign': 2
```
禁止冲定义抛出的异常
```js
// 正确
try {
  // code
} catch (e) {
  var foo = 10;
}

// 错误
try {
  // code
} catch (e) {
  e = 10;
}
```
# no-extend-native
原生扩展
```
'no-extend-native': 2
```
禁止原生扩展
```js
// 错误
Object.prototype.a = "a";
Object.defineProperty(Array.prototype, "times", { value: 999 });
```
因为如果做了原生扩展，所有的用到这个原生的内容都会有问题，比如
```js
Object.prototype.extra = 55;

var users = {
  "123": "Stan",
  "456": "David"
};

// 您并没有做别的
for (var id in users) {
    console.log(id); // console的为："123", "456", "extra"，因为你在原生Object里增加了一个extra
}
```
# no-extra-bind
绑定
```
'no-extra-bind': 2
```
禁止多余的绑定
```js
// 正确
var x = function () {
  this.foo();
}.bind(bar);

var x = function (a) {
  return a + 1;
}.bind(foo, bar);

// 错误
var x = function () {
  foo();
}.bind(bar);

var x = (() => {
  foo();
}).bind(bar);

var x = (() => {
  this.foo();
}).bind(bar);

var x = function () {
  (function () {
    this.foo();
  }());
}.bind(bar);

var x = function () {
  function foo() {
    this.bar();
  }
}.bind(baz);
```
# no-extra-boolean-cast
额外的按位计算
```
'no-extra-boolean-cast': 2
```
禁止额外的布尔操作
```js
// 正确
var foo = !!bar;
var foo = Boolean(bar);

function foo() {
  return !!bar;
}

var foo = bar ? !!baz : !!bat;

// 错误
var foo = !!!bar;

var foo = !!bar ? baz : bat;

var foo = Boolean(!!bar);

var foo = new Boolean(!!bar);

if (!!foo) {
  // ...
}

if (Boolean(foo)) {
  // ...
}

while (!!foo) {
  // ...
}

do {
  // ...
} while (Boolean(foo));

for (; !!foo; ) {
  // ...
}
```
# no-extra-parens

```
'no-extra-parens': [2, 'functions']
```
禁止额外的插入
```js
// 正确
(0).toString();
(Object.prototype.toString.call());
({}.toString.call());
(function(){} ? a() : b());
(/^a$/).test(x);
a = (b * c);
(a * b) + c;
typeof (a);

// 错误
((function foo() {}))();
var y = (function () {return 1;});
```
# no-fallthrough
抛出
```
'no-fallthrough': 2
```
禁止switch无抛出
```js
// 正确
switch(foo) {
  case 1:
    doSomething();
    break;
  case 2:
    doSomething();
}

function bar(foo) {
  switch(foo) {
    case 1:
      doSomething();
      return;
    case 2:
      doSomething();
  }
}

switch(foo) {
  case 1:
    doSomething();
    throw new Error("Boo!");
  case 2:
    doSomething();
}

switch(foo) {
  case 1:
  case 2:
    doSomething();
}

switch(foo) {
  case 1:
    doSomething();
    // 其他抛出

  case 2:
    doSomething();
}

// 错误
switch(foo) {
  case 1:
    doSomething();
  case 2:
    doSomething();
}
```
# no-floating-decimal
浮点小数
```
'no-floating-decimal': 2
```
虽然有简写的方式，但是请用完整的方式写小数
```js
// 正确
var num = 0.5;
var num = 2.0;
var num = -0.7;

// 错误
var num = .5;
var num = 2.;
var num = -.7;
```
# no-func-assign
函数重定义
```
'no-func-assign': 2
```
不要给函数重定义
```js
// 正确
var foo = function () {}
foo = bar;

function foo(foo) { // `foo` is shadowed.
  foo = bar;
}

function foo() {
  var foo = bar;  // `foo` is shadowed.
}

// 错误
function foo() {}
foo = bar;

function foo() {
  foo = bar;
}
foo = bar;
function foo() {}
```
# no-implied-eval
隐eval
```
'no-implied-eval': 2
```
需要避免所有使用eval的地方
```js
// 正确
setTimeout(function() {
  alert("Hi!");
}, 100);

setInterval(function() {
  alert("Hi!");
}, 100);

// 错误
setTimeout("alert('Hi!');", 100);
setInterval("alert('Hi!');", 100);
execScript("alert('Hi!')");
window.setTimeout("count = 5", 10);
window.setInterval("foo = bar", 10);
```
# no-inner-declarations
内部定义
```
'no-inner-declarations': [2, 'functions']
```
不要使用内部定义，会有异步的隐患
```js
// 正确
function doSomething() { }

function doSomethingElse() {
  function doAnotherThing() { }
}

if (test) {
  asyncCall(id, function (err, data) { });
}

var fn;
if (test) {
  fn = function fnExpression() { };
}

// 错误
if (test) {
  function doSomething() { }
}

function doSomethingElse() {
  if (test) {
    function doAnotherThing() { }
  }
}
```
# no-irregular-whitespace
不合法的空白
```
'no-irregular-whitespace': 2
```
不要用不合法的空白
```
\u000B - Line Tabulation (\v) - <VT>
\u000C - Form Feed (\f) - <FF>
\u00A0 - No-Break Space - <NBSP>
\u0085 - Next Line
\u1680 - Ogham Space Mark
\u180E - Mongolian Vowel Separator - <MVS>
\ufeff - Zero Width No-Break Space - <BOM>
\u2000 - En Quad
\u2001 - Em Quad
\u2002 - En Space - <ENSP>
\u2003 - Em Space - <EMSP>
\u2004 - Tree-Per-Em
\u2005 - Four-Per-Em
\u2006 - Six-Per-Em
\u2007 - Figure Space
\u2008 - Punctuation Space - <PUNCSP>
\u2009 - Thin Space
\u200A - Hair Space
\u200B - Zero Width Space - <ZWSP>
\u2028 - Line Separator
\u2029 - Paragraph Separator
\u202F - Narrow No-Break Space
\u205f - Medium Mathematical Space
\u3000 - Ideographic Space
```
```js
// 正确
function thing() {
  return ' <NBSP>thing';
}
function thing() {
  return '​<ZWSP>thing';
}
function thing() {
  return 'th <NBSP>ing';
}

// 错误
function thing() /*<NBSP>*/{
  return 'test';
}

function thing( /*<NBSP>*/){
  return 'test';
}

function thing /*<NBSP>*/(){
  return 'test';
}

function thing᠎/*<MVS>*/(){
  return 'test';
}

function thing() {
  return 'test'; /*<ENSP>*/
}

function thing() {
  return 'test'; /*<NBSP>*/
}

function thing() {
  // Description <NBSP>: some descriptive text
}

/*
Description <NBSP>: some descriptive text
*/

function thing() {
  return / <NBSP>regexp/;
}

/*eslint-env es6*/
function thing() {
  return `template <NBSP>string`;
}
```
# no-iterator
迭代器
```
'no-iterator': 2
```
不要自定义迭代器的属性，未来会有迭代器
```js
// 正确
var __iterator__ = foo; // Not using the `__iterator__` property.

// 错误
Foo.prototype.__iterator__ = function() {
    return new FooIterator(this);
};
foo.__iterator__ = function () {};
foo["__iterator__"] = function () {};
```
# no-label-var
函数标签
```
'no-label-var': 2
```
不要把函数标签跟变量冲突
```js
// 正确
function foo() {
  var q = t;
}
function bar() {
q:
  for(;;) {
    break q;
  }
}

// 错误
var x = foo;
function bar() {
x:
  for (;;) {
    break x;
  }
}
```
# no-labels
标签
```
'no-labels': [2, {
  'allowLoop': false,
  'allowSwitch': false
}]
```
循环和switch不要设置标签
```js
// 正确
var f = {
  label: "foo"
};
while (true) {
  break;
}
while (true) {
  continue;
}

// 错误
label:
  while(true) {
    // ...
  }

label:
  while(true) {
    break label;
  }

label:
  while(true) {
    continue label;
  }

label:
  switch (a) {
    case 0:
      break label;
    }

label:
  {
    break label;
  }

label:
  if (a) {
    break label;
  }
```
# no-lone-blocks
空闭包
```
'no-lone-blocks': 2
```
不要使用空闭包
```js
//正确
while (foo) {
  bar();
}
if (foo) {
  if (bar) {
    baz();
  }
}
function bar() {
  baz();
}
{
  let x = 1;
}
{
  const y = 1;
}
{
  class Foo {}
}
aLabel: {
}

//错误
{}
if (foo) {
  bar();
  {
    baz();
  }
}
function bar() {
  {
    baz();
  }
}
{
  function foo() {}
}
{
  aLabel: {
  }
}
```
# no-multi-str
换行字符串
```
'no-multi-str': 2
```
换行请用\n，不要用格式的字符串，很可能除了换行多了很多别的东西
```js
//正确
var x = "Line 1\n" +
  "Line 2";

//错误
var x = "Line 1 \
  Line 2";
```
# no-multiple-empty-lines
空行
```
'no-multiple-empty-lines': [2, {
  'max': 1
}]
```
禁止空行超过1
```js
//正确
var foo = 5;
// 一行
var bar = 3;

//错误
var foo = 5;
// 超过了一行

var bar = 3;
```
# no-native-reassign
原生定义
```
'no-native-reassign': 2
```
不要重定义环境
```js
//错误
Object = null;
undefined = 1;
window = {};
length = 1;
top = 1;
```
# no-negated-in-lhs
负运算
```
'no-negated-in-lhs': 2
```
非应该优先级最高，但是低于in表达式
```js
//正确
if(!(key in object)) {
  // key不在object对象中
}
if(('' + !key) in object) {
  // 括号的优先级永远最高，但是key需要是字符串，所以需要转化成字符串
}

//错误
if(!key in object) {
  // 这个实际是(key in object)，但是大部分人看来认为是非key在object
}
```
# no-new-object
new定义object
```
'no-new-object': 2
```
使用{}定义object比new Object()写的更方便
```js
//正确
var myObject = new CustomObject();
var myObject = {};

//错误
var myObject = new Object();
var myObject = new Object;
```
# no-new-require
new定义require
```
'no-new-require': 2
```
禁止require的module直接new
```js
//正确
var AppHeader = require('app-header');
var appHeader = new AppHeader();

//错误
var appHeader = new require('app-header');
```
# no-new-symbol
symbol类
```
'no-new-symbol': 2
```
symbol是一个function并且不带构造
```js
//正确
var foo = Symbol('foo');

//错误
var foo = new Symbol('foo');
```
# no-new-wrappers
包装对象
```
'no-new-wrappers': 2
```
不需要构造的类型，都直接用函数方式
```js
//正确
var text = String(someValue);
var num = Number(someValue);

var object = new MyString();

//错误
var stringObject = new String("Hello world");
var numberObject = new Number(33);
var booleanObject = new Boolean(false);

var stringObject = new String;
var numberObject = new Number;
var booleanObject = new Boolean;
```
# no-obj-calls
非函数类
```
'no-obj-calls': 2
```
全局类不要用函数方式调用
```js
//正确
function area(r) {
  return Math.PI * r * r;
}
var object = JSON.parse("{}");
var value = Reflect.get({ x: 1, y: 2 }, "x");

//错误
var math = Math();
var json = JSON();
var reflect = Reflect();
```
# no-octal
十进制数的导零
```
'no-octal': 2
```
禁止十进制数用导零
```js
//正确
var num  = "071";

//错误
var num = 071;
var result = 5 + 07;
```
# no-octal-escape
十进制转义
```
'no-octal-escape': 2
```
禁止十进制转义
```js
//正确
var foo = "Copyright \u00A9";   // unicode码
var foo = "Copyright \xA9";     // 十六进制

//错误
var foo = "Copyright \251"; // 十进制
```
# no-path-concat
地址链接
```
'no-path-concat': 2
```
禁止直接把地址做链接
```js
//正确
var fullPath = dirname + "/foo.js";
var fullPath = path.join(__dirname, "foo.js");
var fullPath = path.resolve(__dirname, "foo.js");

//错误
var fullPath = __dirname + "/foo.js";
var fullPath = __filename + "/foo.js";
```
# no-proto
原型
```
'no-proto': 2
```
禁止直接操作或者定义原型
```js
//正确
var a = Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, b);
var c = { __proto__: a };

//错误
var a = obj.__proto__;
var a = obj["__proto__"];
obj.__proto__ = b;
obj["__proto__"] = b;
```
# no-redeclare
变量重生命
```
'no-redeclare': 2
```
禁止变量重复声明
```js
//错误
var a = 3;
var a = 10;
```
# no-return-assign
返回定义
```
'no-return-assign': [2, 'except-parens']
```
禁止在返回时候做定义
```js
//错误
function doSomething() {
  return foo = bar + 2;
}
function doSomething() {
  return foo += 2;
}
```
# no-self-assign
自定义
```
'no-self-assign': 2
```
禁止自己给自己定义
```js
//错误
foo = foo;
[a, b] = [a, b];
[a, ...b] = [x, ...b];
({a, b} = {a, x});
```
# no-self-compare
自比较
```
'no-self-compare': 2
```
禁止自己跟自己比较
```js
//错误
var x = 10;
if (x === x) {
    x = 20;
}
```
# no-sequences
序列
```
'no-sequences': 2
```
禁止逗号操作
```js
//正确
foo = (doSomething(), val);
(0, eval)("doSomething();");
do {} while ((doSomething(), !!test));
for (i = 0, j = 10; i < j; i++, j--);
if ((doSomething(), !!test));
switch ((val = foo(), val)) {}
while ((val = foo(), val < 42));

//错误
foo = doSomething(), val;
0, eval("doSomething();");
do {} while (doSomething(), !!test);
for (; doSomething(), !!test; );
if (doSomething(), !!test);
switch (val = foo(), val) {}
while (val = foo(), val < 42);
with (doSomething(), val) {}
```
# no-shadow-restricted-names
严格命名
```
'no-shadow-restricted-names': 2
```
禁止使用预留字段命名
```js
//错误
function NaN(){}
!function(Infinity){};
var undefined = 5;
try {} catch(eval){}
```
# no-this-before-super
this在超类之前
```
'no-this-before-super': 2
```
禁止在超类之前使用this
```js
//正确
class A {
  constructor() {
    this.a = 0; // OK, 没有继承也就没有super
  }
}
class A extends B {
  constructor() {
    super();
    this.a = 0; // OK, 成员变量赋值在super之后.
  }
}
class A extends B {
  foo() {
    this.a = 0; // OK. 使用this的作用域不是构造.
  }
}

//错误
class A extends B {
  constructor() {
    this.a = 0; // super之前赋值成员变量
    super();
  }
}
class A extends B {
  constructor() {
    this.foo(); // super之前调用方法
    super();
  }
}
class A extends B {
  constructor() {
    super.foo();  // super之前调用静态方法
    super();
  }
}
class A extends B {
  constructor() {
    super(this.foo());  // 参数传递之前并未super
  }
}
```
# no-throw-literal
抛出异常
```
'no-throw-literal': 2
```
抛出错误需要是Error
```js
//正确
throw new Error();

throw new Error("error");

var e = new Error("error");
throw e;

try {
  throw new Error("error");
} catch (e) {
  throw e;  //  catch的参数就是Error类
}

//错误
throw "error";
throw 0;
throw undefined;
throw null;
var err = new Error();
throw "an " + err;
// err is recast to a string literal
var err = new Error();
throw `${err}`
```
# no-undef
未定义变量
```
'no-undef': 2
```
禁止使用未定义变量
```js
//错误
b = 10; // 变量b没有定义，严格模式下语法错误
```
# no-undef-init
未定义赋值
```
'no-undef-init': 2
```
禁止赋值为undefined
```js
//正确
var foo;
let bar;
const baz = undefined;

//错误
var foo = undefined;
let bar = undefined;
```
# no-unexpected-multiline
多行
```
'no-unexpected-multiline': 2
```
禁止不必要的多行
```js
//正确
var foo = bar;
(1 || 2).baz();

var foo = bar
;(1 || 2).baz()

var hello = 'world';
[1, 2, 3].forEach(addNumber);

var hello = 'world'
void [1, 2, 3].forEach(addNumber);

let x = function() {};
`hello`

let tag = function() {}
tag `hello`

//错误
var foo = bar
(1 || 2).baz();

var hello = 'world'
[1, 2, 3].forEach(addNumber);

let x = function() {}
`hello`

let x = function() {}
x
`hello`

let x = foo
/regex/g.test(bar)
```
# no-unmodified-loop-condition
循环中未修改的条件
```
'no-unmodified-loop-condition': 2
```
禁止循环中出现未修改的条件
```js
//正确
while (node) {
  doSomething(node);
  node = node.parent;
}
for (var j = 0; j < items.length; ++j) {
  doSomething(items[j]);
}
while (node !== root) {
  doSomething(node);
  node = node.parent; // node在循环中改变
}
while (node ? A : B) {
  doSomething(node);
  node = node.parent; // 三元表达式在循环中改变
}
while (obj.foo) {
  doSomething(obj); // doSomething函数可能修改obj的foo属性
}
while (check(obj)) { // check函数可能返回多样的值
  doSomething(obj);
}

//错误
while (node) {
  doSomething(node);
}
node = other; // 条件在循环外改变

for (var j = 0; j < items.length; ++i) { // 条件j和items没有在循环中改变
  doSomething(items[j]);
}
while (node !== root) { // 条件node和root没有在循环中改变
  doSomething(node);
}
```
# no-unneeded-ternary
不必要的三元表达式
```
'no-unneeded-ternary': [2, {
  'defaultAssignment': false
}]
```
禁止不必要的三元表达式
```js
//正确
var a = x === 2 ? "Yes" : "No";
var a = x !== false;
var a = x ? "Yes" : "No";
var a = x ? y : x;
var a = x ? x : 1;

//错误
var a = x === 2 ? true : false; // 直接写 var a = x === 2 就行了
var a = x ? true : false; // 直接写 var a = x 就行了
var a = f(x ? x : 1); // 直接写 f(x || 1) 就行了
```
# no-unreachable
未到达
```
'no-unreachable': 2
```
禁止未到达部分还有表达式，比如return、throw、break、continue之后的表达式
```js
//错误
function foo() {
  return true;
  console.log("done");
}

function bar() {
  throw new Error("Oops!");
  console.log("done");
}

while(value) {
  break;
  console.log("done");
}

throw new Error("Oops!");
console.log("done");

function baz() {
  if (Math.random() < 0.5) {
    return;
  } else {
    throw new Error();
  }
  console.log("done");
}
```
# no-unsafe-finally
不安全的finally
```
'no-unsafe-finally': 2
```
禁止在finally中使用 return、throw、break 和 continue 
```js
//正确

//错误
let foo = function() {
  try {
    return 1;
  } catch(err) {
    return 2;
  } finally {
    return 3;
  }
};
let foo = function() {
  try {
    return 1;
  } catch(err) {
    return 2;
  } finally {
    throw new Error;
  }
};
```
# no-unused-vars
未使用的变量
```
'no-unused-vars': [1, {
  'vars': 'local',
  'args': 'none'
}]
```
未使用的变量，我们为了方便调试，因为很多时候我们预先留好参数，修改了级别为警告
```js
//错误
(function(a, b, c) { // c没有使用
  return a + b;
})(1, 2);
```
# no-useless-call
不必要的调用
```
'no-useless-call': 2
```
禁止不必要的call和apply
```js
//正确
foo.call(obj, 1, 2, 3);
foo.apply(obj, [1, 2, 3]);
obj.foo.call(null, 1, 2, 3);
obj.foo.apply(null, [1, 2, 3]);
obj.foo.call(otherObj, 1, 2, 3);
obj.foo.apply(otherObj, [1, 2, 3]);

// argument list 是有效的
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);

//错误
// 这跟foo(1, 2, 3)一样
foo.call(undefined, 1, 2, 3);
foo.apply(undefined, [1, 2, 3]);
foo.call(null, 1, 2, 3);
foo.apply(null, [1, 2, 3]);
// 这跟foo(1, 2, 3)一样
obj.foo.call(obj, 1, 2, 3);
obj.foo.apply(obj, [1, 2, 3]);
```
# no-useless-computed-key
```
'no-useless-computed-key': 2
```
```js
//正确
var foo = {"a": "b"};

//错误
var foo = {["a"]: "b"};
```
# no-useless-constructor
无用的构造
```
'no-useless-constructor': 2
```
禁止无用的构造
```js
//错误
class A {
  constructor () { // 构造没任何用
  }
}

class A extends B {
  constructor (...args) {
    super(...args); // 不写这个也会有这个构造
  }
}
```
# no-useless-escape
不必要的转义
```
'no-useless-escape': 0
```
禁止不必要的转义
```js
//正确
"\"";
'\'';
"\x12";
"\u00a9";
"\371";
"xs\u2111";
`\``;
`\${${foo}}`;
`$\{${foo}}`;
/\\/g;
/\t/g;
/\w\$\*\^\./;

//错误
"\'";
'\"';
"\#";
"\e";
`\"`;
`\"${foo}\"`;
`\#{foo}`;
/\!/;
/\@/;
```
# no-whitespace-before-property
属性前的空格
```
'no-whitespace-before-property': 2
```
属性前不要有空格
```js
//正确
foo.bar
foo[bar]
foo[ bar ]
foo.bar.baz
foo
  .bar().baz()
foo
  .bar()
  .baz()
foo.
  bar().
  baz()

//错误
foo [bar]
foo. bar
foo .bar
foo. bar. baz
foo. bar()
  .baz()
foo
  .bar(). baz()
```
# no-with
不使用with
```
'no-with': 2
```
with有潜在的风险，现在已经有很多方式可以代替with了
```js
//正确
const r = ({x, y}) => Math.sqrt(x * x + y * y);

//错误
with (point) {
  r = Math.sqrt(x * x + y * y); // r是否point的属性呢？
}
```
# one-var
单变量
```
'one-var': [2, {
  'initialized': 'never'
}]
```
为了浏览方便，可以一次定义多个变量，但是不要一次给多个变量赋值
```js
//正确
function foo() {
  var foo = true;
  var bar = false;
  var a, b, c; // Uninitialized variables are ignored
}

//错误
function foo() {
  var foo = true,
    bar = false;
}
```
# operator-linebreak
操作符
```
'operator-linebreak': [2, 'after', {
  'overrides': {
    '?': 'before',
    ':': 'before'
  }
}]
```
操作符紧跟之后，三元表达式在之前
```js
//正确
foo = 1 + 2;
foo = 1 +
  2;
foo =
  5;
if (someCondition ||
  otherCondition) {
}
answer = everything ?
  42 :
  foo;

//错误
foo = 1
+
2;
foo = 1
  + 2;
foo
  = 5;
if (someCondition
  || otherCondition) {
}
answer = everything
  ? 42
  : foo;
```
# quotes
引号
```
'quotes': [2, 'single', {
  'avoidEscape': true,
  'allowTemplateLiterals': true
}]
```
为了统一，请字符串用单引号，但是为了防止转义是可以用双引号的
```js
//正确
var single = 'single';
var backtick = `back${x}tick`; // 允许模板
var unescaped = "a string containing 'single' quotes"; // 为了避免转义单引号，可以用双引号

//错误
var double = "double";
```
# semi
分号
```
'semi': [2, 'always']
```
必须加分号
```js
//正确
var website = "eslint.org";

//错误
var name = "ESLint"
```
# semi-spacing
分号空白
```
'semi-spacing': [2, {
  'before': false,
  'after': true
}]
```
左边不能有空白，右边必须有空白
```js
//正确
var foo;
var foo; var bar;
throw new Error("error");
while (a) { break; }
for (i = 0; i < 10; i++) {}
for (;;) {}
if (true) {;}
;foo();

//错误
var foo ;
var foo;var bar;
throw new Error("error") ;
while (a) { break ; }
for (i = 0 ; i < 10 ; i++) {}
for (i = 0;i < 10;i++) {}
```
# space-in-parens
参数空白
```
'space-in-parens': [2, 'never']
```
函数的参数括号两边不留空白
```js
//正确
foo();
foo('bar');
var foo = (1 + 2) * 3;
(function () { return 'bar'; }());

//错误
foo( 'bar');
foo('bar' );
foo( 'bar' );
var foo = ( 1 + 2 ) * 3;
( function () { return 'bar'; }() );
```
# space-infix-ops
操作符空白
```
'space-infix-ops': 2
```
操作符两边留空白
```js
//正确
a + b
a       + b
a ? b : c
const a = {b:1};
var {a = 0} = bar;
function foo(a = 0) { }

//错误
a+b
a+ b
a +b
a?b:c
const a={b:1};
var {a=0}=bar;
function foo(a=0) { }
```
# space-unary-ops
单元操作符空格
```
'space-unary-ops': [2, {
  'words': true,
  'nonwords': false
}]
```
```js
//正确
delete foo.bar; // 文字操作符需要有空格
new Foo; // 文字操作符需要有空格
void 0; // 文字操作符需要有空格
++foo; // 非文字操作符不能有空格
foo--; // 非文字操作符不能有空格
-foo; // 非文字操作符不能有空格
+"3"; // 非文字操作符不能有空格

//错误
typeof!foo;
void{foo:0};
new[foo][0];
delete(foo.bar);
++ foo;
foo --;
- foo;
+ "3";
```
# spaced-comment
注释的空格
```
'spaced-comment': [2, 'always', {
  'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
}]
```
注释需要加个空格
```js
//正确
// This is a comment with a whitespace at the beginning
/* This is a comment with a whitespace at the beginning */
/*
 * This is a comment with a whitespace at the beginning
 */
/*
This comment has a newline
*/

//错误
//This is a comment with no whitespace at the beginning
/*This is a comment with no whitespace at the beginning */
```
# template-curly-spacing
模板中的变量
```
'template-curly-spacing': [2, 'never']
```
模板中的变量不要加空格
```js
//正确
`hello, ${people.name}!`;
`hello, ${
  people.name
}!`;

//错误
`hello, ${ people.name}!`;
`hello, ${people.name }!`;
`hello, ${ people.name }!`;
```
# use-isnan
非数字
```
'use-isnan': 2
```
判断非数字，请使用isNaN函数
```js
//正确
if (isNaN(foo)) {
  // ...
}
if (!isNaN(foo)) {
  // ...
}

//错误
if (foo == NaN) {
  // ...
}
if (foo != NaN) {
  // ...
}
```
# valid-typeof
正确的类型
```
'valid-typeof': 2
```
请使用正确的类型
```js
//正确
typeof foo === "string"
typeof bar == "undefined"
typeof foo === baz
typeof bar === typeof qux

//错误
typeof foo === "strnig"
typeof foo == "undefimed"
typeof bar != "nunber"
typeof bar !== "fucntion"
```
# wrap-iife
闭包调用
```
'wrap-iife': [2, 'any']
```
直接调用函数需要括号括起来
```js
//正确
var x = (function () { return { y: 1 };}());
var x = (function () { return { y: 1 };})();

//错误
var x = function () { return { y: 1 };}();
```
# yoda
```
'yoda': [2, 'never']
```
条件里，变量在左，对比的值在右
```js
//正确
if (5 & value) {
  // ...
}
if (value === "red") {
  // ...
}

//错误
if ("red" === color) {
  // ...
}
if (true == flag) {
  // ...
}
if (5 > count) {
  // ...
}
if (-1 < str.indexOf(substr)) {
  // ...
}
if (0 <= x && x < 1) {
  // ...
}
```
# prefer-const
常量
```
'prefer-const': 1
```
没有被重定义的变量请用const，但是开发过程中经常有暂时没有重定义的变量，所以修改了警告级别
```js
//错误
let a = 3;
console.log(a);

let a;
a = 0;
console.log(a);

for (let i in [1, 2, 3]) { // 遍历时候i不会被重定义
    console.log(i);
}

for (let a of [1, 2, 3]) { // 遍历时候i不会被重定义
    console.log(a);
}
```
# no-debugger
调试
```
'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
```
在正式环境中不能有调试，开发环境关闭
```js
function isTruthy(x) {
  debugger;
  return Boolean(x);
}
```
# object-curly-spacing
对象空格
```
'object-curly-spacing': [2, 'always', {
  objectsInObjects: false
}]
```
定义对象的大括号内两边加空格
```js
//正确
var obj = {};
var obj = { 'foo': 'bar' };
var obj = { 'foo': { 'bar': 'baz' }, 'qux': 'quxx' };
var obj = {
  'foo': 'bar'
};
var { x } = y;
import { foo } from 'bar';

//错误
var obj = {'foo': 'bar'};
var obj = {'foo': 'bar' };
var obj = { baz: {'foo': 'qux'}, bar};
var obj = {baz: { 'foo': 'qux' }, bar};
var obj = {'foo': 'bar'
};
var obj = {
  'foo':'bar'};
var {x} = y;
import {foo } from 'bar';
```
# array-bracket-spacing
数组空格
```
'array-bracket-spacing': [2, 'never']
```
定义数字的中括号内，无空格
```js
//正确
var arr = [];
var arr = ['foo', 'bar'];
var arr = [
  'foo',
  'bar'
];

//错误
var arr = [ 'foo', 'bar' ];
var arr = ['foo', 'bar' ];
var arr = [ ['foo'], 'bar'];
var arr = [[ 'foo' ], 'bar'];
```
*