import * as React from 'react';

interface IProps {
    titleContent: string
}

export class Header extends React.Component<IProps> {

    public render() {
        const {titleContent} = this.props;
        return (
            <div>
                <div>{titleContent}</div>
                <nav>
                    <ul>
                        <li>Some simple navigation 1</li>
                        <li>Some simple navigation 2</li>
                    </ul>
                </nav>
            </div>
        );
    }
}
