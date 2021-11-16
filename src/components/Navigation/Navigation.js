import Media from 'react-media';

import { ReactComponent as HomeIcon } from '../../icons/home.svg';
import { ReactComponent as HomeIconMob } from '../../icons/homeMob.svg';
import { ReactComponent as StatIcon } from '../../icons/statistics.svg';
import { ReactComponent as StatIconMob } from '../../icons/statisticsMob.svg';

import { ReactComponent as ExchangeIcon } from '../../icons/exchange.svg';

import { Wrapper, StyledLink, LinkText, IconWrapper } from './styledNav';

export default function Navigation() {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        tablet: '(min-width: 768px) and (max-width: 1279px)',
        desktop: '(min-width: 1280px)',
      }}
    >
      {matches => (
        <>
          {matches.mobile && (
            <Wrapper>
              <StyledLink to="/" exact>
                <IconWrapper>
                  <HomeIconMob width="38" height="38" />
                </IconWrapper>
              </StyledLink>
              <StyledLink to="/statistics">
                <IconWrapper>
                  <StatIconMob width="38" height="38" />
                </IconWrapper>
              </StyledLink>
              <StyledLink to="/unknown">
                <IconWrapper>
                  <ExchangeIcon width="38" height="38" />
                </IconWrapper>
              </StyledLink>
            </Wrapper>
          )}
          {matches.tablet && (
            <Wrapper>
              <StyledLink to="/" exact>
                <IconWrapper>
                  <HomeIcon width="18" height="18" />
                </IconWrapper>
                <LinkText>Главная</LinkText>
              </StyledLink>
              <StyledLink to="/statistics">
                <IconWrapper>
                  <StatIcon width="18" height="18" />
                </IconWrapper>
                <LinkText>Статистика</LinkText>
              </StyledLink>
            </Wrapper>
          )}
          {matches.desktop && (
            <Wrapper>
              <StyledLink to="/" exact>
                <IconWrapper>
                  <HomeIcon width="18" height="18" />
                </IconWrapper>
                <LinkText>Главная</LinkText>
              </StyledLink>
              <StyledLink to="/statistics">
                <IconWrapper>
                  <StatIcon width="18" height="18" />
                </IconWrapper>
                <LinkText>Статистика</LinkText>
              </StyledLink>
            </Wrapper>
          )}
        </>
      )}
    </Media>
  );
}
