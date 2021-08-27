import { Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { ResponsiveButton } from '../components/utils/ResponsiveButton';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { SiBitcoin } from 'react-icons/si';
import { HomePageMessages } from '../locale/messages';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CryptTrack</title>
      </Head>

      <Flex
        direction='column'
        bgGradient='linear(to-br, yellow.300, yellow.600)'
        height='100vh'
        justifyContent={['space-between', 'start', 'start', 'start']}
      >
        <Flex direction='column' mt={10}>
          <Heading as='h1' size='3xl' textAlign='center' color='white' mb={10}>
            {HomePageMessages.app_name}
          </Heading>
          <Icon as={SiBitcoin} alignSelf='center' color='white' boxSize={40} />
        </Flex>
        <Flex
          direction='column'
          alignItems='center'
          justifySelf='flex-end'
          bgColor={['gray.100', 'transparent', 'transparent', 'transparent']}
          padding={6}
          mb={[6, 6, 0, 0]}
          mt={[6, 40, 40, 40]}
          ml={[6, 6, 0, 0]}
          mr={[6, 6, 0, 0]}
          borderRadius={20}
        >
          <Heading
            as='h2'
            fontSize={['2xl', '5xl', '5xl', '5xl']}
            textAlign='center'
            mb={3}
            color={['gray.700', 'white', 'white', 'white']}
          >
            {HomePageMessages.title}
          </Heading>
          <Text
            fontSize={['md', '2xl', '2xl', '2xl']}
            textAlign='center'
            color={['gray.500', 'gray.50', 'gray.50', 'gray.50']}
          >
            {HomePageMessages.description}
          </Text>
          <Link href='/profile' passHref>
            <ResponsiveButton mt={5} colorScheme='yellow' variant='solid'>
              <Text as='span' textAlign='center' color='gray.700'>
                {HomePageMessages.access}
              </Text>
            </ResponsiveButton>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
