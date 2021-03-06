import styled, { css } from 'styled-components';
import { colors, responsive } from '../../styles';

export const ListContainer = styled.div`
  position: sticky;
  top: 5px;
  width: 100%;
  padding: 0;
  transition: all 0.3 ease;

  ${responsive.small`
    padding: 16px;
  `}
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    h2 {
      width: 100%;
      margin: 0 0 8px 0;
      font-size: 20px;
      text-transform: uppercase;
      user-select: none;
    }

    button {
      padding: 4px 8px;
      background: ${colors.light};
      border: 1px solid ${colors.black};
      cursor: pointer;
      font-weight: bold;
      text-transform: uppercase;

      &:hover {
        background: ${colors.black};
        color: ${colors.white};
      }
    }
  }

  label {
    user-select: none;
    cursor: pointer;

    svg {
      width: 32px;
    }
  }

  input {
    position: absolute;
    right: 0;
    visibility: hidden;

    &:checked + label {
    }
  }

  ${responsive.medium`
    label, input {
      display: none;
    }
  `}
`;

export const Ul = styled.ul`
  display: none;
  margin-top: 16px;

  ${props =>
    props.open &&
    css`
      display: block;
    `}

  ${responsive.medium`
    display: block;
  `}
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  user-select: none;

  input {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  label {
    width: 90%;
    cursor: pointer;
  }

  svg {
    width: 20px;

    &:hover {
      color: ${colors.error};
    }
  }
`;
