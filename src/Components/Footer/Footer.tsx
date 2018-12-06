import * as React from 'react';
import { FooterWrapper } from './footer.styled';

interface IProps {
    footerContent: string;
    copyright: string;
}

export class Footer extends React.Component<IProps> {
    public render() {
        return (
            <FooterWrapper>
                <div>{this.props.footerContent}</div>
                <div>{this.props.copyright}</div>
            </FooterWrapper>
        )
    }
}
