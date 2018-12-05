import * as React from 'react';

interface IProps {
    footerContent: string;
    copyright: string;
}

export class Footer extends React.Component<IProps> {
    public render() {
        return (
            <footer>
                Jakaś tam stopka
            </footer>
        )
    }
}
