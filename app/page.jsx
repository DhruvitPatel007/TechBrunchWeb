import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Come across & Share
        <br className="max-md:hidden" />
        <span className="green_gradient text-center">Technical Prompts</span>
      </h1>
      <p className="desc text-center">
        Tech Brunch is a collaborative AI platform designed to facilitate the
        exploration, generation, and sharing of imaginative prompts in the
        digital age.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
