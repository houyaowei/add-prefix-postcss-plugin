/**
 * 该插件使用postcss 7 版本, 8版本报错未修复
 */
const postcss = require('postcss')

module.exports = postcss.plugin('add-prefix-postcss-plugin', function(opts = {}) {
  const { prefix = '' } = opts

  function plugin(css, result) {
    if (!prefix) {
      return;
    }
    // 遍历当前ast所有rule节点,如果 a {color: red}
    css.walkRules(rule => { 
      const { selector } = rule
      // 只有当节点是ast根节点直属子节点时才添加指定的前缀
      if (rule.parent.type === 'root' && !(selector.includes(':root') || selector.includes('body') || selector.includes('html') || selector.includes(prefix)) && !rule.flag) {
        rule.flag = true
        const clone = rule.clone()
        clone.selector = `.${prefix} ${selector}`
        rule.replaceWith(clone)
      }
    })
  }

  return plugin
})

