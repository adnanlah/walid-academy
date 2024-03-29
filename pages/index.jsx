import Link from 'next/link'
import {Input, Title, createStyles, SimpleGrid, Box} from '@mantine/core'
import MyContainer from 'components/MyContainer'
import Layout from 'layouts/Layout'
import BgLayout from 'layouts/BgLayout'
import Repeat from 'components/Repeat'

const useStyles = createStyles(theme => {
  return {
    wrapper: {
      padding: `0 15%`,
    },
    sectionContainer: {
      padding: `${theme.spacing.xl * 2}px 0`,
    },
    hero: {
      display: 'flex',
      alignItems: `center`,
      height: 500,
      backgroundColor: theme.colors.gray[0],
    },
    customTitle: {
      textAlign: `center`,
    },
    heroMessage: {
      width: '50%',
    },
    courseImage: {
      backgroundColor: theme.colors.gray[8],
      height: 200,
      marginBottom: theme.spacing.xs,
    },
    signupWrapper: {
      width: `40%`,
      margin: `0 auto`,
    },
  }
})

function CustomTitle(props) {
  return (
    <Title
      order={3}
      sx={theme => ({
        textAlign: `center`,
        marginBottom: `${theme.spacing.xl}px`,
      })}
    >
      {props.children}
    </Title>
  )
}

export default function Home({}) {
  const {classes} = useStyles()

  return (
    <>
      <MyContainer>
        <section className={classes.hero}>
          <figure></figure>
          <div className={classes.heroMessage}>
            <Title order={3}>مادا تريد ان تدرس</Title>
            <Input></Input>
          </div>
        </section>

        <section className={classes.sectionContainer}>
          <CustomTitle>دروس مقترحة</CustomTitle>
          <div className="courses-list">
            <SimpleGrid cols={4}>
              <Repeat numTimes={8}>
                {index => (
                  <Link key={index} href="/courses/1">
                    <a>
                      <div className={classes.courseItem}>
                        <div className={classes.courseImage}>
                          {/* <img src="/" alt="منهاج الرياضيات سنة ثالثة" /> */}
                        </div>
                        <div className={classes.courseTitle}>
                          منهاج الرياضيات سنة ثالثة
                        </div>
                      </div>
                    </a>
                  </Link>
                )}
              </Repeat>
            </SimpleGrid>
          </div>
          <Box
            sx={theme => ({
              marginTop: `${theme.spacing.lg}px`,
              textAlign: `left`,
            })}
          >
            <Link href="/courses">
              <a>لمزيد من الدروس</a>
            </Link>
          </Box>
        </section>

        <section className={classes.sectionContainer}>
          <CustomTitle>منصة اكاديمية وليد</CustomTitle>
          <div className="features-list">
            <SimpleGrid cols={4}>
              <Repeat numTimes={4}>
                {index => (
                  <div key={index} className={classes.courseItem}>
                    <div className={classes.courseImage}></div>
                    <div className={classes.courseTitle}>تمارين</div>
                  </div>
                )}
              </Repeat>
            </SimpleGrid>
          </div>
        </section>

        <section className={classes.sectionContainer}>
          <CustomTitle>سجل في الموقع</CustomTitle>
        </section>
      </MyContainer>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <BgLayout>{page}</BgLayout>
    </Layout>
  )
}

export function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Note app home page',
      },
    },
  }
}
