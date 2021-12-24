const dict = {
  '3rd-highschool': {
    arabic: 'السنة الثالثة ثنوي',
    french: 'abcd efgh',
  },
  '4th-middleschool': {
    arabic: 'السنة الرابعة متوسط',
    french: 'abcd efgh',
  },
  'science-branch': {
    arabic: 'شعبة علوم الطبيعة والحياة',
    french: 'abcd efgh',
  },
  'math-branch': {
    arabic: 'شعبة رياضيات',
    french: 'abcd efgh',
  },
  'lit-branch': {
    arabic: 'شعبة اداب وفلسفة',
    french: 'abcd efgh',
  },
  'math-subject': {
    arabic: 'مادة الرياضيات',
    french: 'abcd efgh',
  },
  'physics-subject': {
    arabic: 'مادة الفيزياء',
    french: 'abcd efgh',
  },
  'science-subject': {
    arabic: 'مادة علوم الطبيعة والحياة',
    french: 'abcd efgh',
  },
}

const arabicDict = prop => {
  if (dict[prop]) return dict[prop].arabic
  else return 'مش موجود'
}

const frenchDict = prop => {
  if (dict[prop]) return dict[prop].french
  else return 'N existe pas'
}

const langDict = {
  ar: prop => {
    if (dict[prop]) return dict[prop].arabic
    else return 'مش موجود'
  },
  fr: prop => {
    if (dict[prop]) return dict[prop].french
    else return 'N existe pas'
  },
}

export {arabicDict, frenchDict, langDict}
