// 字符串省略
function ellipsisString(str: string, limit: number = 10) {
  let totalLength: number = 0
  const list = str.split('')
  for (let i = 0; i < list.length; i++) {
    const s = list[i]
    // eslint-disable-next-line no-control-regex
    if (s.match(/[\u0000-\u00ff]/g)) {
      // 半角
      totalLength += 1
    } else if (s.match(/[\u4e00-\u9fa5]/g)) {
      // 中文
      totalLength += 2
    } else if (s.match(/[\uff00-\uffff]/g)) {
      // 全角
      totalLength += 2
    }
    if (totalLength > limit * 2) {
      return `${str.substr(0, i)}...`
    }
  }
  return str
}

// 替换空格
function resetBlank(str: string) {
  return str.replace(/\s+/g, ' ')
}

export { ellipsisString, resetBlank }
