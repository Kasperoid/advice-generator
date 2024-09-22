import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import styled from 'styled-components';
import { baseTheme } from '../theme';

const { Text } = Typography;

export const CardTextStyled = styled(Text)<TextProps>`
  && {
    font-size: calc(
      ${baseTheme.font.text.cardBody.min}px +
        (
          ${baseTheme.font.text.cardBody.max} -
            ${baseTheme.font.text.cardBody.min}
        ) * (100vw - 320px) / 1600
    );
    font-weight: 800;
    text-align: center;
    color: ${baseTheme.color.primary};
  }
`;
