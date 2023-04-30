import SingleItem from "./SingleItem";
import { useFetchTasks } from "./ReactQueryCustomHooks";

const Items = () => {
  const { isLoading, isError, data } = useFetchTasks();

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }

  //display custom error message
  if (isError) {
    return <p style={{ marginTop: "1rem" }}>there was an error...</p>;
  }

  //display axios error message
  /* if (error) {
    return <p style={{ marginTop: "1rem" }}>{error.message}.</p>;
  } */

  //display error returned from the server
  /*if (isError) {
    return <p style={{ marginTop: "1rem" }}>{error.response.data}</p>;
  }*/

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
