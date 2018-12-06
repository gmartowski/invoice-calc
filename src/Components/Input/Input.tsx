import * as React from 'react';
import { InputStyled, InputLabel, InputWrapper } from './input.styled';

interface IProps {
    label?: string;
    name: string;
    value: string;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export class Input extends React.Component<IProps> {

    public render() {
        return (
            <InputWrapper>
                <InputLabel>{this.props.label}</InputLabel>
                <InputStyled name={this.props.name} value={this.props.value} onChange={this.props.onChangeHandler} />
            </InputWrapper>
        );
    }
}
