/**
 * 路由路径常量定义
 * 用于统一管理所有静态路由路径，避免硬编码
 */
const routerPaths = {
  // 首页
  home: "home",
  
  // 关于页面
  about: "about",
  
  // 设置页面
  settings: "settings",

  // 音乐相关
  mtkit: "mtkit",
  tonicmlDoc: "tonicml-doc",
  tonicmlScore: "tonicml-score",
  music12: "music12",
  musicTheory: "music-theory",

  // TonicML 编辑器
  tonicmlEditor: "tonicml",
  
  // 外部链接（保留用于特殊处理）
  github: "https://github.com/guohub8080",
} as const;

export default routerPaths;

// 导出类型定义，方便TypeScript使用
export type RouterPath = typeof routerPaths[keyof typeof routerPaths];