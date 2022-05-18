const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'g7s52xcw',
  dataset: 'production',
  apiVersion: '2021-03-25', 
  useCdn: true, 
})

export default client