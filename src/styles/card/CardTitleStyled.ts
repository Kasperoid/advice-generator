import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import styled from 'styled-components';
import { baseTheme } from '../theme';

const { Title } = Typography;
export const CardTitleStyled = styled(Title)<TitleProps>`
  && {
    color: ${baseTheme.color.secondary};
    letter-spacing: 4px;
    font-weight: 800;
    font-size: calc(
      ${baseTheme.font.title.cardTitle.min}px +
        (
          ${baseTheme.font.title.cardTitle.max} -
            ${baseTheme.font.title.cardTitle.min}
        ) * (100vw - 320px) / 1600
    );
  }
`;
