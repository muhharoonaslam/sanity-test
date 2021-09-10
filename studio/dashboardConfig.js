export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '613b9302334426108eda72ab',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-6na9ez6w',
                  apiId: 'e78cd293-d30b-4136-afe3-ac53fcc5e1f4'
                },
                {
                  buildHookId: '613b93021a646215eb17dbe8',
                  title: 'Blog Website',
                  name: 'sanity-test-web-jkgmu7ay',
                  apiId: '15b234ab-e547-4bb1-85c3-e13619512f6b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muhharoonaslam/sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-web-jkgmu7ay.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
