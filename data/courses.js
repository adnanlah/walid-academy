const courses = [
  {
    id: 1,
    title: 'تعلم اللقة الانجليزية',
    categories: [
      {title: 'سنة ثالثة ثنوي', href: '/'},
      {title: 'اداب وفلسفة', href: '/'},
    ],
    imageUrl: '/book-cover.jpg',
    rating: 4,
    teacher: 'محمد علي',
    length: 360,
    forumPostLink: '/forum/post/123',
    content: [
      {
        title: 'الفصل الاول',
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
        title: 'الفصل الاول',
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
        title: 'الفصل الاول',
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
    category: 'اللغات',
    imageUrl: '/book-cover.jpg',
    price: 1000,
    description:
      'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
  },
  {
    id: 3,
    title: 'تعلم اللقة الانجليزية',
    category: 'اللغات',
    imageUrl: '/book-cover.jpg',
    price: 3000,
    description:
      'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
  },
]

module.exports = courses
