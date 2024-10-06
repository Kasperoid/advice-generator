import { Flex } from 'antd';
import { AdviceType } from '../types/advice';
import { DiceIcon } from './Icons';
import { useSWRConfig } from 'swr';
import { FETCH_URL } from '../constants/constants';
import { fetcher } from '../helpers/fetcher';
import { useState } from 'react';
import { CardContainer } from '../styles/card/CardContainer';
import { CardContainerInner } from '../styles/card/CardContainerInner';
import { CardTitleStyled } from '../styles/card/CardTitleStyled';
import { CardTextStyled } from '../styles/card/CardTextStyled';
import { DividerCardStyled } from '../styles/card/DividerCardStyled';
import { DividerStickStyled } from '../styles/card/DividerStickStyled';
import { RandomCardBtnStyled } from '../styles/card/RandomCardBtnStyled';

interface AdviceCardContainerProps extends Partial<AdviceType['slip']> {
  loading: boolean;
}

const AdviceCardContainer = ({
  id,
  advice,
  loading,
}: AdviceCardContainerProps) => {
  const onClickRandomBtn = () => {
    mutate(FETCH_URL, fetcher(FETCH_URL), { revalidate: false });
    setBlockBtn(true);
    const timer = setTimeout(() => {
      setBlockBtn(false);
      clearTimeout(timer);
    }, 1500);
  };
  const [blockBtn, setBlockBtn] = useState<boolean>(false);
  const { mutate } = useSWRConfig();
  return (
    <CardContainer justify="center" align="center">
      <CardContainerInner loading={loading} bordered={false}>
        <Flex vertical align="center">
          <CardTitleStyled>ADVICE #{id}</CardTitleStyled>
          <CardTextStyled className="body-card-text">{advice}</CardTextStyled>
        </Flex>
        <DividerCardStyled>
          <Flex gap={6}>
            <DividerStickStyled />
            <DividerStickStyled />
          </Flex>
        </DividerCardStyled>
        <RandomCardBtnStyled
          disabled={blockBtn}
          icon={<DiceIcon />}
          onClick={() => onClickRandomBtn()}
        />
      </CardContainerInner>
    </CardContainer>
  );
};

export default AdviceCardContainer;
