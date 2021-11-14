import { ReactComponent as HomeIcon } from '../../icons/home.svg';
import { ReactComponent as StatIcon } from '../../icons/statistics.svg';
import { Wrapper, StyledLink, LinkText } from './styledNav';

export default function Navigation() {
  return (
    <Wrapper>
      <StyledLink to="/" exact>
        <HomeIcon width="18" height="18" />
        <LinkText>Главная</LinkText>
      </StyledLink>

      <StyledLink to="/statistics">
        <StatIcon width="18" height="18" />
        <LinkText>Статистика</LinkText>
      </StyledLink>
    </Wrapper>
  );
}
