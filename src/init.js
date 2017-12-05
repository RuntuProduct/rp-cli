import { join, basename } from 'path'
import vfs from 'vinyl-fs'
import { renameSync } from 'fs'
import through from 'through2'
import { sync as emptyDir } from 'empty-dir'
import leftPad from 'left-pad'
import chalk from 'chalk'

import { info, error, success } from './tools'

const init = ({ demo, install }) => {
  const type = demo ? 'demo' : 'app'  // 获取构建类型
  const cwd = join(__dirname, '../boilerplates', type) // 根据构建类型获取模板文件路径
  const dest = process.cwd()  // 获取命令执行当前目录
  const projectName = basename(dest)  // 以文件名作为项目名
  //

  console.log('init start')
}

export default init
