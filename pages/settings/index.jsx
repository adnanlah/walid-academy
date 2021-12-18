import Layout from 'layouts/Layout'
import BgLayout from 'layouts/BgLayout'

const Settings = () => {
  return <div>User settings</div>
}

Settings.getLayout = function getLayout(page) {
  return (
    <Layout>
      <BgLayout>{page}</BgLayout>
    </Layout>
  )
}

export default Settings
