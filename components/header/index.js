// icons
import * as I from '../../icons';
// ui
import { Img, Box, Flex, Header, Article, H3, Text, StyledLink } from '../../ui';
// ///////////////////////////////////////////////////////

const HeaderComponent = ({ isMenuOpened, setIsOpenedMenu, handleGoToHomePage }) => (
  <Header>
    <Flex
      mx="auto"
      p="10px 20px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Img
        width={100}
        height={100}
        src="/logo.svg"
        cursor="pointer"
        onClick={handleGoToHomePage}
      />
      <Flex alignItems="center">
        <Flex height="max-content" fontSize={12} mr={[20, 20, 50]} display={['none', 'flex', 'flex']}>
          <Box cursor="pointer" color="#005a87" borderRight="1px solid #ebebeb" pr={10}>УКР</Box>
          <Box pl={10} cursor='pointer' color="#5d5d5d">EN</Box>
        </Flex>
        <Box mr={[20, 20, 50]} display={['none', 'block', 'block']}>
          <Text fontSize={12}>
            Графік роботи:
          </Text>
          <Text mt={10} fontSize={12}>
            пн-пт 8:00 – 20:00
          </Text>
          <Text mt={10} fontSize={12}>
            сб 10:00 – 18:00
          </Text>
        </Box>
        <Box display={['none', 'block', 'block']}>
          <Flex alignItems="center">
            <Box mr={10}>
              {I.phone()}
            </Box>
            <StyledLink color="#004187" href="tel:+380676760604">+38 (067) 676 06 04</StyledLink>
          </Flex>
          <Flex mt={20} alignItems="center">
            <Box mr={10}>
              {I.phone()}
            </Box>
            <StyledLink color="#004187" href="tel:+380636760604">+38 (063) 676 06 04</StyledLink>
          </Flex>
        </Box>
        {
          isMenuOpened === false &&
          <Flex
            p={10}
            width={120}
            cursor="pointer"
            alignItems="center"
            ml={[20, 20, 50]}
            border="1px solid #413189"
            justifyContent="space-between"
            onClick={() => setIsOpenedMenu(true)}
          >
            <Box height="max-content" color="#5d5d5d" fontWeight={500}>
              МЕНЮ
            </Box>
            <Box>
              {I.menu()}
            </Box>
          </Flex>
          // <Flex ml={[20, 20, 50]} flexDirection="column" alignItems="center">
          //   <Flex height="max-content" fontSize={12}>
          //     <Box cursor="pointer" color="#005a87" borderRight="1px solid #ebebeb" pr={10}>УКР</Box>
          //     <Box pl={10} cursor='pointer' color="#5d5d5d">EN</Box>
          //   </Flex>
          //   <Flex
          //     p={10}
          //     mt={10}
          //     width={120}
          //     cursor="pointer"
          //     alignItems="center"
          //     border="1px solid #413189"
          //     justifyContent="space-between"
          //     onClick={() => setIsOpenedMenu(true)}
          //   >
          //     <Box height="max-content" color="#5d5d5d" fontWeight={500}>
          //       МЕНЮ
          //     </Box>
          //     <Box>
          //       {I.menu()}
          //     </Box>
          //   </Flex>
          // </Flex>
        }
        {
          isMenuOpened && <Box ml={50} width={120} />
        }
      </Flex>
    </Flex>
  </Header>
);

export default HeaderComponent;
