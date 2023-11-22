import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import cssnanoPlugin from 'cssnano';
import postcssImort from 'postcss-import'



export default defineConfig({
  server: {
    port: 3000,
  },
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: resolve(__dirname, './src/index.html'),
        404: resolve(__dirname, './src/pages/404/404.html'),
        500: resolve(__dirname, './src/pages/500/500.html'),
        login: resolve(__dirname, './src/pages/login/login.html'),
        register: resolve(__dirname, './src/pages/register/register.html'),
        profile: resolve(__dirname, './src/pages/profile/profile.html'),
        chat: resolve(__dirname, './src/pages/chat/chat.html'),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        cssnanoPlugin, postcssImort
      ]
    }
  },
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'src/partials'),
    context: {
      username: 'ME',
      pages: [
        {
          name: '404 page',
          url: '/pages/404/404.html'
        },
        {
          name: '500 page',
          url: '/pages/500/500.html'
        },
        {
          name: 'Chat page',
          url: '/pages/chat/chat.html'
        },
        {
          name: 'Login page',
          url: '/pages/login/login.html'
        },
        {
          name: 'Register page',
          url: '/pages/register/register.html'
        },
        {
          name: 'Profile page',
          url: '/pages/profile/profile.html'
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
      chats: [
        {
          id: 1,
          username: 'Alex',
          active: true,
          color: '#0a2472',
          text: "LKJLJLlkjlii jljlkj",
          img_src: "https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"
        },
        {
          id: 2,
          username: 'Carol',
          color: 'red',
          class: 'received',
          text: "dfsd dfdf d f",
          img_src: "https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"
        },
        {
          id: 3,
          username: 'Olga',
          color: 'green',
          text: "dfs jljlkj",
          img_src: "https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"
        },
      ],
      dialogs: [
        {
          id: 1,
          username: 'Alex',
          color: '#0a2472',
          class: 'received',
          text: "LKJLJLlkjlii jljlkj",
          img_src: "https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"
        },
        {
          id: 1,
          username: 'Alex',
          color: '#0a2472',
          class: 'received',
          text: "dfsd dfdf d f",
          img_src: "https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"
        },
        {
          username: 'Me',
          class: 'sent',
          text: "dfs jljlkj",
          img_src: "https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"
        },
      ],
    }
  })]
})