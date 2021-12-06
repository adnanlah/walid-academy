const courses = [
  {
    id: 1,
    title: 'تعلم اللقة الانجليزية',
    grade: 8,
    subject: 'english',
    branch: 'science',
    categories: [
      {title: 'سنة ثالثة ثنوي', href: '/'},
      {title: 'اداب وفلسفة', href: '/'},
    ],
    thumbnail: '/book-cover.jpg',
    rating: 4,
    reviewsCount: 3,
    user: {id: 1, name: 'محمد علي'},
    length: 360,
    forumPostLink: '/forum/post/123',
    content: [
      {
        title: 'الفصل الاول',
        type: 'media',
        lessonsList: [
          {
            title: 'الدرس الاول',
            url: '123',
            length: 120,
          },
          {
            title: 'الدرس الثاني',
            url: '',
            length: 120,
          },
          {
            title: 'الدرس الثالث',
            url: '',
            length: 120,
          },
        ],
        attachmentsList: [
          {
            name: 'الملف الاول',
            size: 1024,
            url: '',
          },
          {
            name: 'الملف الاول',
            size: 2024,
            url: '',
          },
          {
            name: 'الملف الاول',
            size: 3024,
            url: '',
          },
        ],
      },
      {
        title: 'الفصل الثاني',
        type: 'media',
        lessonsList: [
          {
            title: 'الدرس الاول',
            url: '123',
            length: 120,
          },
          {
            title: 'الدرس الثاني',
            url: '',
            length: 120,
          },
          {
            title: 'الدرس الثالث',
            url: '',
            length: 120,
          },
        ],
        attachmentsList: [
          {
            name: 'الملف الاول',
            size: 1024,
            url: '',
          },
          {
            name: 'الملف الاول',
            size: 2024,
            url: '',
          },
          {
            name: 'الملف الاول',
            size: 3024,
            url: '',
          },
        ],
      },
      {
        title: 'كوير 1',
        description: 'اختبر مستواك مع هطا الكوير',
        type: 'quiz',
      },
      {
        title: 'الفصل الثالث',
        type: 'media',
        lessonsList: [
          {
            title: 'الدرس الاول',
            url: '123',
            length: 120,
          },
          {
            title: 'الدرس الثاني',
            url: '',
            length: 120,
          },
          {
            title: 'الدرس الثالث',
            url: '',
            length: 120,
          },
        ],
      },
    ],
    reviews: [
      {
        user: 'محمد علي',
        rating: 5,
        text: 'برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني مقدّم من إدراك',
      },

      {
        user: 'محمد علي',
        rating: 2,
        text: 'برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني مقدّم من إدراك برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني',
      },

      {
        user: 'محمد علي',
        rating: 0,
        text: 'برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني مقدّم من إدراك برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني',
      },
    ],
    cost: 'subsciption',
    description:
      'برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني مقدّم من إدراك، وقد قمنا بتطويره خصيصاً لتلبية احتياجات واهتمامات الطلاب الناطقين باللغة العربية. سيساعدك هذا البرنامج في تعلم اللغة الإنجليزية وبناء وتطوير مجمل مهاراتك فيها، بما في ذلك القراءة والكتابة والاستماع والكلام، بالإضافة إلى مهارات الاتصال والتواصل مع الآخرين.',
  },
  {
    id: 2,
    title: 'تعلم اللقة الانجليزية',
    categories: [
      {title: 'سنة ثالثة ثنوي', href: '/'},
      {title: 'اداب وفلسفة', href: '/'},
    ],
    thumbnail: '/book-cover.jpg',
    rating: 4,
    reviewsCount: 3,
    user: {id: 1, name: 'محمد علي'},
    length: 360,
    forumPostLink: '/forum/post/123',
    content: [
      {
        title: 'الفصل الاول',
        type: 'media',
        lessonsList: [
          {
            title: 'الدرس الاول',
            url: '123',
            length: 120,
          },
          {
            title: 'الدرس الثاني',
            url: '',
            length: 120,
          },
          {
            title: 'الدرس الثالث',
            url: '',
            length: 120,
          },
        ],
        attachmentsList: [
          {
            name: 'الملف الاول',
            size: 1024,
            url: '',
          },
          {
            name: 'الملف الاول',
            size: 2024,
            url: '',
          },
          {
            name: 'الملف الاول',
            size: 3024,
            url: '',
          },
        ],
      },
      {
        title: 'الفصل الثاني',
        type: 'media',
        lessonsList: [
          {
            title: 'الدرس الاول',
            url: '123',
            length: 120,
          },
          {
            title: 'الدرس الثاني',
            url: '',
            length: 120,
          },
          {
            title: 'الدرس الثالث',
            url: '',
            length: 120,
          },
        ],
        attachmentsList: [
          {
            name: 'الملف الاول',
            size: 1024,
            url: '',
          },
          {
            name: 'الملف الاول',
            size: 2024,
            url: '',
          },
          {
            name: 'الملف الاول',
            size: 3024,
            url: '',
          },
        ],
      },
      {
        title: 'كوير 1',
        description: 'اختبر مستواك مع هطا الكوير',
        type: 'quiz',
      },
      {
        title: 'الفصل الثالث',
        type: 'media',
        lessonsList: [
          {
            title: 'الدرس الاول',
            url: '123',
            length: 120,
          },
          {
            title: 'الدرس الثاني',
            url: '',
            length: 120,
          },
          {
            title: 'الدرس الثالث',
            url: '',
            length: 120,
          },
        ],
      },
    ],
    reviews: [
      {
        user: 'محمد علي',
        rating: 5,
        text: 'برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني مقدّم من إدراك',
      },

      {
        user: 'محمد علي',
        rating: 2,
        text: 'برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني مقدّم من إدراك برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني',
      },

      {
        user: 'محمد علي',
        rating: 0,
        text: 'برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني مقدّم من إدراك برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني',
      },
    ],
    cost: 'subsciption',
    description:
      'برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني مقدّم من إدراك، وقد قمنا بتطويره خصيصاً لتلبية احتياجات واهتمامات الطلاب الناطقين باللغة العربية. سيساعدك هذا البرنامج في تعلم اللغة الإنجليزية وبناء وتطوير مجمل مهاراتك فيها، بما في ذلك القراءة والكتابة والاستماع والكلام، بالإضافة إلى مهارات الاتصال والتواصل مع الآخرين.',
  },
  {
    id: 3,
    title: 'تعلم اللقة العربية',
    categories: [
      {title: 'سنة ثالثة ثنوي', href: '/'},
      {title: 'اداب وفلسفة', href: '/'},
    ],
    thumbnail: '/book-cover.jpg',
    rating: 4,
    reviewsCount: 3,
    user: {id: 2, name: 'محمد مصطفى'},
    length: 360,
    forumPostLink: '/forum/post/123',
    content: [
      {
        title: 'الفصل الاول',
        type: 'media',
        lessonsList: [
          {
            title: 'الدرس الاول',
            url: '123',
            length: 120,
          },
          {
            title: 'الدرس الثاني',
            url: '',
            length: 120,
          },
          {
            title: 'الدرس الثالث',
            url: '',
            length: 120,
          },
        ],
        attachmentsList: [
          {
            name: 'الملف الاول',
            size: 1024,
            url: '',
          },
          {
            name: 'الملف الاول',
            size: 2024,
            url: '',
          },
          {
            name: 'الملف الاول',
            size: 3024,
            url: '',
          },
        ],
      },
      {
        title: 'الفصل الثاني',
        type: 'media',
        lessonsList: [
          {
            title: 'الدرس الاول',
            url: '123',
            length: 120,
          },
          {
            title: 'الدرس الثاني',
            url: '',
            length: 120,
          },
          {
            title: 'الدرس الثالث',
            url: '',
            length: 120,
          },
        ],
        attachmentsList: [
          {
            name: 'الملف الاول',
            size: 1024,
            url: '',
          },
          {
            name: 'الملف الاول',
            size: 2024,
            url: '',
          },
          {
            name: 'الملف الاول',
            size: 3024,
            url: '',
          },
        ],
      },
      {
        title: 'كوير 1',
        description: 'اختبر مستواك مع هطا الكوير',
        type: 'quiz',
      },
      {
        title: 'الفصل الثالث',
        type: 'media',
        lessonsList: [
          {
            title: 'الدرس الاول',
            url: '123',
            length: 120,
          },
          {
            title: 'الدرس الثاني',
            url: '',
            length: 120,
          },
          {
            title: 'الدرس الثالث',
            url: '',
            length: 120,
          },
        ],
      },
    ],
    reviews: [
      {
        user: 'محمد علي',
        rating: 5,
        text: 'برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني مقدّم من إدراك',
      },

      {
        user: 'محمد علي',
        rating: 2,
        text: 'برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني مقدّم من إدراك برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني',
      },

      {
        user: 'محمد علي',
        rating: 0,
        text: 'برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني مقدّم من إدراك برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني',
      },
    ],
    cost: 'subsciption',
    description:
      'برنامج اللغة الإنجليزية التفاعلي للتطوير المهني المستمر هو برنامج مجاني مقدّم من إدراك، وقد قمنا بتطويره خصيصاً لتلبية احتياجات واهتمامات الطلاب الناطقين باللغة العربية. سيساعدك هذا البرنامج في تعلم اللغة الإنجليزية وبناء وتطوير مجمل مهاراتك فيها، بما في ذلك القراءة والكتابة والاستماع والكلام، بالإضافة إلى مهارات الاتصال والتواصل مع الآخرين.',
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
    id: 1,
    title: 'الشابتر الاول',
    courseId: 1,
  },
  {
    id: 2,
    title: 'الشابتر الاول',
    courseId: 2,
  },
]

const lessons = [
  {
    id: 1,
    title: 'الدرس الاول',
    videoUrl: '',
    chapterId: 1,
  },

  {
    id: 2,
    title: 'الدرس الثاني',
    videoUrl: '',
    chapterId: 1,
  },

  {
    id: 3,
    title: 'الدرس الثالث',
    videoUrl: '',
    chapterId: 1,
  },
  {
    id: 4,
    title: 'الدرس الرابع',
    videoUrl: '',
    chapterId: 2,
  },

  {
    id: 5,
    title: 'الدرس الخامس',
    videoUrl: '',
    chapterId: 2,
  },

  {
    id: 6,
    title: 'الدرس السادس',
    videoUrl: '',
    chapterId: 2,
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

const quizes = [
  {
    id: 1,
    title: 'الكويز الاول',
    number: 1,
    content: '',
    courseId: 1,
  },
]

const comments = [
  {
    id: 1,
    lessonId: 1,
    body: 'التعليق الاول',
    userName: 'محمد مصطقى',
    userId: 1,
    parentId: null,
    createdAt: '2021-08-15T23:01:33.010+02:00',
  },
  {
    id: 2,
    lessonId: 1,
    body: 'التعليق الثاني',
    userName: 'محمد زيد',
    userId: 2,
    parentId: null,
    createdAt: '2021-08-14T23:02:33.010+02:00',
  },
  {
    id: 3,
    lessonId: 1,
    body: 'التعليق الاول على التعليق الاول',
    userName: 'محمد علي',
    userId: 3,
    parentId: 1,
    createdAt: '2021-08-18T23:03:33.010+02:00',
  },
  {
    id: 4,
    lessonId: 1,
    body: 'التعليق الاول على التعليق الثاني',
    userName: 'محمد علي',
    userId: 3,
    parentId: 2,
    createdAt: '2021-08-17T23:04:43.010+02:00',
  },
  {
    id: 5,
    lessonId: 1,
    body: 'التعليق الثاني على التعليق الثاني',
    userName: 'محمد علي',
    userId: 3,
    parentId: 2,
    createdAt: '2021-08-17T23:04:43.010+02:00',
  },
  {
    id: 6,
    lessonId: 1,
    body: 'التعليق الثاني على التعليق الاول',
    userName: 'محمد علي',
    userId: 3,
    parentId: 1,
    createdAt: '2021-08-17T23:04:43.010+02:00',
  },
]

const flashcards = [
  {
    id: 1,
    title: 'ترجمة لكلمات عربية الى الانجليزية',
    description:
      'ترجمة لكلمات عربية الى الانجليزية ترجمة لكلمات عربية الى الانجليزية ترجمة لكلمات عربية الى الانجليزية',
    userId: 1,
    subject: 'تاريخ وجفرافيا',
    branch: 'علوم طبيعة حياة',
    grade: 'سنة ثالثة ثنوي',
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
  },
]

const flashcards2 = [
  {
    id: 1,
    title: 'مصطلحات تاريخ وجفرافيا',
    description:
      'مصطلحات تاريخ وجفرافيا مصطلحات تاريخ وجفرافيا مصطلحات تاريخ وجفرافيا',
    userId: 1,
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
  },
]

module.exports = {courses, users, comments, lessons, chapters, flashcards}
