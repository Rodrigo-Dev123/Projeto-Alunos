import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function myRoute({ Componente, isClosed, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { prevPatch: rest.location.pathname },
        }}
      />
    );
  }

  return <Route {...rest} element={<Componente />} />; // eslint-disable-line
}

export default myRoute;
