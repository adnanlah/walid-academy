import {lorem, random} from '../util/helpers'

const grades = [
  {value: '3rd-highschool', label: 'سنة ثالثة ثانوي'},
  {value: '4th-middleschool', label: 'سنة ثانية ثانوي'},
]

const branchs = [
  {value: 'math', label: 'شعبة رياضيات'},
  {value: 'management', label: 'شعبة تسيير واقتصاد'},
  {value: 'science', label: 'شعبة علوم طبيعة وحياة'},
]

const subjects = [
  {value: 'math', label: 'رياضيات'},
  {value: 'physics', label: 'فيزياء'},
  {value: 'science', label: 'علوم الطبيعة والحياة'},
]

const provinces = [
  {
    value: '01',
    label: 'أدرار',
  },
  {
    value: '02',
    label: 'الشلف',
  },
  {
    value: '03',
    label: 'الأغواط',
  },
  {
    value: '04',
    label: 'أم البواقي',
  },
  {
    value: '05',
    label: 'باتنة',
  },
]

const districts = [
  {
    value: '01',
    label: 'أدرار',
  },
  {
    value: '02',
    label: 'الشلف',
  },
  {
    value: '03',
    label: 'الأغواط',
  },
  {
    value: '04',
    label: 'أم البواقي',
  },
  {
    value: '05',
    label: 'باتنة',
  },
]

const municipalities = [
  {
    value: '01',
    label: 'أدرار',
  },
  {
    value: '02',
    label: 'الشلف',
  },
  {
    value: '03',
    label: 'الأغواط',
  },
  {
    value: '04',
    label: 'أم البواقي',
  },
  {
    value: '05',
    label: 'باتنة',
  },
]

const course = {
  id: 0,
  title: lorem(6),
  grade: '3rd-highschool',
  subject: 'math',
  branch: 'science',
  thumbnail: '',
  rating: 4,
  reviewsCount: 3,
  user: {id: 1, name: 'محمد علي'},
  length: 360,
  forumPostLink: '/forum/post/123',
  cost: 'subsciption',
  description: lorem(50),
}

const courses = [...Array(10)].map((_, index) => {
  return {
    ...course,
    // override
    id: index,
    rating: random(0, 5),
    title: lorem(6),
  }
})

const reviews = [
  {
    id: 0,
    user: {id: 1, name: 'محمد علي'},
    rating: 0,
    text: lorem(10),
  },

  {
    id: 1,
    user: {id: 1, name: 'محمد علي'},
    rating: 1,
    text: lorem(30),
  },

  {
    id: 2,
    user: {id: 1, name: 'محمد علي'},
    rating: 2,
    text: lorem(20),
  },

  {
    id: 3,
    user: {id: 1, name: 'محمد علي'},
    rating: 3,
    text: lorem(40),
  },

  {
    id: 4,
    user: {id: 1, name: 'محمد علي'},
    rating: 4,
    text: lorem(25),
  },
]

const users = [
  {
    id: 1,
    name: 'محمد علي',
    type: 'teacher',
    description: '',
    coursesCount: 2,
  },
]

const chapters = [
  {
    id: 0,
    title: 'الشابتر الاول',
  },
  {
    id: 1,
    title: 'الشابتر الثاني',
  },
]

const questions = [
  {
    id: 1,
    imageUrl: 'https://placekitten.com/408/287',
    content: 'السؤاال الاول هو كاالتالي',
    correctAnswer: 3,
    options: [
      {
        id: 1,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: false,
      },
      {
        id: 2,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: false,
      },
      {
        id: 3,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: false,
      },
    ],
  },
  {
    id: 2,
    imageUrl: 'https://placekitten.com/408/287',
    content: 'السؤاال الاول هو كاالتالي',
    correctAnswer: 1,
    options: [
      {
        id: 1,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: false,
      },
      {
        id: 2,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: false,
      },
      {
        id: 3,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: false,
      },
      {
        id: 4,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: true,
      },
      {
        id: 5,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: true,
      },
    ],
  },
  {
    id: 3,
    imageUrl: 'https://placekitten.com/408/287',
    content: 'السؤاال الاول هو كاالتالي',
    correctAnswer: 2,
    options: [
      {
        id: 1,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: false,
      },
      {
        id: 2,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: false,
      },
      {
        id: 3,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: false,
      },
      {
        id: 4,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: true,
      },
    ],
  },
  {
    id: 4,
    imageUrl: 'https://placekitten.com/408/287',
    content: 'السؤاال الاول هو كاالتالي',
    correctAnswer: 3,
    options: [
      {
        id: 1,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: false,
      },
      {
        id: 2,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: false,
      },
      {
        id: 3,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: false,
      },
      {
        id: 4,
        content: 'الخيار رقم واحد هنا والخيار الثاني هناك',
        isCorrent: true,
      },
    ],
  },
]

const lessons = [
  {
    id: 1,
    type: 'media',
    title: lorem(7),
    description: lorem(20),
    videoUrl: '',
    chapterId: 0,
    courseId: 0,
    length: 120,
    quiz: questions,
  },
  {
    id: 2,
    type: 'media',
    title: lorem(7),
    description: lorem(20),
    videoUrl: '',
    chapterId: 0,
    courseId: 0,
    length: 120,
  },
  {
    id: 3,
    type: 'media',
    title: lorem(7),
    description: lorem(20),
    videoUrl: '',
    chapterId: 0,
    courseId: 0,
    length: 120,
    quiz: questions,
  },
  {
    id: 4,
    type: 'media',
    title: lorem(7),
    description: lorem(20),
    videoUrl: '',
    chapterId: 1,
    courseId: 0,
    length: 120,
  },

  {
    id: 5,
    type: 'media',
    title: lorem(7),
    description: lorem(20),
    videoUrl: '',
    chapterId: 1,
    courseId: 0,
    length: 120,
    quiz: questions,
  },

  {
    id: 6,
    type: 'media',
    title: lorem(7),
    description: lorem(20),
    videoUrl: '',
    chapterId: 1,
    courseId: 0,
    length: 120,
    quiz: questions,
  },
  {
    id: 7,
    type: 'quiz',
    title: lorem(7),
    description: lorem(20),
    videoUrl: '',
    chapterId: 1,
    courseId: 0,
    length: 120,
    quiz: questions,
  },
]

const attachments = [
  {
    id: 1,
    title: 'الملف الاول',
    fileUrl: '',
    lessonId: 1,
  },
]

const comments = [
  {
    id: 1,
    lessonId: 1,
    body: 'التعليق الاول',
    user: {id: 1, name: 'محمد علي'},
    parentId: null,
    createdAt: '2021-08-15T23:01:33.010+02:00',
  },
  {
    id: 2,
    lessonId: 1,
    body: 'التعليق الثاني',
    user: {id: 1, name: 'محمد علي'},
    parentId: null,
    createdAt: '2021-08-14T23:02:33.010+02:00',
  },
  {
    id: 3,
    lessonId: 1,
    body: 'التعليق الاول على التعليق الاول',
    user: {id: 1, name: 'محمد علي'},
    parentId: 1,
    createdAt: '2021-08-18T23:03:33.010+02:00',
  },
  {
    id: 4,
    lessonId: 1,
    body: 'التعليق الاول على التعليق الثاني',
    user: {id: 1, name: 'محمد علي'},
    parentId: 2,
    createdAt: '2021-08-17T23:04:43.010+02:00',
  },
  {
    id: 5,
    lessonId: 1,
    body: 'التعليق الثاني على التعليق الثاني',
    user: {id: 1, name: 'محمد علي'},
    parentId: 2,
    createdAt: '2021-08-17T23:04:43.010+02:00',
  },
  {
    id: 6,
    lessonId: 1,
    body: 'التعليق الثاني على التعليق الاول',
    user: {id: 1, name: 'محمد علي'},
    parentId: 1,
    createdAt: '2021-08-17T23:04:43.010+02:00',
  },
]

const englishFlashcard = {
  id: 1,
  title: 'ترجمة لكلمات عربية الى الانجليزية',
  description:
    'ترجمة لكلمات عربية الى الانجليزية ترجمة لكلمات عربية الى الانجليزية ترجمة لكلمات عربية الى الانجليزية',
  user: {id: 1, name: 'محمد علي'},
  grade: '3rd-highschool',
  subject: 'math',
  branch: 'science',
  cards: [
    {
      back: 'proceed; continue; pursue',
      front: 'مضى',
      id: 0,
    },
    {
      back: 'level',
      front: 'سوي',
      id: 1,
    },
    {
      back: 'intentional',
      front: 'متعمد',
      id: 2,
    },
    {
      back: 'resistance; durability',
      front: 'صمود',
      id: 3,
    },
    {
      back: 'scrutiny',
      front: 'تمعن',
      id: 4,
    },
    {
      back: 'contradict',
      front: 'تناقض',
      id: 5,
    },
    {
      back: 'be assigned',
      front: 'تعين',
      id: 6,
    },
    {
      back: 'involved',
      front: 'متورط',
      id: 7,
    },
    {
      back: 'preamble',
      front: 'تمهيد',
      id: 8,
    },
    {
      back: 'rendering (of a service)',
      front: 'أداء',
      id: 9,
    },
    {
      back: 'foil (a scheme)',
      front: 'أحبط',
      id: 10,
    },
    {
      back: 'contradiction; infringement',
      front: 'مخالفة',
      id: 11,
    },
    {
      back: 'demolish',
      front: 'قوض',
      id: 12,
    },
    {
      back: 'punishment',
      front: 'معاقبة',
      id: 13,
    },
    {
      back: 'abstention, omission',
      front: 'امتناع',
      id: 14,
    },
    {
      back: 'effectiveness, validation',
      front: 'فاعلية',
      id: 15,
    },
    {
      back: 'recommend',
      front: 'أوصى',
      id: 16,
    },
    {
      back: 'observance of regulations',
      front: 'مراعاة',
      id: 17,
    },
    {
      back: 'deprive',
      front: 'نزع',
      id: 18,
    },
    {
      back: 'arrangement',
      front: 'تسوية',
      id: 19,
    },
    {
      back: 'touch on',
      front: 'تطرق',
      id: 20,
    },
    {
      back: 'synopsis',
      front: 'ملخص',
      id: 21,
    },
    {
      back: 'refer',
      front: 'أحال',
      id: 22,
    },
    {
      back: 'blame',
      front: 'عتب',
      id: 23,
    },
    {
      back: 'compliance',
      front: 'امتثال',
      id: 24,
    },
    {
      back: 'overwhelming (majority)',
      front: 'ساحق',
      id: 25,
    },
    {
      back: 'harvest',
      front: 'حصد',
      id: 26,
    },
    {
      back: 'carrying–out',
      front: 'اضطلاع',
      id: 27,
    },
    {
      back: 'exclusion, banishment, alienation',
      front: 'إبعاد',
      id: 28,
    },
    {
      back: 'decent, proper, suitable, fit',
      front: 'لائق',
      id: 29,
    },
    {
      back: 'cleansing',
      front: 'تطهير',
      id: 30,
    },
    {
      back: 'rectify',
      front: 'استدرك',
      id: 31,
    },
    {
      back: 'fashion',
      front: 'نمط',
      id: 32,
    },
    {
      back: 'collapse, breakdown, fall',
      front: 'انهيار',
      id: 33,
    },
    {
      back: 'challenge each other; be dilapidated',
      front: 'تداعى',
      id: 34,
    },
    {
      back: 'refrain',
      front: 'تورع',
      id: 35,
    },
    {
      back: 'executioner',
      front: 'جلاد',
      id: 36,
    },
    {
      back: 'enraged',
      front: 'محتدم',
      id: 37,
    },
    {
      back: 'appeal',
      front: 'نداء',
      id: 38,
    },
    {
      back: 'endure',
      front: 'صمد',
      id: 39,
    },
    {
      back: 'sack, plunder',
      front: 'غنم',
      id: 40,
    },
    {
      back: 'confiscate',
      front: 'استولى',
      id: 41,
    },
    {
      back: 'benefit(ing), advantage',
      front: 'استفادة',
      id: 42,
    },
    {
      back: 'savage',
      front: 'وحشي',
      id: 43,
    },
    {
      back: 'accompany',
      front: 'رافق',
      id: 44,
    },
    {
      back: 'collapsed, broken',
      front: 'منهار',
      id: 45,
    },
    {
      back: 'abstract; pertaining to meaning',
      front: 'معنوي',
      id: 46,
    },
    {
      back: 'cracked',
      front: 'متصدع',
      id: 47,
    },
    {
      back: 'fragmentation',
      front: 'تشرذم',
      id: 48,
    },
    {
      back: 'apply oneself intensely',
      front: 'أوغل',
      id: 49,
    },
    {
      back: 'call for, proclaim, hail',
      front: 'نادى',
      id: 50,
    },
    {
      back: 'tyrant',
      front: 'طاغية',
      id: 51,
    },
    {
      back: '(it) is enough for us, suffices for us,',
      front: 'تكفينا',
      id: 52,
    },
    {
      back: 'excruciating, ruinous, desperate',
      front: 'طاحن',
      id: 53,
    },
    {
      back: 'extraction',
      front: 'انتزاع',
      id: 55,
    },
    {
      back: 'preparatory',
      front: 'تحضيري',
      id: 56,
    },
    {
      back: 'activating',
      front: 'تفعيل',
      id: 57,
    },
    {
      back: 'dedicated, designated',
      front: 'مخصص',
      id: 58,
    },
    {
      back: 'conciliation',
      front: 'مصالحة',
      id: 59,
    },
    {
      back: 'procrastination',
      front: 'مماطلة',
      id: 60,
    },
    {
      back: 'another, other',
      front: 'آخَر',
      id: 61,
    },
    {
      back: 'last, utmost, end',
      front: 'آخِر',
      id: 62,
    },
    {
      back: 'reconcile, harmonize',
      front: 'توفق',
      id: 63,
    },
    {
      back: 'package, bundle',
      front: 'رزمة',
      id: 64,
    },
    {
      back: 'magic(al), occult',
      front: 'سحري',
      id: 65,
    },
    {
      back: 'expend (e.g. time)',
      front: 'أنفق',
      id: 66,
    },
    {
      back: 'responsive, amenable',
      front: 'متجاوب',
      id: 67,
    },
    {
      back: 'obstructed thing',
      front: 'انسداد',
      id: 68,
    },
    {
      back: 'prospect',
      front: 'أفق',
      id: 69,
    },
    {
      back: 'devastation',
      front: 'تخريب',
      id: 70,
    },
    {
      back: 'probable',
      front: 'محتمل',
      id: 71,
    },
    {
      back: 'exports',
      front: 'صادرات',
      id: 72,
    },
    {
      back: 'precious metals',
      front: 'معادن نفيسة',
      id: 73,
    },
    {
      back: 'entertainment',
      front: 'ترفيهي',
      id: 74,
    },
    {
      back: 'assets',
      front: 'أصول',
      id: 75,
    },
    {
      back: 'gang, clique, league',
      front: 'عصبة',
      id: 76,
    },
    {
      back: 'allocation, allotment',
      front: 'تخصيص',
      id: 77,
    },
    {
      back: 'relief (aid)',
      front: 'إغاثة',
      id: 78,
    },
    {
      back: 'rubble',
      front: 'أنقاض',
      id: 79,
    },
    {
      back: 'to flatten, level; demolish, devastate',
      front: 'دك',
      id: 80,
    },
    {
      back: 'make clear',
      front: 'صرح',
      id: 81,
    },
    {
      back: 'input',
      front: 'مساهمة',
      id: 82,
    },
    {
      back: 'pending investigation; under investigation',
      front: 'ذمة التحقيق',
      id: 83,
    },
    {
      back: 'anti–riot',
      front: 'مكافحة الشغب',
      id: 84,
    },
    {
      back: 'dedicate',
      front: 'كرس',
      id: 85,
    },
    {
      back: 'chanting; repeating',
      front: 'ترديد',
      id: 86,
    },
    {
      back: 'delivery of a (connotation defamatory) statement',
      front: 'إدلاء',
      id: 87,
    },
    {
      back: 'lieutenant colonel (Syr.)',
      front: 'المقدم',
      id: 88,
    },
    {
      back: 'widow',
      front: 'أرملة',
      id: 89,
    },
    {
      back: 'vestige',
      front: 'آثار',
      id: 90,
    },
    {
      back: 'pure(ly)',
      front: 'بحت',
      id: 91,
    },
    {
      back: 'by name of',
      front: 'مسمى',
      id: 92,
    },
    {
      back: 'adopt',
      front: 'تبنى',
      id: 93,
    },
    {
      back: 'come to a head',
      front: 'تفاقم',
      id: 94,
    },
    {
      back: 'foundation',
      front: 'إنشاء',
      id: 95,
    },
    {
      back: 'especially',
      front: 'لا سيما',
      id: 96,
    },
    {
      back: 'looted; stolen; ravished',
      front: 'منهوب',
      id: 97,
    },
    {
      back: 'neutrality',
      front: 'حياد',
      id: 98,
    },
    {
      back: 'reclamation',
      front: 'استرداد',
      id: 99,
    },
  ],
}

const numbersFlashcard = {
  id: 1,
  title: 'مصطلحات تاريخ وجفرافيا',
  description:
    'مصطلحات تاريخ وجفرافيا مصطلحات تاريخ وجفرافيا مصطلحات تاريخ وجفرافيا',
  user: {id: 1, name: 'محمد علي'},
  subject: 'تاريخ وجفرافيا',
  branch: 'علوم طبيعة حياة',
  grade: 'سنة ثالثة ثنوي',
  cards: [
    {
      back: 'Zero',
      front: 'Number: 0',
      id: 0,
    },
    {
      back: 'one only ',
      front: 'Number: 1',
      id: 1,
    },
    {
      back: 'two only ',
      front: 'Number: 2',
      id: 2,
    },
    {
      back: 'three only ',
      front: 'Number: 3',
      id: 3,
    },
    {
      back: 'four only ',
      front: 'Number: 4',
      id: 4,
    },
    {
      back: 'five only ',
      front: 'Number: 5',
      id: 5,
    },
    {
      back: 'six only ',
      front: 'Number: 6',
      id: 6,
    },
    {
      back: 'seven only ',
      front: 'Number: 7',
      id: 7,
    },
    {
      back: 'eight only ',
      front: 'Number: 8',
      id: 8,
    },
    {
      back: 'nine only ',
      front: 'Number: 9',
      id: 9,
    },
    {
      back: 'ten only ',
      front: 'Number: 10',
      id: 10,
    },
    {
      back: 'eleven only ',
      front: 'Number: 11',
      id: 11,
    },
    {
      back: 'twelve only ',
      front: 'Number: 12',
      id: 12,
    },
    {
      back: 'thirteen only ',
      front: 'Number: 13',
      id: 13,
    },
    {
      back: 'fourteen only ',
      front: 'Number: 14',
      id: 14,
    },
    {
      back: 'fifteen only ',
      front: 'Number: 15',
      id: 15,
    },
    {
      back: 'sixteen only ',
      front: 'Number: 16',
      id: 16,
    },
    {
      back: 'seventeen only ',
      front: 'Number: 17',
      id: 17,
    },
    {
      back: 'eighteen only ',
      front: 'Number: 18',
      id: 18,
    },
    {
      back: 'nineteen only ',
      front: 'Number: 19',
      id: 19,
    },
    {
      back: 'twenty only ',
      front: 'Number: 20',
      id: 20,
    },
    {
      back: 'twenty one only ',
      front: 'Number: 21',
      id: 21,
    },
    {
      back: 'twenty two only ',
      front: 'Number: 22',
      id: 22,
    },
    {
      back: 'twenty three only ',
      front: 'Number: 23',
      id: 23,
    },
    {
      back: 'twenty four only ',
      front: 'Number: 24',
      id: 24,
    },
    {
      back: 'twenty five only ',
      front: 'Number: 25',
      id: 25,
    },
    {
      back: 'twenty six only ',
      front: 'Number: 26',
      id: 26,
    },
    {
      back: 'twenty seven only ',
      front: 'Number: 27',
      id: 27,
    },
    {
      back: 'twenty eight only ',
      front: 'Number: 28',
      id: 28,
    },
    {
      back: 'twenty nine only ',
      front: 'Number: 29',
      id: 29,
    },
    {
      back: 'thirty only ',
      front: 'Number: 30',
      id: 30,
    },
    {
      back: 'thirty one only ',
      front: 'Number: 31',
      id: 31,
    },
    {
      back: 'thirty two only ',
      front: 'Number: 32',
      id: 32,
    },
    {
      back: 'thirty three only ',
      front: 'Number: 33',
      id: 33,
    },
    {
      back: 'thirty four only ',
      front: 'Number: 34',
      id: 34,
    },
    {
      back: 'thirty five only ',
      front: 'Number: 35',
      id: 35,
    },
    {
      back: 'thirty six only ',
      front: 'Number: 36',
      id: 36,
    },
    {
      back: 'thirty seven only ',
      front: 'Number: 37',
      id: 37,
    },
    {
      back: 'thirty eight only ',
      front: 'Number: 38',
      id: 38,
    },
    {
      back: 'thirty nine only ',
      front: 'Number: 39',
      id: 39,
    },
    {
      back: 'forty only ',
      front: 'Number: 40',
      id: 40,
    },
    {
      back: 'forty one only ',
      front: 'Number: 41',
      id: 41,
    },
    {
      back: 'forty two only ',
      front: 'Number: 42',
      id: 42,
    },
    {
      back: 'forty three only ',
      front: 'Number: 43',
      id: 43,
    },
    {
      back: 'forty four only ',
      front: 'Number: 44',
      id: 44,
    },
    {
      back: 'forty five only ',
      front: 'Number: 45',
      id: 45,
    },
    {
      back: 'forty six only ',
      front: 'Number: 46',
      id: 46,
    },
    {
      back: 'forty seven only ',
      front: 'Number: 47',
      id: 47,
    },
    {
      back: 'forty eight only ',
      front: 'Number: 48',
      id: 48,
    },
    {
      back: 'forty nine only ',
      front: 'Number: 49',
      id: 49,
    },
  ],
}

const flashcards = [...Array(10)].map((_, index) => {
  return {
    ...englishFlashcard,
    // override
    id: index,
  }
})

module.exports = {
  courses,
  users,
  comments,
  lessons,
  reviews,
  chapters,
  flashcards,
  grades,
  branchs,
  subjects,
  provinces,
  districts,
  municipalities,
}
