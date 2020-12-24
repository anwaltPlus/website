import Head from 'next/head';
// components
import Layout from '../components/layout';
// icons
import * as I from '../icons';
// ui
import { Box, Img, Flex, Text, H1, H2, H3, Article, Section, StyledLink } from '../ui';
// //////////////////////////////////////////////////

const keywords = 'Юридична компанія «Anwalt plus», м. Львів, вул. Словацького, 1 (приміщення головної пошти), anwaltpl@gmail.com, +38 (067) 676 06 04, +38 (063) 676 06 04, +380676760604';

const Contacts = ({ router }) => (
  <Layout title="Контакти" router={router} keywords={keywords}>
    <Section my={50} mx="auto" maxWidth="1200px" px="1rem">
      <Flex alignItems="center">
      <Section
        p={[20, 25, 30]}
        fontSize={[14, 16, 18]}
        width={['100%', '100%', '35%']}
      >
        <Article>
          <H1 fontWeight="bold" fontSize="2em" color="#413189">
            Контакти
          </H1>
          <Text mt={20}>
            Юридична компанія «Anwalt plus»
          </Text>
        </Article>
        <Article>
          <H3 mt={30} fontSize="1.17em"  fontWeight="bold" color="#413189">
            Адреса
          </H3>
          <Text mt={20} fontWeight="bold">
            м. Львів, вул. Словацького, 1 (приміщення головної пошти)
          </Text>
        </Article>
        <Article>
          <H3 mt={30} fontSize="1.17em"  fontWeight="bold" color="#413189">
            Графік роботи:
          </H3>
          <Text mt={20} fontWeight="bold">
            пн-пт 8:00 – 20:00
          </Text>
          <Text mt={20} fontWeight="bold">
            сб 10:00 – 18:00
          </Text>
        </Article>
        <Box mt={30}>
          <Flex alignItems="center">
            <Box mr='10px'>{I.phone()}</Box>
            <StyledLink color="#005a87" href="tel:+380676760604">
              +38 (067) 676 06 04
            </StyledLink>
          </Flex>
          <Flex mt={15} alignItems="center">
            <Box mr='10px'>{I.phone()}</Box>
            <StyledLink href="tel:+380636760604" color="#005a87">
              +38 (063) 676 06 04
            </StyledLink>
          </Flex>
          <Flex mt={15} alignItems="center">
            <Box mr='10px'>{I.mail()}</Box>
            <StyledLink color="#005a87" href="mailto:anwaltpl@gmail.com">
              anwaltpl@gmail.com
            </StyledLink>
          </Flex>
        </Box>
      </Section>
        <Img width="33%" ml="5.5rem" height="auto" src="/flag.png" display={['none', 'block', 'block']} />
      </Flex>
    </Section>
  </Layout>
);

export default Contacts;
