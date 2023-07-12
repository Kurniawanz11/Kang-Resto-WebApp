// eslint-disable-next-line import/no-named-as-default
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import PageNotFound from '../views/pages/404-page';

const routes = {
  '/': Home, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/404': PageNotFound,
};

export default routes;
