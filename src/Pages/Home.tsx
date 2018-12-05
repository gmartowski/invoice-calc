import * as React from 'react';
import './home.less';

export class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            bruttoQuota: 0,
            nettoQuota: 0,
            taxRate: 0,
            vatTax: 0
        }
    }

    private calculateTaxAndQuota = (netto: number, rate: number) => {
        this.setState({
            bruttoQuota: netto + netto * rate,
            vatTax: netto * rate
        })
    }


    private inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({[e.target.name]: e.target.value});
        this.calculateTaxAndQuota(this.state.nettoQuota, this.state.taxRate);
    }

    public render() {
        const {bruttoQuota, nettoQuota, taxRate, vatTax} = this.state;
        return (
            <div>
                <div className="form">

                    <label>Kwota netto</label>
                    <input type="text" name="nettoQuota" value={nettoQuota} onChange={this.inputHandler} />

                    <label>Stawka VAT</label>
                    <select onChange={this.state.taxRate}>
                        <option value="0">0</option>
                        <option value="5">5</option>
                        <option value="8">8</option>
                        <option value="23">23</option>
                    </select>

                    <label>Kwota brutto</label>
                    <input type="text" name="bruttoQuota" value={bruttoQuota} onChange={this.inputHandler} />
                </div>

                <div className="preview">
                    <div>Kwota netto: {nettoQuota}</div>
                    <div>Stawka VAT: {taxRate}</div>
                    <div>Kwota VAT: {vatTax}</div>
                    <div>Kwota brutto: {bruttoQuota}</div>
                </div>
            </div>
        );

    }
}
