import { Layout, Flex } from 'antd';
import { FETCH_URL } from './constants/constants';
import useSWR from 'swr';
import { fetcher } from './helpers/fetcher';
import AdviceCardContainer from './components/AdviceCardContainer';
import { AdviceType } from './types/advice';

function App() {
  const { Content } = Layout;
  const { data, isLoading } = useSWR<AdviceType>(FETCH_URL, fetcher);

  console.log(isLoading);

  return (
    <Layout>
      <Content>
        <Flex justify="center" align="center">
          <AdviceCardContainer
            id={data?.slip.id}
            advice={data?.slip.advice}
            loading={isLoading}
          />
        </Flex>
      </Content>
    </Layout>
  );
}

export default App;
