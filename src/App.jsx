import React, { useMemo, useState } from "react";
import {
  BarChart3,
  Blocks,
  Bot,
  Brain,
  Briefcase,
  Building2,
  CalendarDays,
  CircleAlert,
  Database,
  Factory,
  FileText,
  FlaskConical,
  Handshake,
  Landmark,
  Link2,
  MapPin,
  Network,
  RefreshCw,
  Scale,
  Search,
  ShieldAlert,
  Sparkles,
  Target,
  UserCircle2,
  Users,
  Wallet,
  X,
  BadgeCheck,
} from "lucide-react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  LineChart,
  Line,
} from "recharts";

const BRAND = {
  primary: "#b31b34",
  primarySoft: "#f8e8eb",
  primaryBorder: "#efc8d0",
  heroBg: "#e9ebf8",
};

const portalOverview = {
  name: "产业大模型平台",
  subtitle: "面向产业治理、企业服务、成果转化与招商协同的统一门户",
  summary:
    "围绕产业链、创新链、人才链三链融合，构建统一产业智能门户。平台以产业、科技、政策、人才多源数据为底座，以知识图谱、产业RAG、决策推演和多Agent协同为核心引擎，承载企业画像、产业监测、政策分析、供需对接、创新服务、招商引资等场景。",
};

const portalMetrics = [
  { label: "产业数据主题", value: "12+", icon: Database },
  { label: "重点产业链", value: "260+", icon: Link2 },
  { label: "知识图谱节点", value: "10万+", icon: Network },
  { label: "企业服务场景", value: "8", icon: Briefcase },
  { label: "Agent能力", value: "6", icon: Bot },
  { label: "试点方向", value: "2", icon: Target },
];

const applicationCards = [
  { title: "产业运行监测", icon: BarChart3, desc: "产业规模监控、趋势分析、景气指数预警" },
  { title: "产业链分析", icon: Link2, desc: "全景图谱构建、薄弱节点识别、替代路径分析" },
  { title: "企业画像", icon: Building2, desc: "技术路线、投融资、创新能力、风险预警" },
  { title: "政策分析", icon: Scale, desc: "政策解读、政策对比、政策找企/找人" },
  { title: "供需对接", icon: Handshake, desc: "需求发布、智能匹配、工单管理" },
  { title: "智能助手", icon: Bot, desc: "找企业、找技术、找专家、找政策" },
  { title: "创新服务", icon: Sparkles, desc: "专利导航、申报辅导、技术咨询" },
  { title: "招商引资", icon: Target, desc: "企业挖掘、人才引进、投资分析" },
];

const operationTrend = [
  { month: "1月", index: 72, demand: 46 },
  { month: "2月", index: 75, demand: 55 },
  { month: "3月", index: 78, demand: 62 },
  { month: "4月", index: 81, demand: 70 },
  { month: "5月", index: 84, demand: 76 },
  { month: "6月", index: 88, demand: 83 },
];

const assistantExamples = [
  {
    question: "我们企业需要寻找新能源电池领域的技术合作伙伴",
    answers: [
      "合工大新能源研究院｜匹配度 95%｜固态电池技术｜12项核心专利",
      "安徽锂电科技｜匹配度 88%｜动力电池系统｜年产 10GWh",
      "建议优先对接具备中试验证能力的科研团队",
    ],
  },
  {
    question: "请分析安徽省集成电路产业链的薄弱环节",
    answers: [
      "高端EDA、关键材料与部分设备环节供给不足",
      "建议优先引入替代企业并结合人才链开展专项补链",
      "可同步匹配相关政策与重点技术团队",
    ],
  },
];

const enterpriseLibrary = [
  {
    id: "hf-zl",
    companyName: "合肥智链科技有限公司",
    creditCode: "91340100MA8XXXXXXX",
    rating: "AA",
    legalRep: "张明远",
    status: "存续",
    established: "2018-05-16",
    area: "安徽省合肥市高新区",
    registeredCapital: "5000 万元",
    paidInCapital: "3200 万元",
    park: "合肥高新区创新产业园",
    industry: "软件和信息技术服务业",
    strategicIndustry: "新一代信息技术产业",
    tags: ["高新技术企业", "专精特新中小企业", "科技型中小企业"],
    brief: "聚焦产业数据智能、知识图谱与科技成果转化服务。",
    summary:
      "企业聚焦产业数据智能、知识图谱与科技成果转化服务，形成企业画像、产业分析、成果匹配和知识产权服务产品矩阵。",
    metrics: { shareholders: 4, invest: 6, ip: 128, license: 13, finance: 3, risk: 5 },
    scoreData: [
      { subject: "研发实力", company: 86, avg: 70 },
      { subject: "市场竞争力", company: 78, avg: 66 },
      { subject: "技术转化力", company: 82, avg: 61 },
      { subject: "技术先进性", company: 88, avg: 68 },
      { subject: "行业潜力", company: 84, avg: 72 },
    ],
    financeTrend: [
      { year: "2022", income: 8200, asset: 10800 },
      { year: "2023", income: 11600, asset: 14500 },
      { year: "2024", income: 15800, asset: 18600 },
      { year: "2025", income: 20300, asset: 24100 },
    ],
    patentStatusData: [
      { name: "发明授权", value: 18 },
      { name: "发明申请中", value: 12 },
      { name: "实用新型", value: 31 },
      { name: "外观设计", value: 7 },
      { name: "终止/失效", value: 6 },
    ],
    shareholders: [
      ["合肥智产控股有限公司", "2200", "2018-05-10", "44%", "1800"],
      ["安徽创新投资合伙企业", "1500", "2020-08-12", "30%", "900"],
      ["张明远", "900", "2018-05-10", "18%", "400"],
      ["李欣然", "400", "2021-03-21", "8%", "100"],
    ],
    risks: [
      { type: "司法风险", title: "被执行信息", level: "中", detail: "历史被执行案件 1 件，已结案" },
      { type: "经营风险", title: "行政处罚", level: "低", detail: "近三年无重大处罚，仅有 1 条一般性整改记录" },
      { type: "知识产权风险", title: "专利无效", level: "低", detail: "无核心专利被宣告无效记录" },
      { type: "税务风险", title: "欠税公告", level: "低", detail: "暂无欠税公告信息" },
    ],
  },
  {
    id: "ah-rg",
    companyName: "安徽柔感智能装备有限公司",
    creditCode: "91340111MA7XXXXXXX",
    rating: "A+",
    legalRep: "王凯",
    status: "存续",
    established: "2020-03-12",
    area: "安徽省合肥市经开区",
    registeredCapital: "8000 万元",
    paidInCapital: "5000 万元",
    park: "经开区高端装备产业园",
    industry: "专用设备制造业",
    strategicIndustry: "高端装备制造产业",
    tags: ["高新技术企业", "专精特新企业"],
    brief: "聚焦柔性制造、工业机器人与产线集成。",
    summary:
      "企业以工业机器人、柔性制造单元和产线集成为主营方向，具备较强的装备交付能力与行业解决方案能力。",
    metrics: { shareholders: 3, invest: 2, ip: 74, license: 9, finance: 2, risk: 2 },
    scoreData: [
      { subject: "研发实力", company: 80, avg: 68 },
      { subject: "市场竞争力", company: 84, avg: 70 },
      { subject: "技术转化力", company: 79, avg: 64 },
      { subject: "技术先进性", company: 77, avg: 66 },
      { subject: "行业潜力", company: 86, avg: 74 },
    ],
    financeTrend: [
      { year: "2022", income: 6200, asset: 9000 },
      { year: "2023", income: 9200, asset: 12800 },
      { year: "2024", income: 13600, asset: 17200 },
      { year: "2025", income: 18500, asset: 21900 },
    ],
    patentStatusData: [
      { name: "发明授权", value: 11 },
      { name: "发明申请中", value: 10 },
      { name: "实用新型", value: 22 },
      { name: "外观设计", value: 4 },
      { name: "终止/失效", value: 3 },
    ],
    shareholders: [
      ["安徽装备集团有限公司", "4000", "2020-03-12", "50%", "3500"],
      ["合肥智造基金", "2400", "2021-07-20", "30%", "1200"],
      ["王凯", "1600", "2020-03-12", "20%", "300"],
    ],
    risks: [
      { type: "经营风险", title: "合同纠纷", level: "低", detail: "存在 1 条供应合同纠纷，正在协商处理中" },
      { type: "司法风险", title: "裁判文书", level: "低", detail: "近三年无重大涉诉事项" },
    ],
  },
  {
    id: "wd-sx",
    companyName: "皖电芯能科技股份有限公司",
    creditCode: "91340123MA9XXXXXXX",
    rating: "AA+",
    legalRep: "陈思远",
    status: "存续",
    established: "2017-09-08",
    area: "安徽省芜湖市鸠江区",
    registeredCapital: "1.2 亿元",
    paidInCapital: "8500 万元",
    park: "芜湖新能源产业基地",
    industry: "电气机械和器材制造业",
    strategicIndustry: "新能源产业",
    tags: ["高新技术企业", "瞪羚企业", "科技型中小企业"],
    brief: "聚焦动力电池模组、储能系统与材料应用。",
    summary:
      "企业专注于动力电池模组和储能系统研发制造，在新能源赛道具备较强成长性与市场拓展能力。",
    metrics: { shareholders: 5, invest: 3, ip: 96, license: 11, finance: 4, risk: 4 },
    scoreData: [
      { subject: "研发实力", company: 88, avg: 71 },
      { subject: "市场竞争力", company: 83, avg: 69 },
      { subject: "技术转化力", company: 86, avg: 65 },
      { subject: "技术先进性", company: 89, avg: 70 },
      { subject: "行业潜力", company: 91, avg: 76 },
    ],
    financeTrend: [
      { year: "2022", income: 15000, asset: 22000 },
      { year: "2023", income: 19600, asset: 28700 },
      { year: "2024", income: 24800, asset: 33100 },
      { year: "2025", income: 32200, asset: 40500 },
    ],
    patentStatusData: [
      { name: "发明授权", value: 20 },
      { name: "发明申请中", value: 15 },
      { name: "实用新型", value: 28 },
      { name: "外观设计", value: 5 },
      { name: "终止/失效", value: 4 },
    ],
    shareholders: [
      ["皖能产业投资集团", "4200", "2017-09-08", "35%", "4200"],
      ["芜湖产业引导基金", "2400", "2019-05-16", "20%", "1500"],
      ["陈思远", "1800", "2017-09-08", "15%", "800"],
      ["核心团队持股平台", "2400", "2020-11-11", "20%", "1200"],
      ["社会资本", "1200", "2021-08-30", "10%", "800"],
    ],
    risks: [
      { type: "税务风险", title: "发票异常提醒", level: "低", detail: "出现过 1 次发票信息异常，已完成修正" },
      { type: "知识产权风险", title: "专利诉讼", level: "中", detail: "存在 1 项非核心技术专利争议，案件审理中" },
      { type: "经营风险", title: "应收账款偏高", level: "中", detail: "部分大客户账期较长，应加强回款监控" },
    ],
  },
];

const industryConcepts = [
  {
    id: "it",
    name: "新一代信息技术产业",
    relatedCount: 97,
    intro: "覆盖电子元器件、通信网络、软件系统、智能终端等重点方向。",
    hotIndustries: [
      { id: "electronics", name: "电子元器件", relatedCount: 34, image: "电子元器件" },
      { id: "network", name: "网络与通信", relatedCount: 28, image: "网络与通信" },
      { id: "display", name: "光电显示", relatedCount: 17, image: "光电显示" },
      { id: "ai", name: "人工智能", relatedCount: 15, image: "人工智能" },
    ],
  },
  {
    id: "equipment",
    name: "高端装备制造产业",
    relatedCount: 90,
    intro: "聚焦工业母机、机器人、智能装备与关键零部件配套。",
    hotIndustries: [
      { id: "robot", name: "工业机器人", relatedCount: 22, image: "工业机器人" },
      { id: "sensor-equip", name: "智能传感装备", relatedCount: 18, image: "智能传感装备" },
    ],
  },
  {
    id: "material",
    name: "新材料产业",
    relatedCount: 84,
    intro: "面向先进基础材料、电子材料、功能材料等方向。",
    hotIndustries: [
      { id: "semi-material", name: "半导体材料", relatedCount: 16, image: "半导体材料" },
      { id: "display-material", name: "显示材料", relatedCount: 14, image: "显示材料" },
    ],
  },
];

const industryChainDetails = {
  electronics: {
    title: "电子元器件产业链",
    concept: "新一代信息技术产业",
    stats: { levels: 3, categories: 9, nodes: 34, patents: 8684, papers: 2981, experts: 2675, enterprises: "85+" },
    columns: [
      {
        key: "upstream",
        title: "上游产业",
        desc: "原材料、基础元件、生产设备等基础供应环节",
        color: "#ef4444",
        sections: [
          {
            title: "基础元件",
            items: [
              { id: "connector", name: "连接电子部件类", patents: 326, papers: 69, experts: 114, enterprises: 0 },
              { id: "pcb", name: "多层电路板", patents: 9, papers: 12, experts: 3, enterprises: 0 },
              { id: "sensor", name: "传感器元件", patents: 2113, papers: 521, experts: 501, enterprises: 36 },
            ],
          },
          {
            title: "原材料",
            items: [
              { id: "silicon", name: "晶体硅", patents: 65, papers: 46, experts: 46, enterprises: 7 },
              { id: "soft-magnet", name: "软磁材料", patents: 345, papers: 148, experts: 114, enterprises: 13 },
            ],
          },
        ],
      },
      {
        key: "midstream",
        title: "中游产业",
        desc: "制造、封装、测试等核心生产环节",
        color: "#0ea5e9",
        sections: [
          {
            title: "封装测试",
            items: [
              { id: "advanced-packaging", name: "先进封装", patents: 53, papers: 31, experts: 31, enterprises: 8 },
              { id: "chip-test", name: "芯片成品测试", patents: 47, papers: 2, experts: 21, enterprises: 5 },
            ],
          },
          {
            title: "晶圆制造",
            items: [
              { id: "wafer", name: "半导体晶圆", patents: 24, papers: 22, experts: 17, enterprises: 4 },
              { id: "fab", name: "半导体制造", patents: 117, papers: 93, experts: 55, enterprises: 11 },
            ],
          },
        ],
      },
      {
        key: "downstream",
        title: "下游产业",
        desc: "终端产品、应用系统等最终环节",
        color: "#22c55e",
        sections: [
          {
            title: "汽车电子",
            items: [
              { id: "autonomous", name: "自动驾驶系统", patents: 616, papers: 107, experts: 155, enterprises: 22 },
              { id: "lidar", name: "激光雷达", patents: 111, papers: 18, experts: 60, enterprises: 8 },
            ],
          },
          {
            title: "消费电子",
            items: [
              { id: "input-device", name: "输入设备", patents: 209, papers: 70, experts: 94, enterprises: 16 },
              { id: "wearables", name: "可穿戴设备", patents: 263, papers: 119, experts: 80, enterprises: 14 },
            ],
          },
        ],
      },
    ],
  },
};

const chainNodeDetails = {
  connector: {
    title: "连接电子部件类",
    subtitle: "产业名称: 上游-基础元件-连接电子部件类",
    stats: { patents: 326, papers: 69, experts: 114, enterprises: 0 },
    patents: [
      {
        title: "一种用于计算Power函数的硬件运算电路及数据处理方法",
        code: "PAT-CN114860193A",
        tag: "发明授权",
        author: "宋宇锟",
        date: "2025-06-03",
        summary: "本申请公开了一种用于计算Power函数的硬件运算电路及数据处理方法，适用于高可靠电子连接部件控制场景。",
      },
      {
        title: "基于凸轮导轨的可重构机器人快换接口",
        code: "PAT-CN115648186A",
        tag: "发明授权",
        author: "韩亮",
        date: "2025-03-11",
        summary: "提出了一种面向模块化电子组件连接的快换接口方案，提高装配可靠性与维护便利性。",
      },
    ],
    papers: [
      {
        title: "高密度电子连接器可靠性设计研究",
        source: "电子工艺技术",
        date: "2024-08",
        summary: "围绕高密度场景下连接器接触可靠性和热稳定性展开分析。",
      },
      {
        title: "面向汽车电子的微型连接部件封装方法",
        source: "封装技术学报",
        date: "2024-03",
        summary: "探讨复杂工况下连接电子部件类的封装与寿命评估。",
      },
    ],
    experts: [
      { name: "周明", org: "合肥工业大学", field: "电子封装与连接技术" },
      { name: "刘洋", org: "中国科学院微电子所", field: "高可靠电子部件" },
      { name: "韩雪", org: "安徽大学", field: "微型连接结构设计" },
    ],
    enterprises: [],
  },
};

const topModules = [
  { key: "dashboard", label: "平台首页", icon: Brain },
  { key: "monitor", label: "产业监测", icon: BarChart3 },
  { key: "chain", label: "产业链分析", icon: Link2 },
  { key: "portrait", label: "企业画像", icon: Building2 },
  { key: "policy", label: "政策分析", icon: Scale },
  { key: "matching", label: "供需对接", icon: Handshake },
  { key: "assistant", label: "科创汇AI智能助手", icon: Bot },
];

const enterpriseTabs = [
  { key: "overview", label: "企业概况", icon: Building2 },
  { key: "basic", label: "基本信息", icon: Users },
  { key: "operation", label: "经营分析", icon: Briefcase },
  { key: "innovation", label: "创新能力", icon: FlaskConical },
  { key: "risk", label: "风险分析", icon: ShieldAlert },
];

export function filterEnterprises(list, keyword) {
  const normalized = (keyword || "").trim();
  if (!normalized) return list;
  return list.filter((item) =>
    `${item.companyName}${item.industry}${item.strategicIndustry}${item.area}${item.tags.join("")}`.includes(normalized)
  );
}

export function filterIndustries(list, keyword) {
  const normalized = (keyword || "").trim();
  if (!normalized) return list;
  return list.filter((item) => item.name.includes(normalized));
}

function Tag({ children, tone = "red" }) {
  const map = {
    red: "border-red-100 bg-red-50 text-[#b31b34]",
    soft: "border-[#efc8d0] bg-[#f8e8eb] text-[#b31b34]",
    gray: "border-slate-200 bg-white text-slate-600",
  };
  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs ${map[tone]}`}>{children}</span>;
}

function NavTab({ active, icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
        active ? "bg-[#f8e8eb] text-[#b31b34]" : "text-slate-500 hover:bg-slate-50"
      }`}
    >
      <Icon size={16} />
      {label}
    </button>
  );
}

function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="h-1 bg-[#b31b34]" />
      <div className="flex items-center justify-between p-4">
        <div>
          <div className="text-sm text-slate-500">{label}</div>
          <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
        </div>
        <div className="rounded-xl bg-[#f8e8eb] p-3 text-[#b31b34]"><Icon size={18} /></div>
      </div>
    </div>
  );
}

function BlockTitle({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
      <div className="h-8 w-1.5 rounded-full bg-[#b31b34]" />
      <div className="rounded-xl bg-[#f8e8eb] p-2.5 text-[#b31b34]"><Icon size={18} /></div>
      <div>
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

function Table({ headers, rows, firstBrand = true }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-slate-50 text-slate-600">
            {headers.map((h) => (
              <th key={h} className="border-b border-slate-200 px-4 py-3 text-left font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b border-slate-100">
              {row.map((cell, i) => (
                <td key={i} className={`px-4 py-3 ${i === 0 && firstBrand ? "font-medium text-[#b31b34]" : "text-slate-700"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Header({ activeModule, setActiveModule }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-6">
        <div className="flex h-[74px] items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b31b34] text-white shadow-sm">
              <Blocks size={22} />
            </div>
            <div>
              <div className="text-[30px] leading-none font-bold tracking-tight text-[#b31b34]">产学研协同创新平台</div>
              <div className="mt-1 text-sm text-slate-400">Industry-Academic Research Platform</div>
            </div>
          </div>

          <div className="hidden items-center gap-2 xl:flex">
            {topModules.map((item) => (
              <NavTab key={item.key} active={activeModule === item.key} icon={item.icon} label={item.label} onClick={() => setActiveModule(item.key)} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSearch({ title, subtitle, placeholder, hotWords }) {
  return (
    <section className="rounded-none border-b border-slate-200" style={{ backgroundColor: BRAND.heroBg }}>
      <div className="mx-auto max-w-[1500px] px-4 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-slate-900">{title}</h1>
          <p className="mt-5 text-lg text-slate-500">{subtitle}</p>
          <div className="mx-auto mt-12 flex max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200/70">
            <input placeholder={placeholder} className="h-16 flex-1 border-0 bg-white px-6 text-base outline-none placeholder:text-slate-400" />
            <button className="flex h-16 w-20 items-center justify-center bg-[#c7223f] text-white"><Search size={22} /></button>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
            <span className="font-medium">热搜：</span>
            {hotWords.map((w) => <button key={w} className="hover:text-[#b31b34]">{w}</button>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardModule() {
  return (
    <div className="space-y-8">
      <HeroSearch title="产业大模型" subtitle="快速定位产业链、企业、政策、技术需求与创新资源" placeholder="请输入产业名称、企业名称、政策关键词或技术需求..." hotWords={["新能源汽车", "集成电路", "工业软件", "柔性电池", "量子计算", "智能制造"]} />
      <div className="mx-auto max-w-[1500px] px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">{portalMetrics.map((item) => <StatCard key={item.label} {...item} />)}</div>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <BlockTitle icon={Brain} title="平台定位" desc="打造 1 个产业底座 + 1 个匹配中枢 + N 个应用系统的统一产业智能平台。" />
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex flex-wrap gap-2"><Tag>产业底座</Tag><Tag>匹配中枢</Tag><Tag tone="gray">应用系统群</Tag></div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">{portalOverview.name}</h3>
              <div className="mt-2 text-lg text-[#b31b34]">{portalOverview.subtitle}</div>
              <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-600">{portalOverview.summary}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[["统一底座", "产业 / 科技 / 政策 / 人才"],["智能中枢", "三链融合 + RAG + Agent"],["应用场景", "监测 / 画像 / 政策 / 对接 / 招商"],["目标价值", "决策科学化 / 服务智能化"]].map(([k,v]) => <div key={k} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="text-xs text-slate-500">{k}</div><div className="mt-2 font-semibold text-slate-900">{v}</div></div>)}
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between"><div className="flex items-center gap-2 text-2xl font-semibold text-slate-900"><span className="text-[#b31b34]">//</span><span>核心应用系统</span></div><button className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#b31b34]"><RefreshCw size={16} /> 换一换</button></div>
          <div className="grid gap-4 xl:grid-cols-4">
            {applicationCards.map((item) => {
              const Icon = item.icon;
              return <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"><div className="flex items-center gap-3"><div className="rounded-xl bg-[#f8e8eb] p-3 text-[#b31b34]"><Icon size={18} /></div><div className="font-semibold text-slate-900">{item.title}</div></div><p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MonitorModule() {
  return (
    <div>
      <HeroSearch title="产业监测" subtitle="实时追踪重点产业规模、发展趋势与景气指数变化" placeholder="请输入产业名称、地区或监测指标..." hotWords={["产业规模", "景气指数", "营收趋势", "就业规模", "增长极"]} />
      <div className="mx-auto max-w-[1500px] px-4 py-8 lg:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#efc8d0] bg-[#f8e8eb] p-5"><div className="text-sm text-slate-500">产业景气指数</div><div className="mt-2 text-3xl font-semibold text-slate-900">88</div><div className="mt-1 text-sm text-[#b31b34]">较上月 +4</div></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-sm text-slate-500">本月企业需求数</div><div className="mt-2 text-3xl font-semibold text-slate-900">83</div><div className="mt-1 text-sm text-[#b31b34]">持续增长</div></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-sm text-slate-500">政策触达企业数</div><div className="mt-2 text-3xl font-semibold text-slate-900">64</div><div className="mt-1 text-sm text-[#b31b34]">智能推送中</div></div>
        </div>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <BlockTitle icon={BarChart3} title="产业景气指数趋势" desc="围绕指数变化与企业需求活跃度开展监测分析。" />
          <div className="mt-6 h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={operationTrend}><CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" /><XAxis dataKey="month" /><YAxis /><Tooltip /><Line type="monotone" dataKey="index" stroke="#b31b34" strokeWidth={3} dot={{ r: 4 }} /><Line type="monotone" dataKey="demand" stroke="#d26577" strokeWidth={2} dot={{ r: 3 }} /></LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricBadge({ value, label, colorClass = "text-slate-900" }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><div className={`text-3xl font-semibold ${colorClass}`}>{value}</div><div className="mt-2 text-sm text-slate-500">{label}</div></div>;
}

function NodeCountPill({ value, label, tone }) {
  const styles = { blue: "border-blue-200 bg-blue-50 text-blue-600", green: "border-green-200 bg-green-50 text-green-600", orange: "border-orange-200 bg-orange-50 text-orange-600", purple: "border-purple-200 bg-purple-50 text-purple-600" };
  return <span className={`inline-flex rounded-lg border px-2.5 py-1 text-xs ${styles[tone]}`}>{label} {value}</span>;
}

function NodeDetailDrawer({ detail, activeTab, setActiveTab, onClose }) {
  if (!detail) return null;
  const tabs = [{ key: "patents", label: `专利 (${detail.stats.patents})` }, { key: "papers", label: `论文 (${detail.stats.papers})` }, { key: "experts", label: `专家 (${detail.stats.experts})` }, { key: "enterprises", label: `企业 (${detail.stats.enterprises})` }];
  return (
    <div className="fixed inset-0 z-50 flex bg-slate-900/35">
      <div className="flex-1" onClick={onClose} />
      <div className="h-full w-full max-w-[760px] overflow-y-auto bg-[#f8fafc] shadow-2xl">
        <div className="sticky top-0 z-10 bg-[#24344f] px-6 py-5 text-white shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div><div className="text-3xl font-semibold">{detail.title}</div><div className="mt-2 text-sm text-slate-200">{detail.subtitle}</div></div>
            <button onClick={onClose} className="rounded-xl border border-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/10"><X size={16} /></button>
          </div>
        </div>
        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <MetricBadge value={detail.stats.patents} label="专利数量" colorClass="text-blue-500" />
            <MetricBadge value={detail.stats.papers} label="论文数量" colorClass="text-green-500" />
            <MetricBadge value={detail.stats.experts} label="专家数量" colorClass="text-orange-500" />
            <MetricBadge value={detail.stats.enterprises} label="企业数量" colorClass="text-purple-500" />
          </div>
          <div className="mt-8 flex flex-wrap gap-6 border-b border-slate-200 pb-4">
            {tabs.map((tab) => <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`border-b-2 pb-2 text-lg font-medium ${activeTab === tab.key ? "border-blue-500 text-blue-600" : "border-transparent text-slate-600"}`}>{tab.label}</button>)}
          </div>
          <div className="mt-6">
            {activeTab === "patents" && <div className="space-y-4">{detail.patents.map((item) => <div key={item.code} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-xl font-semibold text-slate-900">{item.title}</div><div className="mt-3 flex flex-wrap gap-2"><Tag tone="gray">{item.code}</Tag><Tag tone="soft">{item.tag}</Tag></div><div className="mt-4 space-y-2 text-sm text-slate-500"><div>第一发明人：{item.author}</div><div>授权日期：{item.date}</div><div className="leading-7">摘要：{item.summary}</div></div></div>)}</div>}
            {activeTab === "papers" && <div className="space-y-4">{detail.papers.map((item) => <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-lg font-semibold text-slate-900">{item.title}</div><div className="mt-2 text-sm text-slate-500">来源：{item.source} · 时间：{item.date}</div><div className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</div></div>)}</div>}
            {activeTab === "experts" && <div className="grid gap-4 md:grid-cols-2">{detail.experts.map((item) => <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-lg font-semibold text-slate-900">{item.name}</div><div className="mt-2 text-sm text-slate-500">{item.org}</div><div className="mt-3 text-sm leading-7 text-slate-600">研究方向：{item.field}</div></div>)}</div>}
            {activeTab === "enterprises" && (detail.enterprises.length > 0 ? <div className="grid gap-4 md:grid-cols-2">{detail.enterprises.map((item) => <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-lg font-semibold text-slate-900">{item.name}</div><div className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</div></div>)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">当前节点暂无关联企业数据</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChainModule() {
  const [keyword, setKeyword] = useState("");
  const [selectedConceptId, setSelectedConceptId] = useState(industryConcepts[0].id);
  const [selectedIndustryId, setSelectedIndustryId] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [detailTab, setDetailTab] = useState("patents");
  const selectedConcept = useMemo(() => industryConcepts.find((item) => item.id === selectedConceptId) || industryConcepts[0], [selectedConceptId]);
  const conceptIndustries = useMemo(() => filterIndustries(selectedConcept.hotIndustries, keyword), [selectedConcept, keyword]);
  const selectedIndustry = selectedIndustryId ? industryChainDetails[selectedIndustryId] || null : null;
  const selectedNodeDetail = selectedNodeId ? chainNodeDetails[selectedNodeId] || null : null;

  if (!selectedIndustry) {
    return (
      <div>
        <HeroSearch title="产业链分析" subtitle="先进入产业链主页，查看产业概念与关联产业，再进入具体产业链详情" placeholder="请输入产业概念、产业名称或关键词..." hotWords={["电子元器件", "网络与通信", "光电显示", "人工智能", "高端装备"]} />
        <div className="mx-auto max-w-[1500px] px-4 py-8 lg:px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-8 xl:grid-cols-[280px_1fr]">
              <div>
                <div className="mb-4 text-sm text-slate-500">热门产业概念</div>
                <div className="space-y-3">{industryConcepts.map((concept) => <button key={concept.id} onClick={() => { setSelectedConceptId(concept.id); setKeyword(""); }} className={`w-full rounded-2xl border px-4 py-4 text-left transition ${concept.id === selectedConceptId ? "border-[#7c6cff] bg-[#f3f1ff] shadow-sm" : "border-slate-200 bg-white hover:bg-slate-50"}`}><div className="font-semibold text-slate-900">{concept.name}</div><div className="mt-2 text-sm text-slate-500">相关产业环节：{concept.relatedCount}</div></button>)}</div>
              </div>
              <div>
                <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
                  <div>
                    <h2 className="text-3xl font-semibold text-slate-900">{selectedConcept.name}</h2>
                    <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">{selectedConcept.intro}</p>
                    <div className="mt-6 flex max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white"><input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="输入产业词、产品，例如：电子元器件" className="h-14 flex-1 px-5 outline-none placeholder:text-slate-400" /><button className="flex h-14 w-16 items-center justify-center bg-[#2f6df6] text-white"><Search size={20} /></button></div>
                    <div className="mt-4 text-sm text-slate-500">热搜：锂电池　汽车　手机　电子元器件</div>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_top,#dbeafe,transparent_55%),linear-gradient(135deg,#f8fbff,#f3f4ff)] p-6"><div className="text-sm text-slate-500">产业链概览</div><div className="mt-3 text-4xl font-semibold text-slate-900">4万+</div><div className="mt-2 text-sm text-slate-500">产业环节 · 100万产业上下游关系</div><div className="mt-6 rounded-2xl bg-white/70 p-4 text-sm leading-7 text-slate-600">支持按照产业概念查看相关产业列表，点击具体产业即可进入产业链可视化详情页。</div></div>
                </div>
                <div className="mt-8">
                  <div className="mb-4 flex items-center justify-between"><div className="text-2xl font-semibold text-slate-900">热门产业 · 探索</div><div className="text-sm text-slate-400">点击卡片查看详情页</div></div>
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{conceptIndustries.map((item) => <button key={item.id} onClick={() => setSelectedIndustryId(item.id)} className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><div className="flex h-40 items-center justify-center bg-[linear-gradient(135deg,#4338ca,#8b5cf6)] text-3xl font-semibold text-white">{item.image}</div><div className="p-5"><div className="text-2xl font-semibold text-slate-900">{item.name}</div><div className="mt-3 flex items-center justify-between text-sm"><span className="text-slate-500">相关产业环节：</span><span className="text-2xl font-semibold text-[#2f6df6]">{item.relatedCount}</span></div><div className="mt-4 text-sm font-medium text-[#7c6cff]">详情 →</div></div></button>)}</div>
                  {conceptIndustries.length === 0 && <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">当前关键词下暂无匹配产业</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-8 lg:px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4"><div><div className="text-sm text-slate-500">产业链详情页</div><h2 className="mt-2 text-4xl font-semibold text-slate-900">{selectedIndustry.title}</h2><div className="mt-3 inline-flex rounded-full bg-[#f3f1ff] px-4 py-2 text-sm font-medium text-[#635bff]">产业环节：{selectedIndustry.stats.nodes} 个</div></div><button onClick={() => setSelectedIndustryId(null)} className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-[#635bff] hover:text-[#635bff]">返回产业链主页</button></div>
        <div className="mt-6 rounded-2xl border-l-4 border-[#635bff] bg-slate-100 px-5 py-4 text-lg text-slate-600">点击下方任意节点查看详情</div>
        <div className="mt-8 grid gap-4 md:grid-cols-4 xl:grid-cols-7"><MetricBadge value={selectedIndustry.stats.levels} label="产业链层级" /><MetricBadge value={selectedIndustry.stats.categories} label="主要类别" /><MetricBadge value={selectedIndustry.stats.nodes} label="子类节点" /><MetricBadge value={selectedIndustry.stats.patents} label="专利" colorClass="text-blue-500" /><MetricBadge value={selectedIndustry.stats.papers} label="论文" colorClass="text-green-500" /><MetricBadge value={selectedIndustry.stats.experts} label="专家" colorClass="text-orange-500" /><MetricBadge value={selectedIndustry.stats.enterprises} label="关联企业" /></div>
        <div className="mt-8 grid gap-5 xl:grid-cols-3">{selectedIndustry.columns.map((column) => <div key={column.key} className="rounded-3xl border border-slate-200 bg-white p-5"><div className="flex items-start gap-4"><div className="h-14 w-14 rounded-2xl" style={{ backgroundColor: column.color }} /><div><div className="text-3xl font-semibold text-slate-900">{column.title}</div><div className="mt-2 text-sm text-slate-500">{column.desc}</div></div></div><div className="mt-6 space-y-5">{column.sections.map((section) => <div key={section.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5"><div className="text-2xl font-semibold text-slate-900">{section.title}</div><div className="mt-4 space-y-3">{section.items.map((item) => <button key={item.id} onClick={() => { setSelectedNodeId(item.id); setDetailTab("patents"); }} className="flex w-full items-center justify-between gap-4 rounded-2xl bg-white px-4 py-4 text-left transition hover:shadow-sm"><div className="flex items-center gap-3"><div className="h-10 w-1.5 rounded-full" style={{ backgroundColor: column.color }} /><div className="text-xl font-medium text-slate-900">{item.name}</div></div><div className="flex flex-wrap items-center justify-end gap-2"><NodeCountPill value={item.patents} label="专" tone="blue" /><NodeCountPill value={item.papers} label="文" tone="green" /><NodeCountPill value={item.experts} label="专" tone="orange" /><NodeCountPill value={item.enterprises} label="企" tone="purple" /></div></button>)}</div></div>)}</div></div>)}</div>
      </div>
      <NodeDetailDrawer detail={selectedNodeDetail} activeTab={detailTab} setActiveTab={setDetailTab} onClose={() => setSelectedNodeId(null)} />
    </div>
  );
}

function PolicyModule() { return <div><HeroSearch title="政策分析" subtitle="自动提取政策要点、申报条件、扶持标准并开展智能匹配" placeholder="请输入政策关键词、产业方向或企业资质条件..." hotWords={["政策解读", "政策对比", "高新技术企业", "专精特新", "政策找企"]} /><div className="mx-auto max-w-[1500px] px-4 py-8 lg:px-6"><div className="grid gap-4 xl:grid-cols-3">{[["政策智能解读", "自动提取政策要点、申报条件、扶持标准和适用对象，生成简明摘要。"],["政策对比分析", "横向比较不同地区、不同时期的政策变化，支持差异点追踪。"],["政策找人 / 找企", "匹配企业资质、人才画像和项目条件，实现主动推送和精准服务。"]].map(([t,d]) => <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="font-semibold text-slate-900">{t}</div><p className="mt-3 text-sm leading-6 text-slate-600">{d}</p></div>)}</div></div></div>; }

function MatchingModule() { return <div><HeroSearch title="供需对接" subtitle="以科创汇为基础，完成需求发布、智能匹配、工单管理与创新服务协同" placeholder="请输入技术需求、成果方向、专家领域或企业名称..." hotWords={["需求发布", "成果匹配", "专家推荐", "工单管理", "专利导航"]} /><div className="mx-auto max-w-[1500px] px-4 py-8 lg:px-6"><div className="grid gap-4 xl:grid-cols-3">{[["需求发布", "企业可发布技术需求，系统自动抽取关键词、主题与约束条件。"],["智能匹配", "结合成果库、专家库、专利库和企业库，进行多维推荐与排序优化。"],["工单管理", "对接全过程服务流，支持记录进度、反馈结果与闭环管理。"]].map(([t,d]) => <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="font-semibold text-slate-900">{t}</div><p className="mt-3 text-sm leading-6 text-slate-600">{d}</p></div>)}</div></div></div>; }

function AssistantModule() {
  return <div><HeroSearch title="科创汇AI智能助手" subtitle="找企业、找技术、找专家、找政策，一问即得" placeholder="请输入你的问题，例如：帮我找新能源电池领域的技术合作伙伴..." hotWords={["找专家", "找技术", "找政策", "找企业", "找成果"]} /><div className="mx-auto max-w-[1500px] px-4 py-8 lg:px-6"><div className="grid gap-4 xl:grid-cols-2">{assistantExamples.map((item, idx) => <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500">用户提问</div><div className="mt-2 font-medium text-slate-900">{item.question}</div></div><div className="mt-4 rounded-2xl bg-[#f8e8eb] p-4"><div className="flex items-center gap-2 text-sm font-medium text-[#b31b34]"><Sparkles size={16} /> 智能助手回复</div><div className="mt-3 space-y-2">{item.answers.map((a) => <div key={a} className="rounded-xl bg-white px-3 py-2 text-sm text-slate-700">{a}</div>)}</div></div></div>)}</div></div></div>;
}

function EnterpriseResultPanel({ enterprises, onSelect }) {
  return <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between border-b border-slate-100 px-5 py-4"><div><div className="text-lg font-semibold text-slate-900">企业检索结果</div><div className="mt-1 text-sm text-slate-500">请选择目标企业，进入企业画像详情页</div></div><Tag tone="gray">共 {enterprises.length} 家</Tag></div><div className="overflow-x-auto"><table className="w-full min-w-[1100px] border-collapse text-sm"><thead><tr className="bg-slate-50 text-slate-600"><th className="border-b border-slate-200 px-5 py-4 text-left font-medium">企业名称</th><th className="border-b border-slate-200 px-5 py-4 text-left font-medium">行业</th><th className="border-b border-slate-200 px-5 py-4 text-left font-medium">战略产业</th><th className="border-b border-slate-200 px-5 py-4 text-left font-medium">地区</th><th className="border-b border-slate-200 px-5 py-4 text-left font-medium">企业标签</th><th className="border-b border-slate-200 px-5 py-4 text-left font-medium">知识产权</th><th className="border-b border-slate-200 px-5 py-4 text-left font-medium">风险事项</th><th className="border-b border-slate-200 px-5 py-4 text-left font-medium">操作</th></tr></thead><tbody>{enterprises.map((item) => <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50/70"><td className="px-5 py-4 align-top"><div className="flex items-start gap-3"><div className="rounded-xl bg-slate-100 p-2.5 text-slate-600"><Factory size={16} /></div><div><div className="font-semibold text-slate-900">{item.companyName}</div><div className="mt-1 text-xs text-slate-500">{item.creditCode}</div></div></div></td><td className="px-5 py-4 text-slate-700">{item.industry}</td><td className="px-5 py-4 text-slate-700">{item.strategicIndustry}</td><td className="px-5 py-4 text-slate-700">{item.area}</td><td className="px-5 py-4"><div className="flex max-w-[260px] flex-wrap gap-2">{item.tags.map((tag) => <Tag key={tag} tone="gray">{tag}</Tag>)}</div></td><td className="px-5 py-4 text-slate-700">{item.metrics.ip}</td><td className="px-5 py-4 text-slate-700">{item.metrics.risk}</td><td className="px-5 py-4"><button onClick={() => onSelect(item.id)} className="inline-flex items-center justify-center rounded-xl bg-[#b31b34] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#99172d]">查看画像</button></td></tr>)}</tbody></table></div></div>;
}

function EnterprisePortraitDetail({ selectedEnterprise, onBack }) {
  const [tab, setTab] = useState("overview");
  const [riskKeyword, setRiskKeyword] = useState("");
  const filteredRisks = useMemo(() => {
    const keyword = riskKeyword.trim();
    if (!keyword) return selectedEnterprise.risks;
    return selectedEnterprise.risks.filter((item) => `${item.type}${item.title}${item.detail}`.includes(keyword));
  }, [riskKeyword, selectedEnterprise]);
  const enterpriseMetrics = [
    { label: "股东", value: selectedEnterprise.metrics.shareholders, icon: Users },
    { label: "对外投资", value: selectedEnterprise.metrics.invest, icon: Network },
    { label: "知识产权", value: selectedEnterprise.metrics.ip, icon: BadgeCheck },
    { label: "有效资质", value: selectedEnterprise.metrics.license, icon: FileText },
    { label: "融资事件", value: selectedEnterprise.metrics.finance, icon: Landmark },
    { label: "风险事项", value: selectedEnterprise.metrics.risk, icon: ShieldAlert },
  ];
  return <><div className="mb-6 flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm"><div><div className="text-sm text-slate-500">企业画像详情页</div><div className="mt-1 text-xl font-semibold text-slate-900">{selectedEnterprise.companyName}</div></div><button onClick={onBack} className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:border-[#b31b34] hover:text-[#b31b34]">返回企业检索页</button></div><div className="rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="grid gap-6 bg-[linear-gradient(90deg,#f8e8eb_0%,#ffffff_46%,#fbf5f6_100%)] p-6 lg:grid-cols-[1.5fr_1fr]"><div><div className="flex flex-wrap gap-2"><Tag>科创等级 {selectedEnterprise.rating}</Tag><Tag tone="soft">{selectedEnterprise.status}</Tag><Tag tone="gray">企业画像报告</Tag></div><div className="mt-4 flex flex-wrap items-center gap-3"><h1 className="text-3xl font-semibold tracking-tight text-slate-900">{selectedEnterprise.companyName}</h1><span className="rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-600">详情页</span></div><p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">{selectedEnterprise.summary}</p><div className="mt-4 flex flex-wrap gap-2">{selectedEnterprise.tags.map((i) => <Tag key={i}>{i}</Tag>)}</div></div><div className="grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="flex items-center gap-2 text-xs text-slate-500"><CalendarDays size={14}/>成立时间</div><div className="mt-2 font-semibold">{selectedEnterprise.established}</div></div><div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="flex items-center gap-2 text-xs text-slate-500"><Wallet size={14}/>注册资本</div><div className="mt-2 font-semibold">{selectedEnterprise.registeredCapital}</div></div><div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="flex items-center gap-2 text-xs text-slate-500"><MapPin size={14}/>所属地区</div><div className="mt-2 font-semibold">{selectedEnterprise.area}</div></div><div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="flex items-center gap-2 text-xs text-slate-500"><UserCircle2 size={14}/>法定代表人</div><div className="mt-2 font-semibold">{selectedEnterprise.legalRep}</div></div></div></div><div className="grid gap-4 p-5 md:grid-cols-3 xl:grid-cols-6">{enterpriseMetrics.map((item) => <StatCard key={item.label} {...item} />)}</div></div><div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-5 flex items-center justify-between"><div className="flex items-center gap-2 text-2xl font-semibold text-slate-900"><span className="text-[#b31b34]">//</span><span>企业画像详情</span></div><div className="text-sm text-slate-400">当前企业：{selectedEnterprise.companyName}</div></div><div className="flex flex-wrap gap-2 border-b border-slate-100 pb-5">{enterpriseTabs.map((item) => { const Icon = item.icon; return <NavTab key={item.key} active={tab === item.key} icon={Icon} label={item.label} onClick={() => setTab(item.key)} />; })}</div>{tab === "overview" && <div className="mt-6 space-y-6"><BlockTitle icon={Building2} title="企业概况" desc="展示企业基础档案、科创能力评价和企业综述。" /><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">{[["统一社会信用代码", selectedEnterprise.creditCode],["法定代表人", selectedEnterprise.legalRep],["登记状态", selectedEnterprise.status],["成立日期", selectedEnterprise.established],["所属地区", selectedEnterprise.area],["注册资本", selectedEnterprise.registeredCapital],["实缴资本", selectedEnterprise.paidInCapital],["所属园区", selectedEnterprise.park],["所属行业", selectedEnterprise.industry],["国家战略新兴产业", selectedEnterprise.strategicIndustry]].map(([k,v]) => <div key={k} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="text-xs text-slate-500">{k}</div><div className="mt-2 text-sm font-semibold text-slate-900">{v}</div></div>)}</div><div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]"><div className="rounded-2xl border border-slate-200 p-4"><div className="mb-3 flex items-center justify-between"><div className="font-medium">科创能力雷达</div><Tag>企业 vs 行业均值</Tag></div><div className="h-80"><ResponsiveContainer width="100%" height="100%"><RadarChart data={selectedEnterprise.scoreData} outerRadius="72%"><PolarGrid gridType="polygon" /><PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: "#475569" }} /><Radar name="企业" dataKey="company" stroke="#b31b34" fill="#b31b34" fillOpacity={0.22} /><Radar name="行业均值" dataKey="avg" stroke="#e3a5af" fill="#e3a5af" fillOpacity={0.2} /><Tooltip /></RadarChart></ResponsiveContainer></div></div><div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="font-medium">企业综述</div><p className="mt-3 text-sm leading-7 text-slate-600">{selectedEnterprise.summary}</p><div className="mt-4 space-y-4">{selectedEnterprise.scoreData.map((item) => <div key={item.subject}><div className="mb-2 flex items-center justify-between text-sm"><span>{item.subject}</span><span className="text-slate-500">{item.company} / 100</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-gradient-to-r from-[#b31b34] to-[#d96879]" style={{ width: `${item.company}%` }} /></div></div>)}</div></div></div></div>}{tab === "basic" && <div className="mt-6 space-y-6"><BlockTitle icon={Users} title="基本信息" desc="包括实际控制人、股东结构与对外投资。" /><div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]"><div className="space-y-3"><div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="text-xs text-slate-500">实际控制人</div><div className="mt-2 font-semibold">产业投资主体 / 管理团队</div></div><div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="text-xs text-slate-500">总持股比例</div><div className="mt-2 font-semibold">核心股东集中持股</div><div className="mt-1 text-xs text-slate-500">可扩展为穿透股权图谱和控制链分析</div></div><div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="text-xs text-slate-500">企业基础摘要</div><div className="mt-2 text-sm leading-7 text-slate-700">{selectedEnterprise.companyName} 所属 {selectedEnterprise.industry}，位于 {selectedEnterprise.area}，面向 {selectedEnterprise.strategicIndustry} 方向开展布局。</div></div></div><div className="rounded-2xl border border-slate-200 p-4"><div className="mb-3 font-medium">股东信息</div><Table headers={["股东名称", "认缴出资额(万元)", "认缴日期", "股权占比", "实缴出资额(万元)"]} rows={selectedEnterprise.shareholders} /></div></div></div>}{tab === "operation" && <div className="mt-6 space-y-6"><BlockTitle icon={Briefcase} title="经营分析" desc="展示财务总览、趋势和融资情况。" /><div className="grid gap-3 md:grid-cols-5">{[["纳税等级", "A级"],["纳税人类型", "增值税一般纳税人"],["销售收入区间", "1亿~5亿"],["利润区间", "1000万~5000万"],["资产负债率区间", "0%~30%"]].map(([k,v]) => <div key={k} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="text-xs text-slate-500">{k}</div><div className="mt-2 font-semibold">{v}</div></div>)}</div><div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]"><div className="rounded-2xl border border-slate-200 p-4"><div className="mb-3 flex items-center justify-between"><div className="font-medium">经营趋势</div><div className="text-sm text-slate-500">收入、资产趋势</div></div><div className="h-80"><ResponsiveContainer width="100%" height="100%"><AreaChart data={selectedEnterprise.financeTrend}><CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" /><XAxis dataKey="year" /><YAxis /><Tooltip /><Area type="monotone" dataKey="income" stroke="#b31b34" fill="#f7dbe0" /><Area type="monotone" dataKey="asset" stroke="#d26577" fill="#faecef" /></AreaChart></ResponsiveContainer></div></div><div className="space-y-3">{[["Pre-A轮", "500 万", "2021-06-10"],["A轮", "3000 万", "2023-04-20"],["B轮", "8000 万", "2024-11-08"]].map(([round,money,date]) => <div key={round} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="flex items-center justify-between"><div className="font-semibold">{round}</div><Tag tone="gray">{date}</Tag></div><div className="mt-2 text-sm text-slate-600">融资金额：{money}</div><div className="mt-1 text-xs text-slate-500">投资机构：产业基金 / 市场化投资机构</div></div>)}</div></div></div>}{tab === "innovation" && <div className="mt-6 space-y-6"><BlockTitle icon={FlaskConical} title="创新能力分析" desc="展示科创评分、专利状态与创新能力结构。" /><div className="grid gap-6 xl:grid-cols-2"><div className="rounded-2xl border border-slate-200 p-4"><div className="mb-3 font-medium">专利状态分布</div><div className="h-80"><ResponsiveContainer width="100%" height="100%"><BarChart data={selectedEnterprise.patentStatusData}><CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" /><XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} angle={-12} textAnchor="end" height={60} /><YAxis /><Tooltip /><Bar dataKey="value" fill="#b31b34" radius={[6, 6, 0, 0]} /></BarChart></ResponsiveContainer></div></div><div className="space-y-3">{[["技术路线分析", "梳理企业核心技术、研发投入和创新成果。"],["投融资监测", "持续追踪企业融资动态、投资布局和资本运作。"],["创新成果应用", "围绕专利转让、质押、许可等识别成果转化能力。"]].map(([t,d]) => <div key={t} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="font-medium">{t}</div><div className="mt-2 text-sm leading-6 text-slate-600">{d}</div></div>)}</div></div></div>}{tab === "risk" && <div className="mt-6 space-y-6"><BlockTitle icon={ShieldAlert} title="风险分析" desc="围绕司法风险、经营风险、税务风险和知识产权风险进行展示。" /><div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]"><div className="rounded-2xl border border-[#efc8d0] bg-[#f8e8eb] p-5"><div className="flex items-center gap-2 text-sm font-medium text-[#b31b34]"><CircleAlert size={16} /> 当前综合风险等级</div><div className="mt-3 text-3xl font-semibold text-slate-900">{selectedEnterprise.metrics.risk >= 4 ? "中低风险" : "低风险"}</div><p className="mt-2 text-sm leading-6 text-slate-600">支持按照当前企业的风险事件数量和风险等级进行动态呈现。</p></div><div className="relative"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input value={riskKeyword} onChange={(e) => setRiskKeyword(e.target.value)} placeholder="搜索风险类型 / 风险描述" className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 outline-none" /></div></div><div className="grid gap-4 xl:grid-cols-2">{filteredRisks.map((item) => <div key={`${item.title}-${item.detail}`} className="rounded-2xl border border-slate-200 p-5"><div className="flex items-start justify-between gap-4"><div><div className="text-sm text-slate-500">{item.type}</div><div className="mt-1 text-lg font-semibold text-slate-900">{item.title}</div></div><Tag tone={item.level === "中" ? "gray" : "soft"}>{item.level}风险</Tag></div><p className="mt-4 text-sm leading-6 text-slate-600">{item.detail}</p><div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">建议增加发生时间、处置进度、影响范围、是否已消除等字段。</div></div>)}{filteredRisks.length === 0 && <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500 xl:col-span-2">当前关键词下暂无匹配风险项</div>}</div></div>}</div></>;
}

function EnterprisePortraitModule() {
  const [libraryKeyword, setLibraryKeyword] = useState("");
  const [selectedEnterpriseId, setSelectedEnterpriseId] = useState(null);

  const filteredEnterprises = useMemo(
    () => filterEnterprises(enterpriseLibrary, libraryKeyword),
    [libraryKeyword]
  );

  const selectedEnterprise = useMemo(
    () => enterpriseLibrary.find((item) => item.id === selectedEnterpriseId) || null,
    [selectedEnterpriseId]
  );

  const hasSearched = libraryKeyword.trim().length > 0;

  if (selectedEnterprise) {
    return (
      <div className="mx-auto max-w-[1500px] px-4 py-8 lg:px-6">
        <EnterprisePortraitDetail
          selectedEnterprise={selectedEnterprise}
          onBack={() => setSelectedEnterpriseId(null)}
        />
      </div>
    );
  }

  return (
    <div>
      <HeroSearch
        title="企业画像"
        subtitle="企业画像导航页：先了解能力与使用方式，再检索企业进入画像详情页"
        placeholder="请输入企业名称、统一社会信用代码或产业关键词..."
        hotWords={["高新技术企业", "专精特新", "企业风险", "投融资监测", "创新能力"]}
      />

      <div className="mx-auto max-w-[1500px] px-4 py-8 lg:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr_0.6fr]">
            <div className="relative xl:col-span-2">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={libraryKeyword}
                onChange={(e) => setLibraryKeyword(e.target.value)}
                placeholder="搜索企业名称 / 行业 / 战略产业 / 标签"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 outline-none focus:border-[#b31b34]"
              />
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-[#efc8d0] bg-[#f8e8eb] px-4 py-3">
              <div>
                <div className="text-xs text-slate-500">检索结果</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  {hasSearched ? filteredEnterprises.length : enterpriseLibrary.length} 家企业
                </div>
              </div>
              <Building2 className="text-[#b31b34]" size={20} />
            </div>
          </div>
        </div>

        {!hasSearched ? (
          <div className="mt-6 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#efc8d0] bg-[#f8e8eb] px-4 py-2 text-sm font-medium text-[#b31b34]">
                    <Building2 size={16} /> 企业画像主页
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900">
                    面向企业检索、画像分析与风险研判的一站式入口
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600">
                    企业画像模块聚焦企业全景认知，支持从企业检索、基础档案、经营趋势、创新能力到风险事项的多维分析。你可以先输入企业名称或行业关键词，系统会返回匹配结果列表，再进入对应企业的画像详情页查看完整信息。
                  </p>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="text-sm font-medium text-slate-900">企业检索</div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">支持按企业名称、行业、战略产业、标签快速筛选目标企业。</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="text-sm font-medium text-slate-900">画像详情</div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">查看企业概况、股东结构、经营分析、创新能力与风险分析。</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="text-sm font-medium text-slate-900">辅助决策</div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">为招商引资、成果转化、企业服务与产业研判提供决策支撑。</div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-xs text-slate-500">覆盖企业</div>
                    <div className="mt-2 text-3xl font-semibold text-slate-900">3,200+</div>
                    <div className="mt-2 text-sm text-slate-500">支持重点产业企业持续扩充</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-xs text-slate-500">画像维度</div>
                    <div className="mt-2 text-3xl font-semibold text-slate-900">5 大类</div>
                    <div className="mt-2 text-sm text-slate-500">基础、经营、创新、风险等</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2">
                    <div className="text-sm font-medium text-slate-900">使用方式</div>
                    <div className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                      <div className="flex gap-3"><span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#f8e8eb] text-xs font-semibold text-[#b31b34]">1</span><span>在上方输入框输入企业名称、行业或标签关键词。</span></div>
                      <div className="flex gap-3"><span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#f8e8eb] text-xs font-semibold text-[#b31b34]">2</span><span>检索后系统会以列表形式展示匹配企业结果。</span></div>
                      <div className="flex gap-3"><span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#f8e8eb] text-xs font-semibold text-[#b31b34]">3</span><span>点击“查看画像”进入详情页，查看企业全景画像与分析结果。</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <EnterpriseResultPanel enterprises={filteredEnterprises} onSelect={setSelectedEnterpriseId} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [activeModule, setActiveModule] = useState("dashboard");
  return <div className="min-h-screen bg-[#f4f6fb] text-slate-900"><Header activeModule={activeModule} setActiveModule={setActiveModule} />{activeModule === "dashboard" && <DashboardModule />}{activeModule === "monitor" && <MonitorModule />}{activeModule === "chain" && <ChainModule />}{activeModule === "portrait" && <EnterprisePortraitModule />}{activeModule === "policy" && <PolicyModule />}{activeModule === "matching" && <MatchingModule />}{activeModule === "assistant" && <AssistantModule />}</div>;
}
