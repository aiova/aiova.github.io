import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'AIOVA',
  }),
  getRoutes: async () => [
      {
        path: '/',
        component: 'src/containers/Main',
      }
    ],
}
