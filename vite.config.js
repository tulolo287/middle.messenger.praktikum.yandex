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
          username: 'MMK',
          text: "LKJLJLlkjlii jljlkj",
          img_src: "https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"
        },
        {
          username: 'dsf',
          text: "dfsd dfdf d f",
          img_src: "https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"
        },
        {
          username: 'dfsa##',
          text: "dfs jljlkj",
          img_src: "https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"
        },
      ]
    }
  })]
})