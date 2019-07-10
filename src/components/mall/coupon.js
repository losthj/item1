import React, { PureComponent } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const CouponCon = styled.div`
    .conpon-card{
        margin-top:30px;
        border:1px solid #dbdbdb;
        padding:30px;
        margin-bottom:50px;
    }
    ul li{
        float:left;
        margin-right: 60px;
        margin-bottom:10px;
        height:158px;
    }
    .sale-b{
        position:relative;
        width:261px;
        height:148px;
        padding:5px 10px;
        color:#fff;
        background:url(https://img.jylc168.com/Pc/mall/index/sale-1.jpg) no-repeat 50% 50%;
    }
    .sale-b.active{
        background-image:url(https://img.jylc168.com/Pc/mall/index/sale-4.jpg)
    }
    .sale-times{
        margin-top: 21px;
        line-height: 16px;
        padding-left: 16px;
    }
    .sale-rate{
        font-family: Arial;
        font-size: 64px;
        color: #fff;
        font-weight: bold;
        margin-top: 30px;
        padding-left:10px;
        line-height: 64px;
    }

`

class Coupon extends PureComponent {
    render(){
        return(
           <CouponCon>
                <h2 className="mian-title"><label>使用折扣券</label></h2>
                 <div className="conpon-card">
                    <ul className="clearfix">
                        <li>
                            <div class="sale-b">
                                <div class="sale-rate ">
                                    8
                                </div>
                                <div class="sale-times">
                                    有效期至：2019-04-15 23:59:59 <br />
                                    仅限实物商品打折
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="sale-b">
                                <div class="sale-rate ">
                                    8
                                </div>
                                <div class="sale-times">
                                    有效期至：2019-04-15 23:59:59 <br />
                                    仅限实物商品打折
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="sale-b">
                                <div class="sale-rate ">
                                    8
                                </div>
                                <div class="sale-times">
                                    有效期至：2019-04-15 23:59:59 <br />
                                    仅限实物商品打折
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="sale-b">
                                <div class="sale-rate ">
                                    8
                                </div>
                                <div class="sale-times">
                                    有效期至：2019-04-15 23:59:59 <br />
                                    仅限实物商品打折
                                </div>
                            </div>
                        </li>
                    </ul>
                 </div>
           </CouponCon>

        )
    }
}

export default Coupon;  