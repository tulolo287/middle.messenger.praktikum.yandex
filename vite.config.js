import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';


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
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'src/partials'),
    context: {
      username: 'ME',
      pages: [
        {
          name: '404 page',
          url: '/pages/404.html'
        },
        {
          name: '500 page',
          url: '/pages/500.html'
        },
        {
          name: 'Chat page',
          url: '/pages/chat/chat.html'
        },
        {
          name: 'Login page',
          url: '/pages/login.html'
        },
      ],
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