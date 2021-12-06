import {ActionIcon, Box, Center, Text} from '@mantine/core'
import {Cross2Icon} from '@modulz/radix-icons'
import {useClipboard} from '@mantine/hooks'

const Coupon = () => {
  const clipboard = useClipboard({timeout: 600})
  return (
    <Box
      sx={theme => ({
        backgroundColor:
          theme.colorScheme === 'light'
            ? theme.colors.gray[0]
            : theme.colors.dark[8],
        border: `1px dashed ${
          theme.colorScheme === 'light'
            ? theme.colors.gray[3]
            : theme.colors.dark[9]
        }`,
        cursor: 'pointer',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.xs,
        position: 'relative',
      })}
      onClick={() => clipboard.copy('COUPON19')}
    >
      {clipboard.copied && (
        <Center
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: 'inherit',
          }}
        >
          تم النسخ
        </Center>
      )}

      <div>
        <Text size="xl" mb="xs">
          19%
        </Text>
        <Text>COUPON19</Text>

        <Text size="sm" color="dimmed">
          استعمل 10 مرات من 20
        </Text>

        <Text size="sm" color="dimmed">
          ينتهي في 16 ديسمبر 2021
        </Text>
      </div>

      <ActionIcon
        sx={theme => ({
          position: 'absolute',
          left: theme.spacing.xs,
          top: theme.spacing.xs,
        })}
      >
        <Cross2Icon />
      </ActionIcon>
    </Box>
  )
}

export default Coupon
