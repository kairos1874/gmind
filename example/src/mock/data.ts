export default {
  name: '全景分析图谱',
  children: [
    {
      name: '行业',
      children: [
        {
          name: '农、林、牧、渔业',
          children: [
            { name: '农业' },
            { name: '林业' },
            { name: '畜牧业' },
            { name: '渔业' },
            { name: '农、林、牧、渔专业及辅助性活动' }
          ]
        },
        {
          name: '采矿业',
          children: [
            { name: '煤炭开采和洗选业' },
            { name: '石油和天然气开采业' },
            { name: '黑色金属矿采选业' },
            { name: '有色金属矿采选业' },
            { name: '非金属矿采选业' }
          ]
        },
        {
          name: '制造业',
          children: [
            { name: '农副食品加工业' },
            { name: '食品制造业' },
            { name: '酒、饮料和精制茶制造业' },
            { name: '烟草制品业' },
            { name: '纺织业' }
          ]
        },
        {
          name: '电力、热力、燃气及水生产和供应业',
          children: [
            { name: '电力、热力生产和供应业' },
            { name: '燃气生产和供应业' },
            { name: '水的生产和供应业' }
          ]
        },
        {
          name: '建筑业',
          children: [
            { name: '房屋建筑业' },
            { name: '土木工程建筑业' },
            { name: '建筑安装业' },
            { name: '建筑装饰、装修和其他建筑业' }
          ]
        },
        {
          name: '批发和零售业',
          children: [{ name: '批发业' }, { name: '零售业' }]
        },
        {
          name: '交通运输、仓储和邮政业',
          children: [
            { name: '铁路运输业' },
            { name: '道路运输业' },
            { name: '水上运输业' },
            { name: '航空运输业' },
            { name: '管道运输业' },
            { name: '多式联运和运输代理业' },
            { name: '装卸搬运和仓储业' },
            { name: '邮政业' }
          ]
        },
        {
          name: '住宿和餐饮业',
          children: [{ name: '住宿业' }, { name: '餐饮业' }]
        },
        {
          name: '信息传输、软件和信息技术服务业',
          children: [
            { name: '电信、广播电视和卫星传输服务' },
            { name: '互联网和相关服务' },
            { name: '软件和信息技术服务业' }
          ]
        },
        {
          name: '金融业',
          children: [
            { name: '货币金融服务' },
            { name: '资本市场服务' },
            { name: '保险业' },
            { name: '其他金融业' }
          ]
        },
        {
          name: '房地产业',
          children: [{ name: '房地产业' }]
        },
        {
          name: '租赁和商务服务业',
          children: [{ name: '租赁业' }, { name: '商务服务业' }]
        },
        {
          name: '科学研究和技术服务业',
          children: [
            { name: '研究和试验发展' },
            { name: '专业技术服务业' },
            { name: '科技推广和应用服务业' }
          ]
        },
        {
          name: '水利、环境和公共设施管理业',
          children: [
            { name: '水利管理业' },
            { name: '生态保护和环境治理业' },
            { name: '公共设施管理业' },
            { name: '土地管理业' }
          ]
        },
        {
          name: '居民服务、修理和其他服务业',
          children: [
            { name: '居民服务业' },
            { name: '机动车、电子产品和日用产品修理业' },
            { name: '其他服务业' }
          ]
        },
        {
          name: '教育',
          children: [{ name: '教育' }]
        },
        {
          name: '卫生和社会工作',
          children: [{ name: '卫生' }, { name: '社会工作' }]
        },
        {
          name: '文化、体育和娱乐业',
          children: [
            { name: '新闻和出版业' },
            { name: '广播、电视、电影和录音制作业' },
            { name: '文化艺术业' },
            { name: '体育' },
            { name: '娱乐业' }
          ]
        },
        {
          name: '公共管理、社会保障和社会组织',
          children: [
            { name: '中国共产党机关' },
            { name: '国家机构' },
            { name: '人民政协、民主党派' },
            { name: '社会保障' },
            { name: '群众团体、社会团体和其他成员组织' },
            { name: '基层群众自治组织及其他组织' }
          ]
        },
        {
          name: '国际组织',
          children: [{ name: '组织' }]
        },
        {
          name: '税务管理特定行业',
          children: [{ name: '其他税务管理特定行业' }]
        }
      ]
    },

    {
      name: '税费种',
      children: [
        { name: '增值税' },
        { name: '消费税' },
        { name: '企业所得税' },
        { name: '个人所得税' },
        { name: '资源税' },
        { name: '城市维护建设税' },
        { name: '房产税' },
        { name: '印花税' },
        { name: '城镇土地使用税' },
        { name: '土地增值税' },
        { name: '车船税' },
        { name: '船舶吨税' },
        { name: '车辆购置税' },
        { name: '关税' },
        { name: '耕地占用税' },
        { name: '契税' },
        { name: '烟叶税' },
        { name: '环境保护税' },
        { name: '教育费附加' },
        { name: '地方教育附加' },
        { name: '文化事业建设费' },
        { name: '其他非税收入' }
      ]
    },

    {
      name: '事项',
      children: [
        {
          name: '生产经营事项',
          children: [
            { name: '收入类事项' },
            { name: '成本类事项' },
            { name: '费用类事项' },
            { name: '股权激励' }
          ]
        },
        {
          name: '跨境事项',
          children: [
            { name: '对外支付' },
            { name: '股权转让' },
            { name: '股息红利' }
          ]
        },
        {
          name: '投资事项',
          children: [
            { name: '国债利息' },
            { name: '股息红利' },
            { name: '非货币性资产投资' },
            { name: '股权转让' }
          ]
        },
        { name: '税种比对' }
      ]
    },

    {
      name: '任务类型',
      children: [
        { name: '总局快反任务' },
        { name: '总局千户集团' },
        { name: '自然人异议申诉' },
        { name: '总局其他任务' },
        {
          name: '市局快反任务',
          children: [
            { name: '增值税发票快反任务' },
            { name: '新设立登记户户籍风险' },
            { name: '人工智能识别涉嫌虚开风险' },
            { name: '税收风险快速反应' }
          ]
        },
        {
          name: '市局非快反任务',
          children: [
            { name: '市局处室任务' },
            { name: '市局派出机构任务' },
            { name: '税收大数据和风险管理局任务' }
          ]
        },
        { name: '区局基础性风险' },
        { name: '区局实质性风险' }
      ]
    }
  ]
}
