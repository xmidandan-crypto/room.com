/**
 * ★★★ 全站内容都在这里 ★★★
 *
 * 已经按你填的内容整理好：去掉了占位用的【】，统一了中文与数字之间的空格。
 * 以后想改哪一块，直接改对应字段即可；不确定位置的可以看隔壁「填写指南.md」。
 *
 * 页面上从上到下的顺序（和下面的代码顺序一致）：
 *   ① 顶栏 ② 资料卡 ③ 正文 ④ 关键词 ⑤ @提及 ⑥ 配图 ⑦ 时间与数字
 *   ⑧ 两条评论 ⑨ 提示与页脚
 *
 * 图片：文件放进 public/ 目录，src 写成 "/文件名.jpg"；
 *       保持 null 时，头像显示名字首字，配图显示占位框。
 *
 * 文字如果还被写成「【可输入文字·xxx】」，页面会自动显示成浅灰，提醒你还没填。
 */

/** 占位符的固定开头：文字还以它开头，页面就显示成浅灰 */
export const PLACEHOLDER = "【可输入文字";

export type ImageSlot = {
  /** 例："/avatar.jpg"（文件放 public/ 下）。null = 用首字/占位框兜底 */
  src: string | null;
  /** 图片描述；没有图时，1–2 个字会拿来当头像文字 */
  alt: string;
  /** 配图比例，默认 "2.33 / 1"；方图写 "1 / 1"，竖图写 "4 / 5" */
  ratio?: string;
};

/* ============ ① 顶栏 ============ */

export type SiteInfo = {
  title: string;
  domain: string;
  name: string;
  description: string;
};

export const site: SiteInfo = {
  title: "留的个人主页",
  domain: "room.lovestory",
  name: "room",
  description: "你找到我的房间了吗",
};

/* ============ ② 资料卡 ============ */

export type Profile = {
  displayName: string;
  handle: string;
  avatar: ImageSlot;
  meta: string[];
  badge: string;
  following: number;
  followers: string;
};

export const profile: Profile = {
  displayName: "留",
  handle: "@room",

  /** 头像：想换成真实图片，把 src 改成 "/avatar.jpg" */
  avatar: {
    src: null,
    alt: "留",
  },

  /** 斜杠分隔的身份标签 */
  meta: ["24", "T", "土象处女"],

  /** 昵称下方的灰边小徽章；不想显示就写 "" */
  badge: "回击时的分寸是刻意设计好的吗",

  /** 关注数 */
  following: 0,

  /** 粉丝数 */
  followers: "9.8 万",
};

/* ============ ③–⑦ 置顶帖 ============ */

export type PostCounts = {
  reply: number;
  repost: number;
  quote: number;
  like: number;
  bookmark: number;
};

export type Post = {
  id: string;
  pinned: boolean;
  lines: string[];
  tags: string[];
  mention: string;
  media: ImageSlot;
  timestamp: string;
  views: number;
  counts: PostCounts;
};

export const post: Post = {
  id: "post",
  pinned: true,

  /** ③ 正文：每一项一行，自动右对齐 */
  lines: [
    "留白是很重要的，无论是人和人之间的关系还是探索世界",
    "我宁可只存活于人记忆里鲜活的一瞬间，也不要作为物品一样被长久地使用和消耗",
  ],

  /** ④ 关键词组 */
  tags: ["极度排外", "不闲聊"],

  /** ⑤ @提及 */
  mention: "应",

  /** ⑥ 配图：方图用 "1 / 1"，横图用 "2.33 / 1"，竖图用 "4 / 5" */
  media: {
    src: "/cover.jpg",
    alt: "PATTERN COFFEE 的冰拿铁与树莓甜点",
    ratio: "1 / 1",
  },

  /** ⑦ 发布时间 */
  timestamp: "5.20 上午 · 9 月 8 日",

  /** ⑦ 浏览量 */
  views: 521,

  /** ⑦ 底部图标的五个计数 */
  counts: {
    reply: 20,
    repost: 6,
    quote: 3,
    like: 1800,
    bookmark: 0,
  },
};

/* ============ ⑧ 两条评论 ============ */

export type Reply = {
  id: string;
  name: string;
  handle: string;
  to: string;
  body: string;
  avatar: ImageSlot;
  views: number;
  likes: number;
  reposts: number;
};

export const replies: Reply[] = [
  {
    id: "r1",
    name: "YING",
    handle: "@ying222",
    to: "留",
    body: "时间能带走什么？",
    avatar: { src: null, alt: "Y" },
    views: 156,
    likes: 134,
    reposts: 4,
  },
  {
    id: "r2",
    name: "MAI",
    handle: "@mai0602",
    to: "留",
    body: "我不愿意一个人吃冰激凌 TVT",
    avatar: { src: null, alt: "M" },
    views: 164,
    likes: 58,
    reposts: 3,
  },
];

/* ============ ⑨ 提示与页脚 ============ */

export const hint = {
  lines: ["打开蓝色下划字体", "探索房间纱帘后的世界"],
};

export const footer = {
  location: "ip 属地来自 恨海情天",
  disclaimer: "纯 le 陪玩团",
};

/* ============ 页尾小字 ============ */

export const more = {
  /** 页面最下方那行粉色小字 */
  text: "and more....",
} as const;
