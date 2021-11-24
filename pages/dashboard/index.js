import Layout from '../../components/Layout'
import ContentLayout from '../../components/ContentLayout'
import MyContainer from '../../components/MyContainer'
import {Tabs, Tab, Box, Paper} from '@mantine/core'
import {GearIcon} from '@modulz/radix-icons'
import Newcourse from '../../components/dashboards/NewCourse'
import {ModalsProvider} from '@mantine/modals'

export default function Dashboard() {
  return (
    <MyContainer padding="md">
      <ModalsProvider>
        <Tabs
          styles={theme => ({
            tabIcon: {
              marginRight: '0 !important',
              marginLeft: theme.spacing.xs,
            },
          })}
        >
          <Tab label="إنشاء درس جديد" icon={<GearIcon />}>
            <Newcourse />
          </Tab>
          <Tab label="تسيير الادامنة" icon={<GearIcon />}>
            <Paper padding="md">
              Labore laborum aliqua qui amet fugiat deserunt culpa incididunt
              nisi nisi anim cillum. Laboris aliqua do est aliquip ipsum esse id
              commodo veniam magna. Proident reprehenderit pariatur pariatur
              nulla. Eu incididunt Lorem mollit eu.
            </Paper>
          </Tab>
          <Tab label="إنشاء فلاشكارد جديد" icon={<GearIcon />}>
            <Paper padding="md">
              Labore laborum aliqua qui amet fugiat deserunt culpa incididunt
              nisi nisi anim cillum. Laboris aliqua do est aliquip ipsum esse id
              commodo veniam magna. Proident reprehenderit pariatur pariatur
              nulla. Eu incididunt Lorem mollit eu.
            </Paper>
          </Tab>
          <Tab label="تقارير" icon={<GearIcon />}>
            <Paper padding="md">
              Labore laborum aliqua qui amet fugiat deserunt culpa incididunt
              nisi nisi anim cillum. Laboris aliqua do est aliquip ipsum esse id
              commodo veniam magna. Proident reprehenderit pariatur pariatur
              nulla. Eu incididunt Lorem mollit eu.
            </Paper>
          </Tab>
          <Tab label="تاريخ" icon={<GearIcon />}>
            <Paper padding="md">
              Labore laborum aliqua qui amet fugiat deserunt culpa incididunt
              nisi nisi anim cillum. Laboris aliqua do est aliquip ipsum esse id
              commodo veniam magna. Proident reprehenderit pariatur pariatur
              nulla. Eu incididunt Lorem mollit eu.
            </Paper>
          </Tab>
          <Tab label="نظام الكوبونات" icon={<GearIcon />}>
            <Paper padding="md">
              Labore laborum aliqua qui amet fugiat deserunt culpa incididunt
              nisi nisi anim cillum. Laboris aliqua do est aliquip ipsum esse id
              commodo veniam magna. Proident reprehenderit pariatur pariatur
              nulla. Eu incididunt Lorem mollit eu.
            </Paper>
          </Tab>
          <Tab label="احصائيات" icon={<GearIcon />}>
            <Paper padding="md">
              Labore laborum aliqua qui amet fugiat deserunt culpa incididunt
              nisi nisi anim cillum. Laboris aliqua do est aliquip ipsum esse id
              commodo veniam magna. Proident reprehenderit pariatur pariatur
              nulla. Eu incididunt Lorem mollit eu.
            </Paper>
          </Tab>
        </Tabs>
      </ModalsProvider>
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
