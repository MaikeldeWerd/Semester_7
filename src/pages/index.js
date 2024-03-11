import Layout from "@/components/layouts/Layout";
import Container from "@/components/layouts/Container";
import Panel from "@/components/panels/Panel";
import Button from "@/components/buttons/Button";

const Home = () => {
  return (
      <Layout>
        <Container>
          <div className={'grid grid-cols-2 gap-10 p-6'}>
            <div className={'flex flex-col gap-10 justify-between'}>
              <h1 className={'text-2xl'}>Hello, my name is <span
                  className={'text-orange-500'}>Maikel de Werd</span></h1>

              <div className={'flex flex-col gap-10'}>
                <div className={'flex flex-col gap-2'}>
                  <p className={'text-lg'}>About me</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam beatae,
                    commodi delectus dolorem ea exercitationem expedita illum inventore, ipsam mollitia
                    nemo nostrum officia quam quas quibusdam saepe ullam ut!</p>
                </div>

                <Button>
                  <span>See my work</span>
                </Button>
              </div>
            </div>

            <div className={'flex justify-center items-center'}>
              <img className={'w-2/3 aspect-square'} src="" alt=""/>
            </div>
          </div>

          <Panel>
            <h1 className={'text-2xl font-semibold'}>Reading guide</h1>

            <iframe className={'bg-white'} src=""></iframe>
          </Panel>
        </Container>
      </Layout>
  );
}

export default Home;
