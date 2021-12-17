import Layout from 'components/Layout'
import ContentLayout from 'components/ContentLayout'

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
