import React from 'react';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { PrimeStateType } from './Redux/redux-store';
import { responseServer } from './Redux/ajax-reducer';
import { useState } from 'react';

type ServerType = {
  page: string;
  responseServer: (page: string) => void;
};
const Server: React.FC<ServerType> = (page, responseServer) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${page.page}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    console.log(page);
  }, [page]);
  const dispatch = useDispatch();
  const userPage = () => {
    dispatch(responseServer(page));
  };
  const todosPage = () => {
    dispatch(responseServer('todos'));
  };
  const postsPage = () => {
    dispatch(responseServer('posts'));
  };
  return (
    <div>
      <button onClick={() => userPage()}>Users</button>
      <button onClick={() => todosPage()}>Todos</button>
      <button onClick={postsPage}>Posts</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
const mapStateToProps = (state: PrimeStateType) => ({
  page: state.ajax.page,
});
export default connect(mapStateToProps, { responseServer })(Server);
