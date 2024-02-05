
const Error = ({error}) => {
  return (
    <>
        <h2>Somthing is wrong</h2>
        <p>{error ? error.message : "Unknow Error ..."}</p>
    </>
  )
}

export default Error