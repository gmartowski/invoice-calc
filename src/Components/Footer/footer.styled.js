import styled from 'styled-components';
import { noisli, snowflake } from '../../variables.styled';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  color: ${snowflake};
  background-color: ${noisli};
  min-height: 200px;
  height: 100%;
  flex: 1;
  align-items: center;
`;
