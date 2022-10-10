import {
    Box,
    Center,
    Stack,
    Text
} from '@chakra-ui/react';

export default function ProductSimple() {

    return (
        <>
            <Center py={12}>
                <Stack direction={'row'} spacing={12}>
                    <Box> <Text> Actividades </Text> </Box>
                    <Box> <Text> Lista de transferecias </Text> </Box>
                    <Box> <Text> Auth </Text> </Box>
                </Stack>
            </Center>
        </>
    );
}