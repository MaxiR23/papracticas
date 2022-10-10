import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Test from './Test'

export default function TestList({ data }) {

  return (
    <>
      {data.length < 1 ?

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}>
          <Text> No hay nada para mostrar </Text>
          <Text textColor={'blue.400'}> <Link to={'/'}> Volver al inicio </Link> </Text>
        </Box>
        :
        <Container
          maxW='container.lg'
          sx={{
            my: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap'
          }}>
          {data.map((data) => (
            <Test key={data.id} data={data}> </Test>
          ))}
        </Container>

      }
    </>
  )
}


