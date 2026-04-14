/** @jsxImportSource react */
/**
 * Home 页面卡片配置
 */
import React from "react"
import { IoLogoGithub } from "react-icons/io5"
import TonicMLIcon from "../TonicMLEditor/svg/TonicMLIcon.tsx"
import TonicDocIcon from "../../../books/TonicMLDocument/data/TonicMLDocIcon.tsx"
import TonicScoreIcon from "../../../books/TonicMLScore/data/TonicMLScoreIcon.tsx"
import Music12Icon from "../../assets/svgs/icons/Music12Icon.tsx"
import MusicTheoryIcon from "../../../books/MusicTheoryDocument/data/MusicTheoryIcon.tsx"
import routerPaths from "../../router/paths.ts"

// 定义卡片数据结构
export interface CardData {
  id: string;
  column: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

// 定义列（分组）
export const columns = [
  { id: 'about', name: '关于', color: '#3b82f6' },
  { id: 'music', name: '音乐理论学习和工具', color: '#8b5cf6' },
];

// 定义所有卡片数据
export const initialCards: CardData[] = [
  // 关于分组
  {
    id: 'about-me',
    column: 'about',
    title: '关于我',
    description: '关于作者和网站',
    icon: (
      <svg viewBox="0 0 1024 1024" className="w-9 h-9" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{display: 'block', margin: '0 auto'}}>
        <path d="M 512 1016 C 234.8 1016 8 789.2 8 512 S 234.8 8 512 8 s 504 226.8 504 504 s -226.8 504 -504 504 Z" fill="currentColor"></path>
        <path d="M 512 932 C 281 932 92 743 92 512 S 281 92 512 92 s 420 189 420 420 s -189 420 -420 420 Z" fill="currentColor" opacity="0.7"></path>
        <path d="M 470 722 h 84 v -294 h -84 v 294 Z m 0 -336 h 84 V 302 h -84 v 84 Z" fill="#ffffff"></path>
      </svg>
    ),
    href: routerPaths.about,
    color: '#3b82f6'
  },
  {
    id: 'settings',
    column: 'about',
    title: '设置',
    description: '个性化设置和偏好配置',
    icon: (
      <svg viewBox="0 0 1024 1024" className="w-9 h-9" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M844.8 580.267c2.133-14.934 4.267-29.867 4.267-46.934s-2.134-32-4.267-46.933l96-68.267c8.533-6.4 12.8-19.2 6.4-29.866L853.333 230.4c-6.4-10.667-17.066-14.933-27.733-8.533l-106.667 49.066c-25.6-19.2-51.2-34.133-81.066-46.933L627.2 106.667c-2.133-10.667-10.667-19.2-21.333-19.2H422.4c-10.667 0-21.333 8.533-21.333 19.2L390.4 224c-29.867 12.8-57.6 27.733-81.067 46.933l-106.666-49.066c-10.667-4.267-23.467 0-27.734 8.533L83.2 388.267c-6.4 10.666-2.133 23.466 6.4 29.866l96 68.267c-2.133 14.933-4.267 29.867-4.267 46.933s2.134 32 4.267 46.934L85.333 648.533c-8.533 6.4-12.8 19.2-6.4 29.867l91.734 157.867c6.4 10.666 17.066 14.933 27.733 8.533l106.667-49.067c25.6 19.2 51.2 34.134 81.066 46.934L396.8 960c2.133 10.667 10.667 19.2 21.333 19.2H601.6c10.667 0 21.333-8.533 21.333-19.2L633.6 842.667c29.867-12.8 57.6-27.734 81.067-46.934L821.333 844.8c10.667 4.267 23.467 0 27.734-8.533L940.8 678.4c6.4-10.667 2.133-23.467-6.4-29.867l-89.6-68.266zM512 746.667c-117.333 0-213.333-96-213.333-213.334S394.667 320 512 320s213.333 96 213.333 213.333-96 213.334-213.333 213.334z" fill="#607D8B"></path>
        <path d="M512 277.333c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256-115.2-256-256-256zM512 640c-59.733 0-106.667-46.933-106.667-106.667S452.267 426.667 512 426.667 618.667 473.6 618.667 533.333 571.733 640 512 640z" fill="#455A64"></path>
      </svg>
    ),
    href: routerPaths.settings,
    color: '#607D8B'
  },
  {
    id: 'github',
    column: 'about',
    title: 'GitHub',
    description: '查看项目源码和贡献',
    icon: (
      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
        <IoLogoGithub className="w-9 h-9 text-black" />
      </div>
    ),
    href: routerPaths.github,
    color: '#1f2937'
  },
  // 音乐分组
  {
    id: 'tonicml-doc',
    column: 'music',
    title: 'TonicML文档',
    description: 'TonicML标记语言使用指南',
    icon: <TonicDocIcon className="w-9 h-9" useGradient={true} />,
    href: routerPaths.tonicmlDoc,
    color: '#7D7D7D'
  },
  {
    id: 'tonicml',
    column: 'music',
    title: 'TonicML编辑器',
    description: '一种面向AI的描述性标记乐谱',
    icon: <TonicMLIcon className="w-9 h-9" useGradient={true} />,
    href: routerPaths.tonicmlEditor,
    color: '#7D7D7D'
  },
  {
    id: 'tonicml-score',
    column: 'music',
    title: 'TonicML乐谱',
    description: '部分用TonicML编写的乐谱',
    icon: <TonicScoreIcon className="w-9 h-9" useGradient={true} />,
    href: routerPaths.tonicmlScore,
    color: '#7D7D7D'
  },
  {
    id: 'music-theory',
    column: 'music',
    title: '乐理知识',
    description: '流行和声等资料',
    icon: <MusicTheoryIcon className="w-9 h-9" useGradient={true} />,
    href: routerPaths.musicTheory,
    color: '#8b5cf6'
  },
  {
    id: 'music12',
    column: 'music',
    title: 'Music12',
    description: '音乐理论学习和工具',
    icon: <Music12Icon className="w-9 h-9" useGradient={true} />,
    href: routerPaths.music12,
    color: '#8b5cf6'
  },
  {
    id: 'music-calculator',
    column: 'music',
    title: '乐理计算器',
    description: '独立项目mtkit.top',
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style={{display: 'block', margin: '0 auto'}}>
        <defs>
          <linearGradient id="gradient" x1="247.75" y1="520.79" x2="244.85" y2="-1217.21" gradientTransform="translate(137.61 161.42) scale(.3 -.3)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#5cc3f6"/>
            <stop offset="1" stopColor="#3771e8"/>
          </linearGradient>
        </defs>
        <polygon fill="#52aef2" points="361.4 85.5 361.4 162 164.8 195.5 164.8 120.5 361.4 85.5"/>
        <polygon fill="#4b9ef0" points="245.8 215.6 245.8 251.9 164.8 265.6 164.8 230.6 245.8 215.6"/>
        <polygon fill="#4691ee" points="245.8 279.7 245.8 316.4 164.8 330.1 164.8 295 245.8 279.7"/>
        <polygon fill="#4c9ff0" points="361.4 194.7 361.4 231 280.4 244.7 280.4 209.6 361.4 194.7"/>
        <polygon fill="#4085eb" points="245.8 344.6 245.8 380.9 164.8 394.6 164.8 360.1 245.8 344.6"/>
        <path fill="url(#gradient)" d="M422.6,11.3v341.7c-1,64.8-83.6,93.5-124.9,42.9-44.4-54.5,10.2-133.2,77.6-111,2,.6,11.8,5.4,12.3,4.8V47.6l-246.6,43.5c-.8,64.6-.3,129.2-.4,193.8,0,45.8,2.3,94.9,0,140.2-4.5,89.9-137.8,86.9-140.6-.8v-5.2c1.8-52.4,60.1-84.5,105.6-58.4,1.6-94.7-.7-189.4.4-284.1.1-10-3.7-27.5,8.8-30.5L412,0c5.8,0,11.1,5.6,10.7,11.3h-.1Z"/>
      </svg>
    ),
    href: routerPaths.mtkit,
    color: '#10b981'
  }
];
