import Explore from '~/components/buttons/Explore';
import Intro from '~/components/Global/Intro';
import { Container } from '~/components/home/StyledComp';

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
