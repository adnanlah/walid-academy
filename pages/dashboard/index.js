import Layout from '../../components/Layout'
import ContentLayout from '../../components/ContentLayout'
import MyContainer from '../../components/MyContainer'
import {Tabs, Tab, Paper} from '@mantine/core'
import {
  ActivityLogIcon,
  AvatarIcon,
  BarChartIcon,
  CardStackIcon,
  FilePlusIcon,
  FileTextIcon,
} from '@modulz/radix-icons'
import NewCourse from '../../components/dashboards/NewCourse'
import NewFlashcard from '../../components/dashboards/NewFlashcard'
import Adminsboard from '../../components/dashboards/AdminsBoard'
import ReportsBoard from '../../components/dashboards/ReportsBoard'
import CouponsBoard from '../../components/dashboards/CouponsBoard'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import LogsBoard from '../../components/dashboards/LogsBoard'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0)
  const router = useRouter()
  const tab = router.query.tab

  const tabHandle = tab => {
    console.log('handling tab')
    window.history.replaceState(null, '', `/dashboard?tab=${tab}`)
    setActiveTab(tab)
  }

  useEffect(() => {
    if (tab) setActiveTab(parseInt(tab))
  }, [tab])

  return (
    <MyContainer sx={theme => ({padding: `${theme.spacing.xl}px 0`})}>
      <Tabs active={activeTab} onTabChange={tabHandle} color="cyan">
        <Tab label="إنشاء كورس جديد" icon={<FilePlusIcon />}>
          <Paper padding="xl">
            <NewCourse />
          </Paper>
        </Tab>
        <Tab label="إنشاء فلاشكارد جديد" icon={<CardStackIcon />}>
          <Paper padding="xl">
            <NewFlashcard />
          </Paper>
        </Tab>
        <Tab label="تسيير المستخدمين" icon={<AvatarIcon />}>
          <Paper padding="xl">
            <Adminsboard />
          </Paper>
        </Tab>
        <Tab label="التقارير" icon={<FileTextIcon />}>
          <Paper padding="xl">
            <ReportsBoard />
          </Paper>
        </Tab>
        <Tab label="الكوبونات" icon={<CardStackIcon />}>
          <Paper padding="xl">
            <CouponsBoard />
          </Paper>
        </Tab>
        <Tab label="الاحصائيات" icon={<BarChartIcon />}>
          <Paper padding="xl">
            Labore laborum aliqua qui amet fugiat deserunt culpa incididunt nisi
            nisi anim cillum. Laboris aliqua do est aliquip ipsum esse id
            commodo veniam magna. Proident reprehenderit pariatur pariatur
            nulla. Eu incididunt Lorem mollit eu.
          </Paper>
        </Tab>
        <Tab label="السجل" icon={<ActivityLogIcon />}>
          <Paper padding="xl">
            <LogsBoard />
          </Paper>
        </Tab>
      </Tabs>
    </MyContainer>
  )
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ContentLayout>{page}</ContentLayout>
    </Layout>
  )
}
