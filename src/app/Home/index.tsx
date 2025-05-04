import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Menu from '../../components/Menu';

// https://nextjs.org/docs/app/guides/migrating/app-router-migration#static-site-generation-getstaticprops
function getProjects() {
  return 'projects';
}

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        {getProjects()}
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
);

export default Home;
