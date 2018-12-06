import * as React from 'react';
import { PreviewWrapper } from './preview.styled';

interface IProps {
    children: any;
}

export const Preview: React.SFC<IProps> = ({children}) => <PreviewWrapper>{children}</PreviewWrapper>;

