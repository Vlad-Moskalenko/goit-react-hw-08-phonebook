const styles = {
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <>
      <h1 style={styles.title}>
        Contacts manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </>
  );
};

export default Home;
