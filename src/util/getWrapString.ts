/*
 * 一个自动换行的方法，用于处理节点文本的换行
 * */

function isCJKCharacter(ch: string) {
  /*
  参考网站：https://blog.csdn.net/iteye_4476/article/details/81652883，来源Unicode官网
  CJK字符不同于其他字符，CJK字符可以在任意地方换行，不像英文字符等正常情况必须在单词后换行
  截止20190725，根据我查到的资料（Unicode 5.0版），js中的Unicode为2个字节,CJK字符在2个字节的unicode中包括以下范围
  //大多数情况下，可以取1.~5.来判断CJK字符
  1.标准CJK文字
    1.1 [\u3400-\u3db5] => CJK统一表意文字扩展A (发行版3.0)
    1.2 [\u4e00-\u9fa5] => CJK统一表意文字 (发行版1.1) (常用来简单判断中文字符)
    1.3 [\u9fa6-\u9fbb] => CJK统一表意文字 (发行版4.1)
    1.4 [\uf900-\ufa2d] => CJK兼容文字 (发行版1.1)
    1.5 [\ufa30-\ufa6a] => CJK兼容文字 (发行版3.2)
    1.6 [\ufa70-\ufad9] => CJK兼容文字 (发行版4.1)
    (以下两项编码超过两个字节，js中暂时不能用，但是还是写一下(js中无法使用的编码范围前面有双斜杠//标志)：
    //1.7 [\u20000-\u2a6d6] => CJK统一表意文字扩展B (发行版3.1)
    //1.8 [\u2f800-\u2fa1d] => CJK兼容补充 (发行版3.1))
  2. [\uff00-\uffef] => 全角中英文标点符号、半宽片假名、半宽平假名、半宽韩文字母
  3. [\u2e80-\u2eff] => CJK部首补充
  4. [\u3000-\u303f] => CJK标点符号
  5. [\u31c0-\u31ef] => CJK笔划
  6. [\u2f00-\u2fdf] => 康熙部首
  7. [\u2ff0-\u2fff] => 汉字结构描述字符
  8. [\u3100-\u312f] => 注音符号
  9. [\u31a0-\u31bf] => 注音符号(闽南语客家语扩展)
  10. [\u3040-\u309f] => 日文平假名
  11. [\u30a0-\u30ff] => 日文片假名
  12. [\u31f0-\u31ff] => 日文片假名拼音扩展
  13. [\uac00-\ud7af] => 韩文拼音
  14. [\u1100-\u11ff] => 韩文字母
  15. [\u3130-\u318f] => 韩文兼容字母
  //16. [\u1d300-\u1d35f] => 太玄经符号
  17. [\u4dc0-\u4dff] => 易经六十四卦象
  18. [\ua000-\ua48f] => 彝文音节
  19. [\ua490-\ua4cf] => 彝文部首
  20. [\u2800-\u28ff] => 盲文符号
  21. [\u3200-\u32ff] => CJK字母及月份
  22. [\u3300-\u33ff] => CJK特殊符号(日期合并)
  23. [\u2700-\u27bf] => 装饰符号(非CJK专用)
  24. [\u2600-\u26ff] => 杂项符号(非CJK专用)
  25. [\ufe10-\ufe1f] => 中文竖排标点
  26. [\ufe30-\ufe4f] => CJK兼容符号(竖排变体、下划线、顿号)
  */
  const cjk = {
    NO1Unihan: [
      '\\u3400-\\u3db5',
      '\\u4e00-\\u9fa5',
      '\\u9fa6-\\u9fbb',
      '\\uf900-\\ufa2d',
      '\\ufa30-\\ufa6a',
      '\\ufa70-\\ufad9',
      '',
      ''
    ],
    NO2UFF00: ['\\uff00-\\uffef'],
    NO3U2E80: ['\\u2e80-\\u2eff'],
    NO4U3000: ['\\u3000-\\u303f'],
    NO5U31C0: ['\\u31c0-\\u31ef'],
    NO6U2F00: ['\\u2f00-\\u2fdf'],
    NO7U2FF0: ['\\u2ff0-\u2fff'],
    NO8U3100: ['\\u3100-\\u312f'],
    NO9U31A0: ['\\u31a0-\\u31bf'],
    NO10U3040: ['\\u3040-\\u309f'],
    NO11U30A0: ['\\u30a0-\\u30ff'],
    NO12U31F0: ['\\u31f0-\\u31ff'],
    NO13UAC00: ['\\uac00-\\ud7af'],
    NO14U1100: ['\\u1100-\\u11ff'],
    NO15U3130: ['\\u3130-\\u318f'],
    NO16U1D300: [''], // \\u1d300-\\u1d35f
    NO17U4DC0: ['\\u4dc0-\\u4dff'],
    NO18UA000: ['\\ua000-\\ua48f'],
    NO19UA490: ['\\ua490-\\ua4cf'],
    NO20U2800: ['\\u2800-\\u28ff'],
    NO21U3200: ['\\u3200-\\u32ff'],
    NO22U3300: ['\\u3300-\\u33ff'],
    NO23U2700: ['\\u2700-\\u27bf'],
    NO24U2600: ['\\u2600-\\u26ff'],
    NO25UFE10: ['\\ufe10-\\ufe1f'],
    NO26UFE30: ['\\ufe30-\\ufe4f']
  }
  let reg
  let str = '['
  for (const k in cjk) {
    str += cjk[k].join('')
  }
  str += ']+'
  if (str !== '[]+') {
    reg = new RegExp(str, 'm')
    return reg.test(ch)
  }
  return null
}

function getWrapString(str: string, styles: any) {
  // 传入的str需是能被html识别的字符串，暂不支持富文本，函数返回值也是字符串
  if (!str || str.length <= 0) return ''

  const $div = document.createElement('div')

  const styleObj = {
    position: 'absolute',
    'z-index': -1,
    opacity: 0,
    filter: 'alpha(opacity=0)',
    '-ms-filter': 'alpha(opacity=0)',
    ...styles
  }

  for (const key in styleObj) {
    $div.style[key] = styleObj[key]
  }

  document.body.append($div)

  $div.innerText = str

  // 1.1获取初步处理的字符串，即已完成空白符替换，但还未计算溢出换行。
  const rawText = $div.innerText

  $div.innerText = ''
  $div.style.overflow = 'hidden'
  $div.style.lineHeight = '1'

  const isBreakWord =
    ($div.style.wordWrap + $div.style.wordBreak).indexOf('break') >= 0
  const lineHeight = parseFloat($div.style.fontSize) // 记录行高判断是否产生换行

  // 下面将上面初步处理的字符串进行字符分割。
  const words = []
  const temp = rawText.split(/\b/) // 根据单词边界进行初次分割，分割后的non-CJK字符会变成一个整体，但CJK字符需要进行二次分割
  // 2.对英文单词或一串中文进行二次分割
  for (let i = 0; i < temp.length; i++) {
    // 将包含CJK字符的项进行单字分割后存入words数字中 //另外，如果设置了break-word则将英文单词分割为单字
    if (isCJKCharacter(temp[i]) || isBreakWord) {
      words.push.apply(words, temp[i].split(''))
    } else {
      // 不包含CJK字符的项则视为一个整体直接存进words数组
      words.push(temp[i])
    }
  }

  // 预留用一个二维数组保存计算结果，如lines=[['12',' ','中'],['asdf','哈']]则表示结果有2行，第一行为'12 中',第二行为'asdf哈'
  const lines = []
  let oneline = [] // oneline是一维数组，保存一行中的单词
  // 3.遍历求解换行位置，即尝试向行容器中添加字符。
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (word === '\n') {
      // 如果当前单词是换行符
      // 则将之前的内容存为1行，并追加保存一个空行
      lines.push(oneline, [])
      // 清空行容器
      $div.innerText = ''
      // 开始记录新行
      oneline = []
      // 结束本次循环
      continue
    }
    // debugger
    $div.innerText = $div.innerText + word // 往行容器中增加内容
    if ($div.offsetHeight <= lineHeight) {
      // 如果没有产生换行
      // 将当前单词或单字追加记录到oneline中
      oneline.push(word)
    } else {
      // 如果产生了换行
      // 前面的单词存为一行
      lines.push(oneline)
      // 清空行容器
      $div.innerText = ''
      // 开始记录新行
      oneline = []
      // 回退，在新行中尝试添加当前单词或单字
      i--
    }
  }

  // 3.1矫正，手动插入最后一行。
  lines.push(oneline)
  // 4.收尾工作
  // 4.1将二维数组还原为字符串
  let string = ''
  for (let i = 0; i < lines.length; i++) {
    string += lines[i].join('') + '\n'
  }
  string = string.substring(0, string.length - 1)
  // 4.2移除行容器
  $div.remove()
  // 返回计算结果

  return {
    wrapString: string,
    lines,
    fontSize: lineHeight
  }

  // return string
}

export { isCJKCharacter }
export default getWrapString
