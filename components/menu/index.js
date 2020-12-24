import Link from 'next/link';
// icons
import * as I from '../../icons';
// ui
import { Box, Menu, Flex, StyledLink } from '../../ui';
// ///////////////////////////////////////////////////////

const MenuComponent = ({ width, isMenuOpened, setIsOpenedMenu }) => (
  <Menu width={width}>
    {
      isMenuOpened &&
      <Flex
        p="1rem"
        width="100%"
        cursor="pointer"
        alignItems="center"
        border="1px solid white"
        justifyContent="center"
        onClick={() => setIsOpenedMenu(false)}
      >
        <Box cursor="pointer" height="max-content" color="white" fontWeight={500}>
          МЕНЮ
        </Box>
        <Box ml={30}>
          {I.close()}
        </Box>
      </Flex>
    }
    <Link href="/" passHref>
      <StyledLink cursor="pointer" p="1rem" color="white" borderBottom="1px solid white">
        ГОЛОВНА
      </StyledLink>
    </Link>
    <Link href="/services" passHref>
      <StyledLink cursor="pointer" p="1rem" color="white" borderBottom="1px solid white">
        ПОСЛУГИ
      </StyledLink>
    </Link>
    <Link href="/contacts" passHref>
      <StyledLink cursor="pointer" p="1rem" color="white" borderBottom="1px solid white">
        КОНТАКТИ
      </StyledLink>
    </Link>
  </Menu>
);

export default MenuComponent;