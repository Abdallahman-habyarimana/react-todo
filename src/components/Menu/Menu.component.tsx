
import { Box, Button, Flex, Heading, HStack, Input, Portal, Menu } from '@chakra-ui/react'
import { MdOutlineSearch, MdOutlineSettings } from 'react-icons/md'
import Settings from '../settings/Setting.component'

const MenuSetting = () => {
  return (
    <Flex gap="4" justify="space-between" >
        <Heading marginEnd="auto" >All Task</Heading>
        <HStack width="80" gap={2}>
            <Input placeholder="search by title, category" />
            <Settings />
            
        </HStack>
    </Flex>
  )
}

export default MenuSetting