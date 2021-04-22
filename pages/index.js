import Head from 'next/head';
import Link from 'next/link';
// data
import { services } from '../data';
// components
import Layout from '../components/layout';
// ui
import { Box, Img, Flex, Text, H1, H2, H3, Article, Section, Grid, BoxHovered } from '../ui';
// //////////////////////////////////////////////////

const keywords = 'юрист львів, юредична компанія львів, юридична компанія у львові, адвокат львів, послуги бізнесу, інтелектуальна власність, нерухомість та будівнитство, послуги у сфері міграційного права, ліцензії та дозволи, представництво в судах, митно брокерські послуги, довідки виписки, візова підтримка, консультація юриста';

const frontPageStyles = {
  backgroundSize: 'cover',
};

const Home = ({ router }) => (
  <Layout title="Юридична компанія «Anwalt plus»" router={router} keywords={keywords}>
    {/* <Flex
      width="100%"
      alignItems="center"
      justifyContent='center'
      styles={frontPageStyles}
      height="calc(100vh - 122px)"
      background="url(/buildings.jpg) no-repeat center center"
    >
      <H1
        color="white"
        fontSize="3em"
        fontWeight="bold"
        textAlign="center"
        textShadow="#474747 3px 5px 2px"
      >
        Юридична компанія «Anwalt plus» <br />
        Послуги юристів і адвокатів
      </H1>
    </Flex> */}
    <Img
      width="100%"
      height="calc(100vh - 122px)"
      src="/buildings.jpg" />
    <Section my={50} mx="auto" maxWidth="1200px" px="1rem">
      <Flex alignItems="center">
        <Article lineHeight={1.6} height="max-content">
          <H1
            fontSize="2em"
            color="#413189"
            fontWeight="bold"
            textAlign="center"
          >
            ПРО НАС
          </H1>
          <Text mt={10} fontWeight="bold">
            Юридична компанія «Anwalt plus» пропонує комплексні юридичні послуги бізнесу, громадянам України та іноземцям. 
          </Text>
          <Text mt={10}>
            Наша команда складається з юристів та адвокатів, котрі є професіоналами своєї справи та володіють іноземними мовами. Наша компанія співпрацює з партнерами в кожному великому місті України та закордоном
          </Text>
          <Text mt={10}>
            Ми глибоко вникаємо в суть справи кожного клієнта, щоб знайти найбільш ефективні рішення, що якнайкраще працюватимуть на їхню репутацію. Саме в цьому ми бачимо роль та обов’язок перед кожним клієнтом. Інтереси клієнта – наш головний пріоритет!
          </Text>
        </Article>
        <Img width="33%" ml="5.5rem" height="auto" src="/flag.png" display={['none', 'block', 'block']} />
      </Flex>
    </Section>
    <Section py={50} px="1rem" background="#f7f7f7">
      <H2
        fontSize="1.5em"
        color="#413189"
        fontWeight="bold"
        textAlign="center"
      >
        ДІЯЛЬНІСТЬ КОМПАНІЇ
      </H2>
      <Grid
        mt={50}
        mx="auto"
        gridGap={20}
        maxWidth="1920px"
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr',]}
      >
        {
          services.map(({ title, query }, index) => (
            <Link passHref key={index} href={query != null ? `/services/${query}` : '/#'}>
              <a>
                <BoxHovered
                  p={20}
                  color="#413189"
                  cursor="pointer"
                  hoverColor="white"
                  background="white"
                  borderRadius="4px"
                  hoverBackground="#413189"
                >
                  <Text fontSize="2.25rem" textAlign="center">
                    §
                  </Text>
                  <H3 my={20} fontWeight="bold" textAlign="center" fontSize="1.17em">
                    {title}
                  </H3>
                  <Text textAlign="center" fontSize=".875rem">
                    Докладніше
                  </Text>
                </BoxHovered>
              </a>
            </Link>
          ))
        }
      </Grid>
    </Section>
  </Layout>
);

export default Home;
