import styled from '@emotion/styled';
import { IStyledProps } from './NavSections.types';
import { setNavSectionTitleWrapBGColor } from '@/utils';

export const SectionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 680px;
  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  border: 0.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.secondary}px;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  overflow: hidden;

  & a {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(5)};
    padding: ${({ theme }) => theme.spacing(3)};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`;

export const TittleWrap = styled.span<IStyledProps>`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  min-height: 80px;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ path }) => setNavSectionTitleWrapBGColor(path)};
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;

export const DescWrap = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

export const Desc = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  font-size: 16px;
  line-height: 1.5;
`;
