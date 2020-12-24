import Head from 'next/head';
// data
import { services } from '../../data';
// components
import Layout from '../../components/layout';
// ui
import { Box, Img, Flex, Text, H1, H3, Grid, BoxHovered, Section } from '../../ui';
// //////////////////////////////////////////////////

const keywords = 'юрист львів, юредична компанія львів, юридична компанія у львові, адвокат львів, послуги бізнесу, інтелектуальна власність, нерухомість та будівнитство, послуги у сфері міграційного права, ліцензії та дозволи, представництво в судах, митно брокерські послуги, довідки виписки, візова підтримка, консультація юриста';

const Services = ({ router }) => (
  <Layout router={router} title="Послуги" keywords={keywords}>
    <Section py="2.5rem">
      <H1 mt="4rem" fontSize="2em" color="#413189" textAlign="center" fontWeight="bold">
        Послуги
      </H1>
      <Grid
        mt={50}
        mx="auto"
        gridGap={20}
        maxWidth="1920px"
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
      >
        {
          services.map(({ title, query }, index) => (
            <BoxHovered
              p={20}
              key={index}
              color="#413189"
              cursor="pointer"
              hoverColor="white"
              background="white"
              borderRadius="4px"
              hoverBackground="#413189"
              onClick={() => query != null && router.push(`/services/${query}`)}
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
          ))
        }
      </Grid>
    </Section>
  </Layout>
);

export default Services;
