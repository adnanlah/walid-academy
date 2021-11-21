const courses = [
  {
    id: 1,
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

module.exports = {courses, users, comments, lessons, chapters}
