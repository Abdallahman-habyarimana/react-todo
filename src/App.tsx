import { Box, Button, CloseButton, Container, Dialog, Field, Flex, Grid, GridItem, Input, Portal, Stack, Switch, Textarea } from '@chakra-ui/react'
import './App.css';
import Action from '@/components/Action/Action.component.tsx'
import MenuSetting from './components/Menu/Menu.component';
import Sidebar from './components/sidebar/Sidebar.component';

function App() {
  return (
    <Container fluid>
      <Grid
      h="100vh"
      templateRows="4em 1fr"
      templateColumns="repeat(6, 1fr)" 
    >
      <GridItem width="100%" rowSpan={2} colSpan={1} borderRight="1px solid" borderRightColor="gray.200"  p={4} >
        <Sidebar />
      </GridItem>
      <GridItem colSpan={5}  p={4} borderBottom="1px solid" borderBottomColor="gray.200" >
        <MenuSetting />
      </GridItem >
      <GridItem colSpan={1} borderRight="1px solid" borderRightColor="gray.200" p={4}>
        <Dialog.Root closeOnInteractOutside={false} modal={false}>
          <Dialog.Trigger asChild>
            <Button  bg="blue" width="100%" size="sm">
              Create New Task
            </Button>
        </Dialog.Trigger>
        <Portal>
        <Dialog.Positioner pointerEvents="none">
          <Dialog.Content display="flex" marginTop="28" flexDirection="column" p={2} gap={4}>
            <Dialog.Header>
              <Dialog.Title>Create New Task</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Stack gap="8" maxW="md" css={{ "--field-label-width": "96px" }}>
                <Field.Root orientation="horizontal">
                  <Field.Label>Subject</Field.Label>
                  <Input placeholder="Subject" flex="1" />
                </Field.Root>

                <Field.Root orientation="vertical">
                  <Textarea resize="both" placeholder='add a description' />
      </Field.Root>

      
    </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Save</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
      </GridItem>
      <GridItem colSpan={3} borderRight="1px solid" borderRightColor="gray.200" bg="blue.700" p={4}>
        
        <Box background={"yellow.400"}>navigation</Box>
      </GridItem>
      <GridItem colSpan={1}  p={4} >
        <Action />
      </GridItem>
      
    </Grid>
    </Container>
  )
}

export default App
