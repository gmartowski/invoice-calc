import styled from 'styled-components';
import { snowflake } from '../../variables.styled';

export const InputWrapper = styled.div`
    display: flex;
`;

export const InputStyled = styled.input`
    display: inline-flex;
    background-color: ${snowflake};
    border-color: #dbdbdb;
    box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
    max-width: 100%;
    width: 100%;
    height: 2.25em;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(.375em - 1px);
    padding-left: calc(.625em - 1px);
    padding-right: calc(.625em - 1px);
    padding-top: calc(.375em - 1px);

`;

export const InputLabel = styled.label`

`;
