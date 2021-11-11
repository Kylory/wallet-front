// import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../icons/home.svg';
import { ReactComponent as StatIcon } from '../icons/statistics.svg';

export default function Navigation() {
  return (
    <div>
      {/* <NavLink to="/" exact>
        <HomeIcon width="18" height="18" />
        Главная
      </NavLink>

      <NavLink to="/statistics">
        <StatIcon width="18" height="18" />
        Статистика
      </NavLink> */}
      <ul>
        <li>
          <HomeIcon width="18" height="18" />
          <a href="/">Главная</a>
        </li>
        <li>
          <StatIcon width="18" height="18" />
          <a href="/">Статистика</a>
        </li>
      </ul>
    </div>
  );
}
