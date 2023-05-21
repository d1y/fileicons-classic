const path = require('path')
const fs = require('fs')

const workspace = path.join(__dirname, './patch')
const target = path.join(__dirname, './src/icon_data.ts')

const kType = 'IconType'

const dir = fs.readdirSync(workspace)

const result = dir.map(item=> {
  const data = fs.readFileSync(path.join(workspace, item), 'utf-8')
  const [, ext] = item.match(/file-type-(.*?).svg/)
  return {
    ext,
    data,
  }
})

let template = `
export const iconData = new Map<${kType}, string>([
`

let $$R = `type ${kType} =`

result.forEach((item, index)=> {
  const isLast = result.length - 1 == index
  $$R += `'${item.ext}' ${isLast ? '' : '|\n'}`
  template += `[ '${item.ext}', \`${item.data}\` ],\n`
})

template = `export ${$$R}\n${template}`

template += '\n])'
fs.writeFileSync(target, template, 'utf-8')