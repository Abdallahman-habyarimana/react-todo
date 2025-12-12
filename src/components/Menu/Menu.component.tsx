
import { Box, Button, Flex, Heading, HStack, InputGroup, Input, Portal, Menu } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import Settings from '../settings/Setting.component'

const MenuSetting = () => {
  return (
    <Flex gap="4" justify="space-between" >
        <Heading marginEnd="auto" >All Task</Heading>
        <HStack width="80" gap={2}>
           <InputGroup startElement={<BsSearch />}>
            <Input placeholder="search by title, category" />
           </InputGroup>
            <Settings />
        </HStack>
    </Flex>
  )
}

export default MenuSetting