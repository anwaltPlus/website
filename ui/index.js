import styled from 'styled-components';
import {
  order,
  space,
  width,
  color,
  height,
  border,
  display,
  gridGap,
  flexWrap,
  maxWidth,
  fontSize,
  maxHeight,
  textAlign,
  borderTop,
  lineHeight,
  borderLeft,
  fontWeight,
  alignItems,
  background,
  borderColor,
  borderRight,
  borderBottom,
  borderRadius,
  flexDirection,
  justifyContent,
  gridTemplateColumns,
} from 'styled-system';
// //////////////////////////////////////////////////

export const Box = styled.div`
  ${space}
  ${width}
  ${order}
  ${color}
  ${height}
  ${border}
  ${display}
  ${fontSize}
  ${maxWidth}
  ${maxHeight}
  ${borderTop}
  ${lineHeight}
  ${fontWeight}
  ${background}
  ${borderLeft}
  ${borderRight}
  ${borderBottom}
  ${borderRadius}
  ${borderColor}

  cursor: ${({ cursor }) => cursor};
  text-transform: ${({ textTransform }) => textTransform};
`;

export const Menu = styled.aside`
  ${width}
  top: 0;
  right: 0;
  color: white;
  height: 100vh;
  position: fixed;
  background: #413189;
  transition: width 0.5s ease;
`;

export const BoxHovered = styled(Box)`
  & :hover {
    color: ${({ hoverColor }) => hoverColor};
    background: ${({ hoverBackground }) => hoverBackground};
  }
`;

export const Flex = styled(Box)`
  ${flexWrap}
  ${alignItems}
  ${flexDirection}
  ${justifyContent}

  display: ${({ display }) => display || 'flex'};
`;

export const Grid = styled.div`
  ${space}
  ${gridGap}
  ${maxWidth}
  ${gridTemplateColumns}

  display: ${({ display }) => display || 'grid'};
`;

export const Img = styled.img`
  ${space}
  ${width}
  ${height}
  ${display}
  ${maxWidth}
  ${maxHeight}

  cursor: ${({ cursor }) => cursor};
`;

export const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
`;

export const Header = styled.header`
  max-width: 1920px;
  margin: 0 auto;
  border-bottom: 2px solid #413189;
`;

export const StyledLink = styled.a`
  ${space}
  ${width}
  ${color}
  ${fontSize}
  ${borderBottom}
  ${borderColor}

  cursor: pointer;
  display: ${({ display }) => display || 'block'};
  text-transform: ${({ textTransform }) => textTransform};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;

export const H1 = styled.h1`
  ${space}
  ${color}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
`;

export const H2 = styled.h2`
  ${space}
  ${color}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
`;
export const H3 = styled.h3`
  ${space}
  ${color}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  cursor: ${({ cursor }) => cursor};
`;

export const Text = styled.p`
  ${space}
  ${color}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
`;

export const Section = styled.section`
  ${space}
  ${width}
  ${maxWidth}
  ${background}
`;

export const Article = styled.article`
  ${space}
  ${width}
  ${height}
  ${lineHeight}
`;

export const Footer = styled.footer`
  color: white;
  padding: 2rem;
  background: #413189;
`;
