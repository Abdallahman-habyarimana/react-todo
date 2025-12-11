import { Box, Button,Flex } from '@chakra-ui/react';
import { MdOutlineArchive, MdOutlineDeleteOutline} from "react-icons/md";

const Action = () => {
    return(
        <Flex alignItems="center" flexDirection="column" gap={4}>
            <Button width="100%" variant="outline"> <MdOutlineArchive />Archive Note</Button>
            <Button width="100%" variant="outline"><MdOutlineDeleteOutline /> Delete Note</Button>
        </Flex>
    )
}


export default Action