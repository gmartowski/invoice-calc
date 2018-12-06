import * as React from 'react';
import { HomeWrapper } from './home.styled';
import { Input } from "../Components/Input/Input";
import { Preview } from "../Components/Preview/Preview";
import { DateInput } from "../Components/DateInput/DateInput";

export class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            bruttoQuota: 0,
            dateOfSelling: '',
            methodType: 'metoda kasowa',
            nettoQuota: 0,
            paymentData: new Date(),
            paymentType: new Date(),
            purchaserData: {
                purchaserName: '',
                purchaserNip: '',
                purchaserPostalAndCity: '',
                purchaserSignature: 'Grzegorz Martowski',
                purchaserStreet: '',
            },
            sellData: new Date(),
            sellerData: {
                sellerBankAccontName: '',
                sellerBankName: '',
                sellerName: '',
                sellerNip: '',
                sellerPostalAndCity: '',
                sellerSellerSignature: 'Liliana Grzelak',
                sellerStreet: ''
            },
            setData: new Date(),
            startDate: new Date(),
            taxRate: 0.05,
            vatTax: 0
        }
    }

    private calculateTaxAndQuota = () => {
        this.setState({
            bruttoQuota: parseFloat(this.state.nettoQuota + this.state.nettoQuota * this.state.taxRate),
            vatTax: this.state.nettoQuota * this.state.taxRate
        });
    };

    private inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({[e.target.name]: e.target.value ? parseFloat(e.target.value) : 0}, () => {
            this.calculateTaxAndQuota();
        });

    };

    private onSellerDataChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({sellerData: {...this.state.sellerData, [e.target.name]: e.target.value}});
    };

    private onPurchaserDataChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({purchaserData: {...this.state.purchaserData, [e.target.name]: e.target.value}})
    };

    private selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({[e.target.name]: e.target.value ? parseFloat(e.target.value) : 0}, () => {
            this.calculateTaxAndQuota();
        });
    };

    private onDateInputChangeHandler = (date: Date | null) => {
        this.setState({startDate: date})
    };

    public render() {
        const {
            bruttoQuota,
            nettoQuota,
            taxRate,
            vatTax,
            sellData,
            setData,
            paymentData,
            paymentType,
            methodType,
            sellerData,
            purchaserData
        } = this.state;
        return (
            <HomeWrapper>

                <div className="form">

                    <h2>Dane klienta: </h2>

                    <Input name='purchaserNip' label='Nip nabywcy'
                           value={purchaserData.purchaserNip}
                           onChangeHandler={this.onPurchaserDataChangeHandler}
                    />

                    <Input name='purchaserName' label='Nazwa nabywcy'
                           value={purchaserData.purchaserName}
                           onChangeHandler={this.onPurchaserDataChangeHandler}
                    />

                    <Input name='purchaserStreet' label='Ulica'
                           value={purchaserData.purchaserStreet}
                           onChangeHandler={this.onPurchaserDataChangeHandler}
                    />

                    <Input name='purchaserPostalAndCity'
                           label='Kod pocztowy i miasto'
                           value={purchaserData.purchaserPostalAndCity}
                           onChangeHandler={this.onPurchaserDataChangeHandler} />

                    <Input name='nettoQuota' label="Kwota netto na FV"
                           value={nettoQuota} onChangeHandler={this.inputHandler} />

                    <Input name="sellData" value={sellData} label="Data sprzedaża:"
                           onChangeHandler={this.inputHandler}
                    />

                    <Input name="setData" value={setData} label="Data wystawienia:"
                           onChangeHandler={this.inputHandler}
                    />

                    <Input name="paymentData" value={paymentData} label="Termin płatności:"
                           onChangeHandler={this.inputHandler}
                    />

                    <Input name="paymentType" value={paymentType} label="Metoda płatności:"
                           onChangeHandler={this.inputHandler}
                    />

                    <DateInput date={this.state.paymentData} onDateInputChangeHandler={this.onDateInputChangeHandler} />


                    <label>Stawka VAT</label>
                    <select onChange={this.selectHandler} name="taxRate">
                        <option value="0.05">5</option>
                        <option value="0.08">8</option>
                        <option value="0.23">23</option>
                    </select>

                    <h2>Dane sprzedającego: </h2>

                    <Input name='sellerNip' value={sellerData.sellerNip}
                           label="Nip sprzedającego" onChangeHandler={this.onSellerDataChangeHandler}
                    />
                    <Input name='sellerNip' value={sellerData.sellerNip}
                           onChangeHandler={this.onSellerDataChangeHandler}
                    />

                </div>

                <Preview>

                    <header style={{'display': 'block', 'margin': '10px 0'}}>
                        <h3>Faktura nr FV: 3/12/2018</h3>
                        <div style={{'display': 'grid', gridTemplateColumns: '1fr 1fr'}}>
                            <div>
                                <div>
                                    <div>Data wystawienia:</div>
                                    {/*<div>{setData}</div>*/}
                                </div>
                                <div>
                                    <div>Data sprzedaży:</div>
                                    {/*<div>{sellData}</div>*/}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>Termin płatności:</div>
                                    {/*<div>{paymentData}</div>*/}
                                </div>
                                <div>
                                    <div>Metoda płatności:</div>
                                    {/*<div>{paymentType}</div>*/}
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="transaction-sites">
                        <h2>Sprzedawca: </h2>
                        <div className="seller">
                            <div>{sellerData.sellerName}</div>
                            <div>{sellerData.sellerStreet}</div>
                            <div>{sellerData.sellerPostalAndCity}</div>
                            <div>{sellerData.sellerNip}</div>
                            <div>{sellerData.sellerBankName}</div>
                            <div>{sellerData.sellerBankAccontName}</div>
                        </div>

                        <h2>Nabywca: </h2>
                        <div className="purchaser">
                            <div>{purchaserData.purchaserName}</div>
                            <div>{purchaserData.purchaserStreet}</div>
                            <div>{purchaserData.purchaserPostalAndCity}</div>
                            <div>{purchaserData.purchaserNip}</div>
                        </div>
                    </div>

                    <div className="product-details">
                        <div className="product-labels">
                            <div>Lp.</div>
                            <div>Nazwa</div>
                            <div>Jedn.</div>
                            <div>Ilość</div>
                            <div>Cena netto</div>
                            <div>Stawka</div>
                            <div>Wartość netto</div>
                            <div>Wartość brutto</div>
                        </div>
                        <div className="product-values">
                            <div>1</div>
                            <div>Opieka medyczna luxmed</div>
                            <div>szt</div>
                            <div>1</div>
                            <div>{nettoQuota}</div>
                            <div>{taxRate}</div>
                            <div>{nettoQuota}</div>
                            <div>{bruttoQuota}</div>
                        </div>
                    </div>

                    <div className="tax-details">
                        <div>
                            <div className="labels">
                                <div>Stawka VAT</div>
                                <div>Wartość netto</div>
                                <div>Kwota VAT</div>
                                <div>Wartość brutto</div>
                            </div>
                            <div className="items">
                                <div>{taxRate}</div>
                                <div>{nettoQuota}</div>
                                <div>{vatTax}</div>
                                <div>{bruttoQuota}</div>
                            </div>
                            <div className="metod-type">{methodType}</div>
                        </div>
                        <div className="summary">
                            <div>
                                <div>Razem:</div>
                                <div>Zapłacono:</div>
                                <div>Pozostało:</div>
                            </div>
                            <div>
                                <div>66,42</div>
                                <div>0,00</div>
                                <div>66,42</div>
                            </div>
                        </div>
                    </div>

                    <div className="signatures">
                        <div className="seller-signature">{sellerData.sellerSignature}</div>
                        <div className="purchaser-signature">{purchaserData.purchaserSignature}</div>
                    </div>

                </Preview>
            </HomeWrapper>
        );
    }
}
