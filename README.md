# mockValue

mockValue是一个模拟生成各种值的类库，比如生成`姓名`，`手机号码`，`随机字母`，`随机数字`等。

这些随机的数据在模拟接口中大大简化了调试数据的生成和让数据看起来不那么重复


### 安装使用

```
yarn add @smartx/mock-value
```

```js
import mockValue from '@smartx/mockValue'

const data = {
    name: mockValue.name(), // => 生成随机名字
    age: mockValue.integer(1, 100),  // => 随机年龄1-100
}
```

### 模拟数据分类

+ basic 基础类
+ name 名称类
+ text 文本类
+ web 网络类
+ id 标识类
+ date 时间类
+ color 颜色类
+ address 地址类
+ img 图片类

### 接口列表

#### letter 

+ letter() 生成随机[a-zA-Z]的字母

#### number 

+ number() 生成随机[0-9]的数字

#### bool，boolean

+ bool() 生成随机(true|false)
+ boolean() 同上

#### integer

+ integer()  随机正整数，最大值为`Math.pow(2, 53)`
+ integer(m)  取值[1, m]之间的整数
+ integer(m, n) 取值[m, n]之间的整数


#### decimal

+ decimal() 取[0,100]之间的带2位小数的数字，例如：`12.87`


#### symbol

+ symbol() 取`!@#$%^&*()[]`内的字符


#### string

+ string()  取长度为5由字母组成的字符串
+ string(length) 取长度为length由字母组成的字符串
+ string(length, type) 取长度为length，type可以为['letter', 'number', 'symbol', 'mix', 'hex']组成的字符串，其中mix为混合类型，字符包含前面3种，'hex'为16进制字符串，例如：`ac19af`


#### name

+ name()  返回中文姓名

#### firstname

+ firstname()  返回名字

#### familyname

+ familyname()  返回姓


#### text

+ text() 返回长度为5的中文字符串
+ text(length) 返回长度为length的中文字符串


#### sentence

+ sentence()  返回中文句子


#### paragraph

+ paragraph()  返回中文段落，由3个中文句子组成
+ paragraph(length) 返回中文段落，由length个中文句子组成


#### domain

+ domain() 返回随机域名

#### url

+ url() 返回http协议的url
+ url(isHttps) 通过isHttps控制是否是https协议


#### email

+ email() 返回电子邮箱地址

#### ipv4 

+ ipv4()  返回ipv4


#### cardno

+ cardno() 返回身份证号码
+ cardno(date) 返回指定年月日的身份证号码，例如：cardno(20191010)
+ cardno(year) 返回指定年，月日随机的身份证号码，例如：cardno(2019)

#### guid

+ guid() 返回guid

#### mobile

+ mobile() 返回手机号码

#### qq

+ qq() 返回5-13位qq号码
+ qq(length) 返回长度为length的qq号码


#### user

+ user() 返回长度为6个字母组成的用户名
+ user(length) 返回长度为length个字母组成的用户名


#### date

+ date() 返回年月日，格式例如：`2019-08-12`
+ date("yyyy")  返回年，例如：`2019`
+ date("MM")  返回月份，例如：`06`
+ date('M')  返回月份，例如：`6`
+ date('dd') 返回日期，例如：`09`
+ date('d')  返回日期，例如：`9`
+ date.date("T")  返回时间戳


#### color

+ color() 返回16进制颜色

#### rgb

+ rgb() 返回rgb格式颜色


#### rgba

+ rgba 返回rgba格式颜色


#### region

+ region() 返回中国大区，例如：`华北`，`华南`

#### province

+ province() 返回省级区域，例如：`浙江省`，`上海市`
+ province(type) 返回省级区域对应的值，{code:'返回行政编码',text:'返回名称',data:'返回行政编码和名称2个字段组成的对象'}，例如：`{code:10010,text:'北京市'}`


#### city

+ city() 市级名称，类同province
+ city(type) 同上

#### fullcity

+ fullcity() 由省，市名称组成的数组，例如`['浙江省','杭州市']`
+ fullcity(type) 同上

#### county

+ county() 县级名称，类同province
+ county(type) 同上

#### fullcounty

+ fullcounty() 由省，市，县名称组成的数组
+ fullcounty(type) 同上


#### street 

+ street() 返回街道地址

#### fullstreet

+ fullstreet() 返回省市区组成的街道地址字符串


#### zip

+ zip()  返回邮编


#### img

+ img() 返回100x100大小的图片地址
+ img(size) 返回对应尺寸的图片地址，例如：`img('200x400')`
+ img(size, background, color, text, type) 返回对应尺寸，背景颜色，前景颜色，文本，类型的图片地址，例如：`img('100x222', '#ccc', '#000', '中国', 'png')`
+ img(option) 以配置项的形式传入参数，参数名同上