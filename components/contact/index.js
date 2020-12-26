// icons
import * as I from '../../icons';
// ui
import { Img, Box, Flex, Section, H2, H3, Article, Text, StyledLink } from '../../ui';
// ///////////////////////////////////////////////////////

const ContactWithMap = () => (
  <Section background="#f7f7f7">
    <Flex
      mx="auto"
      flexWrap="wrap"
      maxWidth={1920}
      alignItems="center"
      justifyContent="space-between"
    >
      <Section
        p={[20, 25, 30]}
        fontSize={[14, 16, 18]}
        width={['100%', '100%', '35%']}
      >
        <Article>
          <H2 fontWeight="bold" fontSize="1.17em" color="#413189">
            Контакти
          </H2>
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
            <StyledLink color="#005a87" href="anwaltplus@ukr.net">
            anwaltplus@ukr.net
            </StyledLink>
          </Flex>
        </Box>
      </Section>
      <StyledLink
        target="_blank"
        width={['100%', '100%', '60%']}
        href="https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%86%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE,+1,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8372031,24.0241812,19z/data=!4m5!3m4!1s0x473add6fdfbbe511:0x36de7713f9418349!8m2!3d49.8372857!4d24.0241635?hl=uk"
      >
        <Img height="auto" width="100%" src="/map.png" />
      </StyledLink>
    </Flex>
  </Section>
);

export default ContactWithMap;
