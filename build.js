const babel = require('@babel/core')
const fs = require('fs')
const path = require('path')
const dir = './src'
const outDir = './es'

// 判断是否存在es目录
if (!fs.existsSync(outDir)) {
  fs.mkdirSync('./es')
}
// 读取源码目录文件
const files = fs.readdirSync(dir)

function createFile(options) {
  return new Promise((resolve, reject) => {
    const { dir, outDir, file } = options
    const posFile = path.resolve(dir, file)
    fs.readFile(posFile, (err, data) => {
      if (err) reject(err)
      babel.transform(data.toString(), { filename: posFile }, (err, result) => {
        if (err) reject(err)
        fs.writeFile(path.resolve(outDir, file.replace('.ts', '.js')), result.code, err => {
          if (err) reject(err)
          console.log(file)
          resolve()
        })
      })
    })
  })
}

Promise.all(
  files.map(file =>
    createFile({
      dir: './src',
      outDir: './es',
      file,
    })
  )
)
