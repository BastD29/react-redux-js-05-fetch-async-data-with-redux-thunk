import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions";

const MyComponent = ({ data, isLoading, error, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  isLoading: state.isLoading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchData,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: () => dispatch(fetchData()),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
