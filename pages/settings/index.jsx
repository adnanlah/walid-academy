import Layout from 'layouts/Layout'
import ContentLayout from 'layouts/ContentLayout'

const Settings = () => {
  return <div>User settings</div>
}

Settings.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ContentLayout>{page}</ContentLayout>
    </Layout>
  )
}

export default Settings
