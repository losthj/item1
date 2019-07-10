import React, { Component, Fragment } from 'react';
import { Form, Radio, Button, Notify } from 'zent';
const { FormRadioGroupField, createForm } = Form;


class RiskAssessment extends Component {
  constructor(props){
    super(props);
    this.state  = {
      list: [
          {
              "_id": "5b05906f252dfa23db650fd2",
              "info": "注：本项选择“完全不了解”的投资人不能在本平台进行投资操作，需重新进行风险评估通过后方可开通投资操作功能。",
              "title": "您是否了解非保本类金融产品(包括股票、基金、黄金、外汇、期货、企业债券等)并熟悉互联网？",
              "options": [
                  {
                      "name": "熟悉",
                      "score": "100"
                  },
                  {
                      "name": "大概了解",
                      "score": "100"
                  },
                  {
                      "name": "完全不了解",
                      "score": "0"
                  }
              ]
          },
          {
              "_id": "5b05906f252dfa23db650fd3",
              "info": "",
              "title": "您的年龄是？",
              "options": [
                  {
                      "name": "18-30",
                      "score": "10"
                  },
                  {
                      "name": "31—50",
                      "score": "8"
                  },
                  {
                      "name": "51—60",
                      "score": "5"
                  },
                  {
                      "name": "高于60岁",
                      "score": "2"
                  }
              ]
          },
          {
              "_id": "5b05906f252dfa23db650fd4",
              "info": "",
              "title": "您的教育程度：",
              "options": [
                  {
                      "name": "高中以下",
                      "score": "2"
                  },
                  {
                      "name": "专科",
                      "score": "5"
                  },
                  {
                      "name": "本科",
                      "score": "8"
                  },
                  {
                      "name": "研究生或研究生以上",
                      "score": "10"
                  }
              ]
          },
          {
              "_id": "5b05906f252dfa23db650fd5",
              "info": "",
              "title": "您目前的职业状况：",
              "options": [
                  {
                      "name": "待业或退休",
                      "score": "2"
                  },
                  {
                      "name": "无固定工作",
                      "score": "5"
                  },
                  {
                      "name": "企事业单位固定工作",
                      "score": "8"
                  },
                  {
                      "name": "私营业主",
                      "score": "10"
                  }
              ]
          },
          {
              "_id": "5b05906f252dfa23db650fd6",
              "info": "",
              "title": "您的家庭年收入折合人民币为？",
              "options": [
                  {
                      "name": "5万元以下",
                      "score": "2"
                  },
                  {
                      "name": "5—10万元",
                      "score": "4"
                  },
                  {
                      "name": "10—20万元 ",
                      "score": "6"
                  },
                  {
                      "name": "20—30万元 ",
                      "score": "8"
                  },
                  {
                      "name": "30万元以上",
                      "score": "10"
                  }
              ]
          },
          {
              "_id": "5b05906f252dfa23db650fd7",
              "info": "",
              "title": "在您每年的家庭收入中，可用于金融投资的比例为？",
              "options": [
                  {
                      "name": "小于10%",
                      "score": "2"
                  },
                  {
                      "name": "10%至25%",
                      "score": "5"
                  },
                  {
                      "name": "25%至50%",
                      "score": "8"
                  },
                  {
                      "name": "大于50%",
                      "score": "10"
                  }
              ]
          },
          {
              "_id": "5b05906f252dfa23db650fd8",
              "info": "",
              "title": "您进行投资的主要目的是：",
              "options": [
                  {
                      "name": "确保资产的安全性，同时获得固定收益",
                      "score": "2"
                  },
                  {
                      "name": "希望投资能获得一定的增值，同时获得波动适度的回报",
                      "score": "5"
                  },
                  {
                      "name": "倾向于长期的成长，较少关心短期的回报和波动",
                      "score": "8"
                  },
                  {
                      "name": "只关心长期的高回报，能够接受短期的资产价值波动",
                      "score": "10"
                  }
              ]
          },
          {
              "_id": "5b05906f252dfa23db650fd9",
              "info": "",
              "title": "您有多少年非保本类金融产品投资经历（包括股票、基金、黄金、外汇、期货、企业债券、金融衍生产品等）？",
              "options": [
                  {
                      "name": "少于1年",
                      "score": "2"
                  },
                  {
                      "name": "1至3年",
                      "score": "5"
                  },
                  {
                      "name": "3至5年",
                      "score": "8"
                  },
                  {
                      "name": "5年以上",
                      "score": "10"
                  }
              ]
          },
          {
              "_id": "5b05906f252dfa23db650fda",
              "info": "",
              "title": "以下哪项描述最符合您的投资态度？",
              "options": [
                  {
                      "name": "厌恶风险，不希望本金损失，希望获得稳定回报",
                      "score": "2"
                  },
                  {
                      "name": "保守投资，不希望本金损失，愿意承担利息损失",
                      "score": "5"
                  },
                  {
                      "name": "寻求资金的较高收益和成长性，愿意为此承担有限本金损失",
                      "score": "8"
                  },
                  {
                      "name": "希望赚取高回报，愿意为此承担较大本金损失",
                      "score": "10"
                  }
              ]
          },
          {
              "_id": "5b05906f252dfa23db650fdb",
              "info": "",
              "title": "您如何看待投资亏损：",
              "options": [
                  {
                      "name": "很难接受，影响正常的生活",
                      "score": "2"
                  },
                  {
                      "name": "受到一定的影响，但不影响正常生活",
                      "score": "5"
                  },
                  {
                      "name": "平常心看待，对情绪没有明显的影响",
                      "score": "8"
                  },
                  {
                      "name": "很正常，投资有风险，没有人只赚不赔",
                      "score": "10"
                  }
              ]
          },
          {
              "_id": "5b05906f252dfa23db650fdc",
              "info": "",
              "title": "您期望的投资的收益率：",
              "options": [
                  {
                      "name": "稍高于同期定期存款",
                      "score": "2"
                  },
                  {
                      "name": "5%左右，要求相对风险较低",
                      "score": "5"
                  },
                  {
                      "name": "10%，可承受中等风险",
                      "score": "8"
                  },
                  {
                      "name": "15%以上，可承担较高风险",
                      "score": "10"
                  }
              ]
          }
      ],
    }
  }
  submit = (values, zentForm) => {
    Notify.success(JSON.stringify(values));
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <Fragment>
        <div className="" style={{margin:'30px 0 10px',fontSize: '16px'}}>
          <strong>风险承受能力评估</strong> <span className="fz12" style={{color: '#666'}}>（您当前评估为<strong className="text-golden fz14">稳健型</strong>，今年还可评估 <strong className="text-golden fz14">3</strong>次）</span>
        </div>
        <div className="fz12 taj">
          在您投资我司平台之前，我们将对您进行风险承受能力评估，需要您就以下11个问题，根据您真实的财务状况、投资经验、
投资风格、风险偏好和风险承受能力等选择合适选项进行回答（每个问题请选择唯一选项，不可多选）。根据评估结果，
您的风险承受能力将属于以下三种类型中的一种：积极型、稳健型、保守型，它可协助我们评估您的投资偏好和风险承受
能力，有助于您控制投资的风险，同时也便于我司平台据此为您提供更准确的投资服务。
        </div>
        <div className="m-form">
          <Form vertical onSubmit={handleSubmit(this.submit)}>
          <ul className="risk-ul">
            {
              this.state.list.map((item,index) => (
                <li className="risk-li" key={index}>
                  <FormRadioGroupField
                    name={item._id}
                    label={
                      <div className="risk-title">{item.title}<span className="text-golden fz12">{item.info}</span></div>
                    }
                    validations={{
                      required(values, value) {
                        return value !== '';
                      },
                    }}
                    validationErrors={{
                      required: '请选择',
                    }}
                  >
                    {
                      item.options.map((itemValue,i) => (
                        <div className="radio-item" key={itemValue.name}>
                          <Radio  value={i}>{itemValue.name}</Radio>
                        </div>
                      ))
                    }
                  </FormRadioGroupField>
                </li>
              ))
            }
          </ul>
            <Button className="u-btn linear-golden tac" style={{margin:'0 auto'}} htmlType="submit">提交问卷</Button>

          </Form>
        </div>
        
      </Fragment>
    );
  }
}
const WrappedForm = createForm()(RiskAssessment);

export default WrappedForm;

