import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="sm:my16 my-10 text-center">
      <h1 className="mb-8 text-center text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
