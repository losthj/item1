import React, { Component } from 'react';
import { Form } from 'zent';
const { FormSelectField, createForm } = Form;

class BankCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{
    "card_id": "2801601",
    "card_bank": "CITIC",
    "card_no": "************0804",
    "card_name": "*凯",
    "card_type": "DEBIT",
    "card_prop": "C",
    "card_verify": "Y",
    "card_atime": "20151110103757",
    "card_safe": "Y",
    "bank_icon": "https://img.jylc168.com/V3/bank/CITIC.png",
    "bank_name": "中信银行",
    "bank_info": "单笔5千，单日2万，每月5万"
}]
    }
  }
  onSelect = (value) => {
    console.log('资金账户', value)
  }
  render() {
    return (
      <div className="m-charge">
        <div className="charge-title" style={{border:'none'}}>
          我的银行卡
        </div>
        <div className="m-tab-con">
          <div className="m-form">
            <Form inline>
              <FormSelectField
                name="type"
                label="资金账户:"
                data={[
                  { value: 1, text: '出借账户' },
                  { value: 2, text: '借款账户' },
                ]}
                onChange = { this.onSelect }
              />
            </Form>
          </div>
          <div className="card-con clearfix">
            <div className="card-item">
              <div className="card-img">
                <img src="https://img.jylc168.com/V3/bank/CITIC.png" alt=""/>
              </div>
              <div className="card-info">
                <strong>************0804</strong> <br/>
                单笔5千，单日2万，每月5万
              </div>
              <div className="card-corner">安全卡</div>
            </div>
            <div className="no-card">
              <div><strong>+</strong> <br/>新增银行卡</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const WrappedForm = createForm()(BankCard);

export default WrappedForm;
