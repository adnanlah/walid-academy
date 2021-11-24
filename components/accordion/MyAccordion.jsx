import {useState, useContext, createContext} from 'react'
import {createStyles} from '@mantine/styles'
import {Text} from '@mantine/core'

const useStyles = createStyles(theme => {
  return {
    myAccordionBody: {
      padding: theme.spacing.xs,
      '&.closed': {
        display: 'block',
      },
      '&.open': {
        display: 'none',
      },
    },
    myAccordionHeader: {
      cursor: 'pointer',
      padding: theme.spacing.xs,
      backgroundColor: theme.colors.gray[1],
    },
  }
})

const ToggleContext = createContext()

export default function MyAccordion({children, ...restProps}) {
  return (
    <div {...restProps}>
      <div>{children}</div>
    </div>
  )
}

MyAccordion.Title = function MyAccordionTitle({children, ...restProps}) {
  return <div {...restProps}>{children}</div>
}

MyAccordion.Item = function MyAccordionItem({children, ...restProps}) {
  const [toggleShow, setToggleShow] = useState(true)
  return (
    <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
      <div {...restProps}>{children}</div>
    </ToggleContext.Provider>
  )
}

MyAccordion.Header = function MyAccordionHeader({children, ...restProps}) {
  const {toggleShow, setToggleShow} = useContext(ToggleContext)
  const {classes} = useStyles()

  return (
    <div className={classes.myAccordionHeader}>
      <Text onClick={() => setToggleShow(!toggleShow)} {...restProps}>
        {children}
      </Text>
    </div>
  )
}

MyAccordion.Body = function MyAccordionHeader({children, ...restProps}) {
  const {toggleShow} = useContext(ToggleContext)
  const {classes} = useStyles()
  return (
    <div
      className={`${classes.myAccordionBody} ${toggleShow ? 'open' : 'close'}`}
    >
      <div>{children}</div>
    </div>
  )
}
