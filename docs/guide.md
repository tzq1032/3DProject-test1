# ESLint
有些规范建议直接在eslint设置规范  
错误等级有的地方用的是数字，可以参考一下  
> "off" 或者 0：关闭规则。  
> "warn" 或者 1：打开规则，并且作为一个警告（不影响exit code）。  
> "error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）。  
```js
{
  rules: {
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'semi': [2, 'always'],
  }
}
```
如果想在vscode自动语法提示中标注错误和警告，需要在setting里面添加
```json
{
  "eslint.validate": [
    "javascript",{
      "language": "vue"
    },"html",
    "vue"
  ]
}
```
## indent 缩进
> indent  
> 英 [ɪnˈdent]   美 [ɪnˈdent]  
> vt.  切割…使呈锯齿状; 缩进排版;  
常用方式有
1. 一个tab（制表）
```js
if(true){
/*tab*/console.log("exec");
}
```
2. 四个space（空格）
```js
if(true){
    console.log("exec");
}
```
3. 两个space
```js
if(true){
  console.log("exec");
}
```
建议使用两个空格，理由是
* 用两个空格的人很多，并且在逐渐增加
* 层级多了，也只是一层2个，不会让横向过长

**eslint参数为**
```js
{
  "indent": ["error", 2]
}
```
## 分号
> semicolon  
> 英 [ˌsemiˈkəʊlən]   美 [ˈsemikoʊlən]  
> n. 分号;   
建议加分号，因为在很多情况下会有问题，尤其ASI
```js
a = b + c
(d + e).print()
// 会解析成下面的
a = b + c(d + e).print();
//-------------
a = b
/hi/g.exec(c).map(d)
// 会解析成下面的
a = b / hi / g.exec(c).map(d);
//-------------
someFunction()
['ul', 'ol'].map(x => x + x)
// 会解析成下面的
const propKey = ('ul','ol'); // comma operator
assert.equal(propKey, 'ol');
someFunction()[propKey].map(x => x + x);
```
**eslint参数为**
```js
{
  'semi': ['error', 'always']
}
```
# 命名
## 变量以及属性的命名规则
必须是统一码(Unicode)
+ 字母:a-z,A-Z等
+ “$”(美元符号)和“_”(下划线)
  + “-”(横杠)不能用
+ 数字:0-9等
  + 不能以数字不能开头  
```js
const строка = '';
const ε = 0.0001;
let 变量 = 0.0001;
let _tmp = 0;
const $foo2 = true;
let 0a = 1;// SyntaxError: Invalid or unexpected token
let a-b = 1;// SyntaxError: Unexpected token -
```
*小贴士*：
不能用预留关键字做变量,比如if,ture,const  
但是可以做属性
```js
const if = 123;// SyntaxError: Unexpected token if
const obj = { if: 123 };
obj.if// 123
```
所有js预留关键字
```
await break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof let new return static super switch this throw try typeof var void while with yield
```
没有在js中使用，但是也预留的关键字
```
enum implements package protected interface private public
```
不是预留但是也要避免，他们本来就已经定义了关键字
```
Infinity NaN undefined async
```
虽然可以用，但是要避免用全局变量作为局部变量
```
String, Math, etc.
```
## 变量样式
+ 驼峰: threeConcatenatedWords
  + Camel case
+ 下划线(蛇形): three_concatenated_words
  + Underscore case (also called snake case)
+ 横线(肉串): three-concatenated-words
  + Dash case (also called kebab case)

我们变量一般选用驼峰，因为看起来简洁，也比下划线少打一些字  
文件名，我们选择用横线，因为windows不区分大小写，比如git上提交的两个文件是myFile和myfile，在unix类的系统没事，但是在windows下会报错
```ssh
my-module.js
```
## 大小写
首字母小写
```js
let myVar;// 变量
function myFunction(){}// 函数
let obj = {};
obj.myMethod// 方法
```
首字母大写
```js
class MyClass {}// 类
```
大写加下划线
```js
const EVENT_START = "事件开始"// 常量
```
css请用肉串样式
```css
special-class:{}
```
```html
<div class="special-class"></div>
```
html标签以及属性也请用肉串样式
```html
<common-tree :section-name="remote.tree.sectionName">
  <div>...</div>
<common-tree>
```
## 下划线
成员变量
```js
class MyClass{
  construct(
    this._memberVar = 1;
  );
}
```
实体元素写两个下划线，就是在场景中实际存在的内容
```js
class MyClass{
  construct(
    this.__element = document.getElementById("elementID");
  );
}
```
## 命名规范
以下所有命名注意语义化，禁止使用a,b,name1,name2,拼音等命名方法
1. 前缀应当为动词
2. 可使用常见动词约定

前缀 | 示例 | 作用 | 返回
---------| ---------| ---------| -------------
can | canRead | 判断是否可执行某个动作(权限) | 函数返回一个布尔值。true：可执行；false：不可执行
has | hasTag | 判断是否含有某个值 | 函数返回一个布尔值。true：含有此值；false：不含有此值
is | isExpire | 判断是否为某个值 | 函数返回一个布尔值。true：为某个值；false：不为某个值
get | getUserByName | 获取某个值 | 函数返回一个非布尔值
set | setUserName | 设置某个值 | 无返回值、返回是否设置成功或者返回链式对象
load | loadImage | 加载某些数据 | 无返回值或者返回是否加载完成的结果
i | IResponse | 类型的特殊标记 | interface的特殊标记


比如类型，i打头
```ts
interface IDataBase {// 数据库基础信息
  id?: string;
  createTime: string;
  updateTime: string;
}
export interface IUser extends IDataBase { // 用户
  email: string;
  loginStatus: boolean;
  loginTimes:	number; // 0为首次登录，大于0则登录过 登录次数
  tel: string;
  tenantId: number;
  token: string;
  userAccount: string;
  userId: number;
  userName: string;
  userPassword: string;
  userSex: string;
  wxOpenId: string; // 返回值为false 且仅有微信openId时需跳转到绑定手机界面 微信openId
  isDefaultPwd: boolean; // 是否初始密码
}
```

# 注释
## Dom注释
方便在比较长的标签中，知道标签的开始位置以及结束位置
```html
<!-- 文章列表列表模块 开始 -->
<div class="article-list">
...
</div>
<!-- 文章列表列表模块 结束 -->
```
## 函数注释：1.描述，2.入参，出参&类型
写清楚函数介绍以及参数和返回
```js
/**
 * 函数描述
 *
 * @param {string} p1 参数1的说明
 * @param {string} p2 参数2的说明，比较长那就换行了
 * @param {number=} p3 参数3的说明（可选）
 * @return {Object} 返回值描述
 */
function foo(p1, p2, p3) {
  var p3 = p3 || 10;
  return {
    p1: p1,
    p2: p2,
    p3: p3
  };
}
```
## 变量以及逻辑注释
放在变量后面，比放在前后多更好的可以形容变量
```js
let choices = [];// 模板选择
for(const k in tpl){// 把json的键插入数组，用于inquirer的list选择
  choices.push(k);
}
```