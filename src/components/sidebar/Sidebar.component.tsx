import { Box, Listbox, createListCollection } from "@chakra-ui/react"
import { LuHouse,  } from "react-icons/lu"
import { MdOutlineArchive } from "react-icons/md"


const frameworks = createListCollection({
  items: [
    { label: "All Notes", value: "All Notes", icon: <LuHouse size={16} /> },
    { label: "Vue.js", value: "vue", icon: <MdOutlineArchive size={16} /> },
  ],
})

const Sidebar = () => {
  return (
     <Listbox.Root collection={frameworks} maxW="100%" borderBottom="1px solid" borderBottomColor="gray.200">
        {frameworks.items.map((framework) => (
          <Listbox.Item item={framework} key={framework.value}>
            <Box display="flex" alignItems="center" gap="4" flex="1">
              <Box p={2}>
                {framework.icon}
              </Box>
              <Listbox.ItemText color="black">{framework.label}</Listbox.ItemText>
            </Box>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        ))}
    </Listbox.Root>
  )
}

export default Sidebar