import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocalstorage } from 'rooks';
import emailjs from '@emailjs/browser';

export default function LandingPage() {
  const [value, set, remove] = useLocalstorage('email-sent', false);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_46t5h6g',
        'template_cagmljv',
        {
          customer: email,
        },
        'user_sJgssHn8SRJeDv2X4BUaE'
      )
      .then(
        function (response) {
          setLoading(false);
          set(true);
          toast({
            title: `Request recieved, we will get back to you.`,
            status: 'success',
            isClosable: true,
          });
        },
        function (error) {
          toast({
            title: `Something went wrong`,
            status: 'error',
            isClosable: true,
          });
          setLoading(false);
        }
      );
  };

  return (
    <Box
      w="100%"
      minH="100vh"
      bg="#105766"
      pos="relative"
      bgImage={'/assets/line_bg.png'}
      bgAttachment={'fixed'}
    >
      <Container maxW={'container.lg'}>
        <Stack maxW={'lg'} py="50px" spacing={'100px'}>
          <Image
            alt="AjoGain"
            src="/assets/Logo.png"
            w={{ base: '120px', lg: '180px' }}
            cursor={'pointer'}
          />

          <Stack spacing={'20px'} as="form" onSubmit={handleSubmit}>
            <Heading
              color={'#fff'}
              fontSize={{ base: '60px', lg: '80px' }}
              lineHeight={{ base: '40px', lg: '60px' }}
              textTransform={'uppercase'}
            >
              Bring people and money together
            </Heading>

            <Stack spacing={'20px'} maxW={'sm'}>
              <Text fontSize={'30px'} lineHeight={'30px'} color={'#fff'}>
                Commission-free investing, plus the tools you need to put your
                money in motion. Send us a request to get this coorperative now.
              </Text>

              <Input
                placeholder="Email address"
                fontSize={'30px'}
                lineHeight={'30px'}
                variant={'filled'}
                size={'lg'}
                _focus={{ bg: '#fff', shadow: 'lg' }}
                isRequired
                type={'email'}
                value={email}
                onChange={e => setEmail(e?.target?.value)}
                disabled={value}
              />

              <Button
                size={'lg'}
                bg="#FF8353"
                color={'#fff'}
                fontSize={'30px'}
                _hover={{ bg: '#FF8353' }}
                _active={{ bg: '#FF8353' }}
                disabled={value}
                type="submit"
                isLoading={loading}
              >
                I need the app
              </Button>

              <Text color={'gray.300'} fontSize={'25px'} lineHeight={'25px'}>
                We will get back to you in 2 to 4 hours
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Image
        src="/assets/phone_with_hand.png"
        pos={{ base: 'relative', lg: 'absolute' }}
        bottom={'0'}
        right={'0'}
        objectFit="cover"
        w={{ base: '800px', lg: '50%' }}
        h={{ base: '800px', lg: 'auto' }}
      />
    </Box>
  );
}
