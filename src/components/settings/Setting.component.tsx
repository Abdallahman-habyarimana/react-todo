
import {  Button, Portal, Menu } from '@chakra-ui/react'
import { MdOutlineSettings } from 'react-icons/md'

const Settings = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" >
          <MdOutlineSettings style={{ fontSize: "1.6rem"}} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">Profile</Menu.Item>
            <Menu.Item value="new-file">Inbox</Menu.Item>
            <Menu.Item value="open-file">help</Menu.Item>
            <Menu.Item value="export">Logout</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default Settings