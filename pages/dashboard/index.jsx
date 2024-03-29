import {Tabs, Tab, Paper, Text, Title} from '@mantine/core'
import {
  ActivityLogIcon,
  AvatarIcon,
  BarChartIcon,
  CardStackIcon,
  FilePlusIcon,
  FileTextIcon,
} from '@modulz/radix-icons'
import Layout from 'layouts/Layout'
import BgLayout from 'layouts/BgLayout'
import MyContainer from 'components/MyContainer'
import NewCourse from 'components/Dashboards/NewCourse'
import NewFlashcard from 'components/Dashboards/NewFlashcard'
import Adminsboard from 'components/Dashboards/AdminsBoard'
import ReportsBoard from 'components/Dashboards/ReportsBoard'
import CouponsBoard from 'components/Dashboards/CouponsBoard'
import CategoriesBaord from 'components/Dashboards/CategoriesBaord'
import LogsBoard from 'components/Dashboards/LogsBoard'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useCategories} from 'hooks/useCategories'

export default function Dashboard() {
  const {categories, error} = useCategories()

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
    <MyContainer
      component="main"
      py="xl"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        align: 'stretch',
      }}
    >
      <Title mb="xl" order={4}>
        لوحة التحكم
      </Title>
      <Tabs
        orientation="vertical"
        active={activeTab}
        onTabChange={tabHandle}
        color="indigo"
        tabPadding={0}
        styles={{
          root: {
            flexGrow: 2,
            height: '100%',
            width: '100%',
            maxWidth: '100%',
          },
          tabsListWrapper: {
            margin: '0 !important',
            width: '20%',
            flexShrink: 0,
          },
          body: {
            width: '80%',
            flexGrow: 2,
            flexShrink: 0,
          },
        }}
      >
        <Tab label="إنشاء كورس جديد" icon={<FilePlusIcon />}>
          <Paper style={{height: '100%'}} radius={0} padding="xl">
            <NewCourse categories={categories} />
          </Paper>
        </Tab>
        <Tab label="إنشاء فلاشكارد جديد" icon={<CardStackIcon />}>
          <Paper style={{height: '100%'}} radius={0} padding="xl">
            <NewFlashcard categories={categories} />
          </Paper>
        </Tab>
        <Tab label="تسيير المستخدمين" icon={<AvatarIcon />}>
          <Paper style={{height: '100%'}} radius={0} padding="xl">
            <Adminsboard />
          </Paper>
        </Tab>
        <Tab label="التقارير" icon={<FileTextIcon />}>
          <Paper style={{height: '100%'}} radius={0} padding="xl">
            <ReportsBoard />
          </Paper>
        </Tab>
        <Tab label="الكوبونات" icon={<CardStackIcon />}>
          <Paper style={{height: '100%'}} radius={0} padding="xl">
            <CouponsBoard />
          </Paper>
        </Tab>
        <Tab label="الاحصائيات" icon={<BarChartIcon />}>
          <Paper style={{height: '100%'}} radius={0} padding="xl">
            Labore laborum aliqua qui amet fugiat deserunt culpa incididunt nisi
            nisi anim cillum. Laboris aliqua do est aliquip ipsum esse id
            commodo veniam magna. Proident reprehenderit pariatur pariatur
            nulla. Eu incididunt Lorem mollit eu.
          </Paper>
        </Tab>
        <Tab label="تسيير المحتوى" icon={<ActivityLogIcon />}>
          <Paper style={{height: '100%'}} radius={0} padding="xl">
            <CategoriesBaord />
          </Paper>
        </Tab>
        <Tab label="السجل" icon={<ActivityLogIcon />}>
          <Paper style={{height: '100%'}} radius={0} padding="xl">
            <LogsBoard />
          </Paper>
        </Tab>
      </Tabs>
      {error && <Text>حدث مشكل في تحميل معلومات يرجى تحديث الصفحة</Text>}
    </MyContainer>
  )
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <Layout>
      <BgLayout>{page}</BgLayout>
    </Layout>
  )
}
