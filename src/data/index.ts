export default {
  username: 'ME',
  pages: [
    {
      name: '404 page',
      url: '404',
    },
    {
      name: '500 page',
      url: '500',
    },
    {
      name: 'Chat page',
      url: 'chat',
    },
    {
      name: 'Login page',
      url: 'login',
    },
    {
      name: 'Register page',
      url: 'register',
    },
    {
      name: 'Profile page',
      url: 'profile',
    },
  ],
  profile: {
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    name: 'Иван',
    surname: 'Иванов',
    nic: 'Иван',
    phone: '+7 (909) 967 30 30',
  },
  profiles: [
    {
      id: 1,
      username: 'Alex',
      active: true,
      color: '#0a2472',
      text: 'Круто!',
      img_src: 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png',
    },
    {
      id: 2,
      username: 'Carol',
      color: 'red',
      class: 'received',
      text: 'Можно или сегодня или завтра вечером.',
      img_src: 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png',
    },
    {
      id: 3,
      username: 'Olga',
      color: 'green',
      text: 'Друзья, у меня для вас...',
      img_src: 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png',
    },
  ],
  dialogs: [
    {
      id: 1,
      username: 'Alex',
      color: '#0a2472',
      class: 'received',
      text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
      img_src: 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png',
    },
    {
      id: 1,
      username: 'Alex',
      color: '#0a2472',
      class: 'received',
      text: 'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
      img_src: 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png',
    },
    {
      username: 'Me',
      class: 'sent',
      text: 'Круто!',
      img_src: 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png',
    },
  ],
};
