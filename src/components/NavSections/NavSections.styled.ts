import styled from '@emotion/styled';

export const SectionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 680px;
  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  border: 0.5px solid ${({ theme }) => theme.colors.navSectionItem};
  border-radius: ${({ theme }) => theme.borderRadius.secondary}px;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  & a {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(5)};
    padding: ${({ theme }) => theme.spacing(3)};
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`;

export const TittleWrap = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  width: 220px;
  min-height: 80px;
  padding: ${({ theme }) => theme.spacing(4)};
  outline: 1px solid greenyellow;
`;

export const Title = styled.span``;

export const Desc = styled.span``;
