import styled from 'styled-components';
// icons
import * as I from '../../icons';
// ui
import { Img, Box, Flex, Header, Article, H1, H2, Text, StyledLink } from '../../ui';
// ///////////////////////////////////////////////////////

const HeaderTitle = styled(H1)`
  @media (max-width: 1400px) {
    font-size: 30px;
  }
  @media (max-width: 1360px) {
    font-size: 25px;
  }
  @media (max-width: 1360px) {
    font-size: 20px;
  }
  @media (max-width: 1100px) {
    font-size: 15px;
  }
  @media (max-width: 985px) {
    display: none;
  }
`;

const HeaderTitleV2 = styled(H2)`
  display: none;
  @media (max-width: 630px) {
    display: block;
  }
`;

const HeaderComponent = ({ isMenuOpened, setIsOpenedMenu, handleGoToHomePage }) => (
  <Header>
    <Flex
      mx="auto"
      alignItems="center"
      justifyContent="space-between"
    >
      <Img
        src="/logo.svg"
        cursor="pointer"
        width={[50, 100, 100]}
        height={[50, 100, 100]}
        onClick={handleGoToHomePage}
      />
      <HeaderTitle
        color="#413189"
        fontSize="2em"
        fontWeight="bold"
        textAlign="center"
      >
        Юридична компанія «Anwalt plus» <br />
        Послуги юристів і адвокатів
      </HeaderTitle>
      <HeaderTitleV2
        fontSize={15}
        color="#413189"
        fontWeight="bold"
        textAlign="center"
      >
        Юридична компанія «Anwalt plus»
      </HeaderTitleV2>
      <Flex alignItems="center">
        <Flex height="max-content" fontSize={12} mr={[20, 20, 50]} display={['none', 'flex', 'flex']}>
          <Box fontSize={12} cursor="pointer" color="#005a87" borderRight="1px solid #ebebeb" pr={10}>УКР</Box>
          <Box fontSize={12} pl={10} cursor='pointer' color="#5d5d5d">EN</Box>
        </Flex>
        <Box mr={[20, 20, 30]} display={['none', 'block', 'block']}>
          <Text fontSize={12}>
            Графік роботи:
          </Text>
          <Text mt={10} fontSize={11}>
            пн-пт 8:00 – 20:00
          </Text>
          <Text mt={10} fontSize={11}>
            сб 10:00 – 18:00
          </Text>
        </Box>
        <Box display={['none', 'block', 'block']}>
          <Flex alignItems="center">
            <Box mr={10}>
              {I.phone()}
            </Box>
            <StyledLink fontSize={12} color="#004187" href="tel:+380676760604">+38 (067) 676 06 04</StyledLink>
          </Flex>
          <Flex mt={20} alignItems="center">
            <Box mr={10}>
              {I.phone()}
            </Box>
            <StyledLink fontSize={12} color="#004187" href="tel:+380636760604">+38 (063) 676 06 04</StyledLink>
          </Flex>
        </Box>
        {
          isMenuOpened === false &&
          <Flex
            cursor="pointer"
            p={['5px', 10, 10]}
            alignItems="center"
            ml={[20, 20, 50]}
            width={[80, 120, 120]}
            border="1px solid #413189"
            justifyContent="space-between"
            onClick={() => setIsOpenedMenu(true)}
          >
            <Box
              color="#5d5d5d"
              fontWeight={500}
              height="max-content"
              fontSize={[12, 14, 14]}
            >
              МЕНЮ
            </Box>
            <Box display={['none', 'block', 'block']}>
              {I.menu()}
            </Box>
            <Box display={['block', 'none', 'blononeck']}>
              {I.menu2()}
            </Box>
          </Flex>
        }
        {
          isMenuOpened && <Box ml={[20, 20, 50]} width={[80, 120, 120]} />
        }
      </Flex>
    </Flex>
    <HeaderTitleV2
      fontSize={15}
      color="#413189"
      fontWeight="bold"
      textAlign="center"
    >
      Послуги юристів і адвокатів
  </HeaderTitleV2>
  </Header>
);

export default HeaderComponent;
