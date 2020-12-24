import * as R from 'ramda';
import Link from 'next/link';
// data
import { services } from '../../../data';
// components
import Layout from '../../../components/layout';
// ui
import { Section, H2, H3, Article, Box, Flex, Text, StyledLink } from '../../../ui';
// //////////////////////////////////////////////////

const Services = ({ router }) => {
  const { push, query: { id } } = router;
  if (R.isNil(id)) return null;
  const { text, type, title, categories } = R.find(R.propEq('query', id), services);
  let keywords = '';
  if (R.equals(type, 'list')) keywords = R.join(', ', categories);
  if (R.equals(type, 'listWithSubCategories')) {
    keywords = R.compose(
      R.join(', '),
      R.flatten,
      R.map(R.prop('subCategories'))
    )(categories);
  }

  return (
    <Layout title={title} router={router} keywords={keywords}>
      <Section
        mx="auto"
        maxWidth="1200px"
        p="3rem 1rem 6rem 1rem"
      >
      <Flex
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Article width={['100%', '100%', '55%']}>
          <H2
            my='.5rem'
            fontSize="1.5em"
            lineHeight={2}
            color="#413189"
            fontWeight="bold"
          >
            {title}
          </H2>
          {
            R.equals(type, 'article') &&
            <Text my=".5rem" lineHeight={1.5}>
              {text}
            </Text>
          }
          {
            R.equals(type, 'list') &&
            <ul>
              {
                R.equals(type, 'list') &&
                categories.map((item, index) => <li key={index}>{item}</li>)
              }
            </ul>
          }
          {
            R.equals(type, 'listWithSubCategories') &&
            <Box>
              {
                categories.map(({ subTitle, subCategories }, index) => (
                  <Box key={index}>
                    <H3
                      my='.5rem'
                      lineHeight={2}
                      fontSize="1.2em"
                      color="#413189"
                      fontWeight="bold"
                    >
                      {subTitle}
                    </H3>
                    <ul>
                      {
                        subCategories.map((item, index) => <li key={index}>{item}</li>)
                      }
                    </ul>
                  </Box>
                ))
              }
            </Box>
          }
        </Article>
        <Box
          p="1.5rem"
          borderRadius="4px"
          background="#f7f7f7"
          mt={['3rem', '3rem', 0]}
          width={['100%', '100%', '35%']}
        >
          <H3
            mb=".25rem"
            color="#413189"
            fontSize="1.17em"
            fontWeight="bold"
            lineHeight={1.5}
            cursor="pointer"
            onClick={() => push('/services')}
          >
            Послуги
          </H3>
          <Box>
            {
              services.map(({ query, title }, index) => (
                <Link key={index} href={R.not(R.isNil(query)) ? `/services/${query}` : `/services/${id}`} passHref>
                  <StyledLink
                    my=".5rem"
                    key={index}
                    color="#413189"
                    cursor="pointer"
                    lineHeight={1.5}
                    textTransform="capitalize"
                  >
                    {R.toLower(title)}
                  </StyledLink>
                </Link>
              ))
            }
          </Box>
        </Box>
      </Flex>
      </Section>
    </Layout>
  );
}

export default Services;
