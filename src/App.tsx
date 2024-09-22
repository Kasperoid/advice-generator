import { FETCH_URL } from './constants/constants';
import useSWR from 'swr';
import { fetcher } from './helpers/fetcher';
import AdviceCardContainer from './components/AdviceCardContainer';
import { AdviceType } from './types/advice';
import { LayoutStyled } from './styles/app/LayoutStyled';
import { ContentStyled } from './styles/app/ContentStyled';

function App() {
  const { data, isLoading } = useSWR<AdviceType>(FETCH_URL, fetcher);

  return (
    <LayoutStyled>
      <ContentStyled>
        <AdviceCardContainer
          id={data?.slip.id}
          advice={data?.slip.advice}
          loading={isLoading}
        />
      </ContentStyled>
    </LayoutStyled>
  );
}

export default App;
