const Error = (props) => {
  const { error = "Unknow Error..." } = props.error;
  return (
    <>
      <h2>Somthing is wrong</h2>
      <p>{error}</p>
    </>
  );
};

export default Error;
