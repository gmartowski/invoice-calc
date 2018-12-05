import * as React from 'react';
import './home.less';

export class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            bruttoQuota: 0,
            nettoQuota: 0,
            taxRate: 0.05,
            vatTax: 0
        }
    }

    private calculateTaxAndQuota = () => {
        this.setState({
            bruttoQuota: parseFloat(this.state.nettoQuota + this.state.nettoQuota * this.state.taxRate),
            vatTax: this.state.nettoQuota * this.state.taxRate
        })
    }


    private inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({[e.target.name]: e.target.value ? parseFloat(e.target.value) : 0}, () => {
            this.calculateTaxAndQuota();
        });

    }

    private selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({[e.target.name]: e.target.value ? parseFloat(e.target.value) : 0}, () => {
            this.calculateTaxAndQuota();
        });

        console.log(this.state);
    }

    public render() {
        const {bruttoQuota, nettoQuota, taxRate, vatTax} = this.state;
        return (
            <div className="home">
                <div className="form">

                    <label>Kwota netto</label>
                    <input type="text" name="nettoQuota" value={nettoQuota} onChange={this.inputHandler} />

                    <label>Stawka VAT</label>
                    <select onChange={this.selectHandler} name="taxRate">
                        <option value="0.05">5</option>
                        <option value="0.08">8</option>
                        <option value="0.23">23</option>
                    </select>
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
