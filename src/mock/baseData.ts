import { v4 as uuidv4 } from 'uuid'

export default {
  id: uuidv4(),
  name: '分析图谱',
  children: [
    {
      id: uuidv4(),
      name: '行业管理',
      children: [
        {
          id: '11',
          name:
            '这是一段超长的文本这是 一段超长 的文本 这是一段超长 ，的文本这是， 一段超长的文本这是一段超长的文本这是一段超长的文本这是一段超长的文本这是一段超长的文本',
          children: [
            {
              id: uuidv4(),
              name: '资本市场服务 abcdefghijklmnopqrstuvwxyz'
            },
            {
              id: uuidv4(),
              name: '货币金融服务'
            },
            {
              id: uuidv4(),
              name: '资本市场服务'
            }
          ]
        },
        {
          id: '12',
          name:
            '批发和零售业批发和零售业批发和零售业批发和   零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业批发和零售业',
          children: [
            {
              id: uuidv4(),
              name: '资本市场服务 abcdefghijklmnopqrstuvwxyzfajfjajfajfjajfj'
            },
            {
              id: uuidv4(),
              name: '货币金融服务'
            },
            {
              id: uuidv4(),
              name: '资本市场服务'
            }
          ]
        },
        {
          id: uuidv4(),
          name: '制造业'
        },
        {
          id: uuidv4(),
          name: '建筑业'
        },
        {
          id: uuidv4(),
          name: '房地产业'
        },
        {
          id: '13',
          name:
            '这是一段超长的文本这是 一段超长 的文本 这是一段超长 ，的文本这是， 一段超长的文本这是一段超长的文本这是一段超长的文本这是一段超长的文本这是一段超长的文本     这是一段超长的文本这是 一段超长 的文本 这是一段超长 ，的文本这是， 一段超长的文本这是一段超长的文本这是一段超长的文本这是一段超长的文本这是一段超长的文本'
        }
      ]
    },
    {
      id: uuidv4(),
      name: '事项管理',
      children: [
        {
          id: uuidv4(),
          name: '生产经营事项'
        },
        {
          id: uuidv4(),
          name: '跨境事项'
        },
        {
          id: uuidv4(),
          name: '投资事项'
        }
      ]
    }
  ]
}
