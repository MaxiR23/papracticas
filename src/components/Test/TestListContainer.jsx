import { Box, CircularProgress } from '@chakra-ui/react';
import React from 'react'
import TestList from './TestList';

export default function TestListContainer() {

    const [data, setData] = React.useState([])
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true);

    const url = 'http://localhost:3000/users';

    React.useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(result => {
                if (result.length < 1) {
                    setData([])
                }
                setData(result)
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    }, [])

    return (
        <>
            {loading &&
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}>
                    <CircularProgress size='100px' thickness='4px' isIndeterminate />
                </Box>
            }
            {error && <p> {error} </p>}
            {data && <TestList data={data} />}
        </>
    )
}
