import Explore from '~/components/buttons/Explore';
import Intro from '~/components/Global/Intro';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export default function Index() {
  return (
    <Container>
      <Intro
        small_title="so, you want to travel to"
        title="space"
        text="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
      />
      <Explore />
    </Container>
  );
}
