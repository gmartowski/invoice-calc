import * as React from 'react';

interface IProps {
    titleContent: string
}

export class Header extends React.Component<IProps> {

    public render() {
        const {titleContent} = this.props;
        return (
            <div>
                <h1>{titleContent}</h1>
            </div>
        );
    }
}
