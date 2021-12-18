import {Button, Col, Grid, Group, Text, ThemeIcon, Title} from '@mantine/core'
import {InfoCircledIcon} from '@modulz/radix-icons'
import Layout from 'layouts/Layout'
import BgLayout from 'layouts/BgLayout'
import MyContainer from 'components/MyContainer'
import SignupForm from 'components/SignupForm'
import {createStyles} from '@mantine/styles'
import {lorem} from 'util/helpers'
import {useEffect, useState} from 'react'

const useStyles = createStyles(theme => {
  return {
    form: {
      padding: `${theme.spacing.xl * 2}px 0%`,
    },
    right: {
      backgroundColor:
        theme.colorScheme === 'light'
          ? theme.colors.indigo[9]
          : theme.colors.dark[9],
      borderRadius: theme.spacing.xl,
      padding: theme.spacing.xl * 2,
      boxSizing: 'border-box',
      height: '100%',
      '& > *': {
        color: 'white',
      },
    },
    faq: {
      backgroundColor:
        theme.colorScheme === 'light'
          ? theme.colors.indigo[4]
          : theme.colors.dark[7],
      padding: `${theme.spacing.xl * 2}px 0`,
    },
    faqTitle: {
      marginBottom: theme.spacing.xl * 2,
      fontSize: theme.spacing.xl,
      textAlign: 'center',
    },
    info: {
      height: '100%',
      boxSizing: 'border-box',
      padding: theme.spacing.xl,
      backgroundColor:
        theme.colorScheme === 'light'
          ? theme.colors.indigo[3]
          : theme.colors.dark[6],
      borderRadius: theme.spacing.xl,
    },
  }
})

export default function Signup({divisions}) {
  const {classes} = new useStyles()
  const [text50, setText50] = useState('')

  useEffect(() => {
    setText50(lorem(50))
  }, [])

  return (
    <main>
      <section className={classes.form}>
        <MyContainer>
          <Button
            onClick={() => {
              throw new Error('clicked')
            }}
          >
            Click for error
          </Button>
          <Grid gutter={75} style={{minHeight: '100vh'}}>
            <Col span={5}>
              <div className={classes.right}>
                <Title order={3} mb="xl">
                  سجل الان
                </Title>
                <Text mb="md">
                  انضم إلى اكاديمية وليد للحصول على مساعدة مخصصة بشأن ما تدرسه
                  أو لتعلم شيء جديد تمامًا. سنحفظ كل تقدمك.
                </Text>
                <Text mb="md">
                  بالتسجيل في أكاديمية خان ، فإنك توافق على شروط الاستخدام
                  وسياسة الخصوصية الخاصة بنا.
                </Text>
              </div>
            </Col>
            <Col span={7}>
              <div>
                <SignupForm divisions={divisions} />
              </div>
            </Col>
          </Grid>
        </MyContainer>
      </section>
      <section className={classes.faq}>
        <MyContainer>
          <Text className={classes.faqTitle}>الاسئلة الشائعة</Text>
          <Grid gutter="xl" align="stretch">
            <Col span={6}>
              <div className={classes.info}>
                <Group mb="xs">
                  <ThemeIcon>
                    <InfoCircledIcon />
                  </ThemeIcon>
                  <Text>هل يمكنني الإلغاء في أي وقت؟</Text>
                </Group>
                <Text>{text50}</Text>
              </div>
            </Col>
            <Col span={6}>
              <div className={classes.info}>
                <Group mb="xs">
                  <ThemeIcon>
                    <InfoCircledIcon />
                  </ThemeIcon>
                  <Text>هل يمكنني الإلغاء في أي وقت؟</Text>
                </Group>
                <Text>{text50}</Text>
              </div>
            </Col>
            <Col span={6}>
              <div className={classes.info}>
                <Group mb="xs">
                  <ThemeIcon>
                    <InfoCircledIcon />
                  </ThemeIcon>
                  <Text>هل يمكنني الإلغاء في أي وقت؟</Text>
                </Group>
                <Text>{text50}</Text>
              </div>
            </Col>
            <Col span={6}>
              <div className={classes.info}>
                <Group mb="xs">
                  <ThemeIcon>
                    <InfoCircledIcon />
                  </ThemeIcon>
                  <Text>هل يمكنني الإلغاء في أي وقت؟</Text>
                </Group>
                <Text>{text50}</Text>
              </div>
            </Col>
          </Grid>
        </MyContainer>
      </section>
    </main>
  )
}

export async function getStaticProps() {
  const response = await fetch(`https://my.backend/divisions`)

  if (response.status === 500) {
    return {
      redirect: {
        destination: '/500',
      },
    }
  }

  if (!response.ok) {
    // redirect to 404 page
    return {
      notFound: true,
    }
  }

  const data = await response.json()

  return {
    props: {
      divisions: data,
    },
  }
}

Signup.getLayout = function getLayout(page) {
  return (
    <Layout>
      <BgLayout>{page}</BgLayout>
    </Layout>
  )
}
