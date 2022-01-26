# add-prefix-postcss-plugin
一个基于postcss v7实现的自动给样式增加前缀的插件。

> 没有使用postcss8版本的原因，根据官方建议的写法，引入插件后报错，大意为“请使用8版本进行实现” 

### 使用说明

```javascript
yarn install add-prefix-postcss-plugin -D
or
npm install add-prefix-postcss-plugin -dev
```

在postcss.config.js中配置

```javascript
const AddPrefixPostcssPlugin = require('add-prefix-postcss-plugin')

module.exports = {
  plugins: [
    AddPrefixPostcssPlugin({
      prefix: 'portal'
    })
  ]
}
```

prefix： 前缀名称



### 友情提醒

该插件请在v7版本中测试通过。后面会同步v8版本



### 协议

MIT
