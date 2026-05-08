// 导入所有分类数据
import { buttons } from './buttons.js'
import { switches } from './switches.js'
import { searches } from './searches.js'
import { loaders } from './loaders.js'
import { cards } from './cards.js'
import { navbars } from './navbars.js'
import { advancedComponents } from './advanced-components.js'
import { loginPages } from './login-pages.js'
import { backgrounds } from './backgrounds.js'
import { momos } from './momos.js'

// 导出所有分类数据
export {
  buttons,
  switches,
  searches,
  loaders,
  cards,
  navbars,
  advancedComponents,
  loginPages,
  backgrounds,
  momos
}

// 合并所有样式
export const allStyles = [
  ...buttons,
  ...switches,
  ...searches,
  ...loaders,
  ...cards,
  ...navbars,
  ...advancedComponents,
  ...loginPages,
  ...backgrounds,
  ...momos
]

// 主导航分组
export const mainGroups = ['组件', '页面', '背景']

// 组件分组下的分类
export const componentCategories = ['全部', '按钮', '开关', '加载动画', '卡片', '导航', '输入框', '滑动条', '复选框', '气泡', '折叠']

// 页面分组下的分类（表单）
export const pageCategories = ['全部', '表单']

// 分类列表（保留用于兼容）
export const categories = ['全部', '表单', '组件', '导航', '背景']

// 组件分组数据
export const componentStyles = allStyles.filter(s =>
  ['组件', '导航', '搜索'].includes(s.category)
)

// 页面分组数据
export const pageStyles = allStyles.filter(s =>
  ['表单', '背景'].includes(s.category)
)
