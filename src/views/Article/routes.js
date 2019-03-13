const Article = () => import('./Article')

export default [
  {
    component: Article,
    path: '/section/:name',
    name: 'section'
  }
]
