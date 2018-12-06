import * as React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
    date: Date | null;
    onDateInputChangeHandler: (date: Date | null, event: React.SyntheticEvent<any> | undefined) => void;
}

export class DateInput extends React.Component<IProps> {

    public render(){
        return(
            <DatePicker
                selected={this.props.date}
                dateFormat="DD-MM-YYYY"
                onChange={this.props.onDateInputChangeHandler}
            />
        )
    }
}
