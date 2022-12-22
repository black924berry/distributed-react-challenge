import LinkItem from '../LinkItem';
import './styles.sass';

const Menu = () => {
  const menuList = [{
    title: "Home",
    path: "/dashboard"
  }, {
    title: "Teams",
    path: "/teams"
  }, {
    title: "Events",
    path: "/events"
  }, {
    title: "Resources",
    path: "/resources"
  }, {
    title: "Discord",
    path: "/discord"
  }, {
    title: "Directory",
    path: "/directory"
  }, {
    title: "Forums",
    path: "/forums"
  }, {
    title: "Benefits",
    path: "/benefits"
  }];

  return (
    <nav className='app-menu__list'>
      {
        menuList?.map((item, index) => (
          <LinkItem
            key={item.path + index}
            title={item.title}
            path={item.path}
          />
        ))
      }
    </nav>
  );
}

export default Menu;