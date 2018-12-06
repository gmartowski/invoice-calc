import * as React from 'react';
import { HeaderWrapper } from './header.styled';

interface IProps {
    titleContent: string
}

export class Header extends React.Component<IProps> {

    public render() {
        const {titleContent} = this.props;
        return (
            <HeaderWrapper>
                <h1>{titleContent}</h1>
            </HeaderWrapper>
        );
    }
}
