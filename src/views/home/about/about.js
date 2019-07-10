import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftmenu from '@containers/home/leftmenu';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tabs,Layout } from 'zent';
const TabPanel = Tabs.TabPanel;
const { Row, Col } = Layout;

class About extends Component {
    state = {
        activeId: '1'
      }
    
      onTabChange = (id) => {
        this.setState({
          activeId: id
        });
      }
    
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0",
            slidesToShow: 3,
            speed: 500
        };

        return (
            <div className="main">
                <div className="bd-wrap">
                    <div className="container">
                        <div className="bd-wrap-text">
                            关于我们
                        </div> 
                    </div>
                </div>
                <div className="container">
                    <div className="page-container clearfix">
                        <div className="main-l jy-fl">
                            <Leftmenu></Leftmenu>
                        </div>
                        <div className="main-r jy-fl">
                            <div className="main-rp">
                                <div className="vice-head">公司介绍</div>
                                <div className="about-head"> 
                                    追求创建一个<br />开放、智慧的借款平台
                                </div>
                                <div className="jy-mt-30 jy-text-c">
                                    <img src="https://img.jylc168.com/Pc/home/about/about-2.jpg" alt="" />
                                </div>
                                <div className="about-tabs">
                                <Tabs activeId={this.state.activeId} onChange={this.onTabChange} >
                                    <TabPanel tab="企业使命" id="1" >
                                        <div className="jy-text-c">
                                            本着 “诚信守信、合作共赢”的经营理念，通 过完善的风控体系，<br />
                                            倾力打造为有出借和借款双方 需求的人们提供一站式到位的综合金融服务平 台。
                                        </div>
                                    </TabPanel>
                                    <TabPanel tab="关于平台" id="2" >
                                        <div className="jy-text-c">
                                            囧羊平台成立于2015年11月8日是上海拙赢金融信息服务有限公司旗下的互联网金融服务平台，<br />
                                            致力于为出借人与 实体企业间建立起自由、灵活的互联网金融服务。
                                        </div>
                                    </TabPanel>
                                    <TabPanel tab="企业文化" id='3' >
                                        <div className="jy-text-c">
                                             公司一直秉承着 “ 拙诚天下，赢领未来 ” 的 愿景，以团队协作、锐意进取、矢志创新、 追求卓越作为企业的精神， <br />
                                            一步一个脚印的 发展，为出借者提供一个稳定、健康的金融信息服务平台。
                                        </div>
                                    </TabPanel>
                                </Tabs>
                                </div>
                                
                                <div className="jy-text-c">
                                    <img src="https://img.jylc168.com/Pc/home/about/about-3.jpg" alt="" />
                                </div>
                                <div className="about-mt jy-text-c">
                                    公司自平台上线以来，项目架构健康、企业发展有序，并将供应链金融 <br />
                                    的形式与互联网信息的发展相结合，以 互联网+金融的模式，主动响应国家政策，为新能源汽车生产企业上、下游<br />
                                    长期合作的供应商、经销商提供借款服务。
                                </div>
                                <div className="about-line"></div>

                                <div className="about-head about-head1"> 
                                        公司环境
                                </div>
                                <div className="carousel">
                                    <div>
                                        <Slider {...settings}>
                                        <div>
                                            <img src="https://img.jylc168.com/Pc/home/about/about-img1.jpg" alt=""  />
                                        </div>
                                        <div>
                                             <img src="https://img.jylc168.com/Pc/home/about/about-img2.jpg" alt=""  />
                                        </div>  
                                        <div>
                                        <img src="https://img.jylc168.com/Pc/home/about/about-img3.jpg" alt=""  />
                                        </div>
                                        <div>
                                        <img src="https://img.jylc168.com/Pc/home/about/about-img4.jpg" alt=""  />
                                        </div>
                                        <div>
                                        <img src="https://img.jylc168.com/Pc/home/about/about-img5.jpg" alt=""  />
                                        </div>
                                        <div>
                                        <img src="https://img.jylc168.com/Pc/home/about/about-img1.jpg" alt=""  />
                                        </div>
                                        </Slider>
                                    </div>
                                </div>

                                <div className="about-line"></div>
                                <div className="about-head"> 
                                    企业的核心价值 <br />是我们一直看重的东西
                                </div>
                                <div className="company-list clearfix">
                                <Row>
                                    <Col span={12}>
                                        <div className='jy-text-c'>
                                            <img src="https://img.jylc168.com/Pc/home/about/about-icon1.png" alt="" />
                                        </div>
                                        <h5>诚信守法</h5>
                                        <div className="company-text">
                                        “诚信”乃企业立足之本，诚信不仅是企业重<br /> 要的无形资产，更是企业提升核心竞争力的重<br />要支撑。
                                        </div>
                                    </Col>
                                    <Col span={12} >
                                        <div className='jy-text-c'>
                                            <img src="https://img.jylc168.com/Pc/home/about/about-icon2.png" alt="" />
                                        </div>
                                        <h5>专业高效</h5>
                                        <div className="company-text">
                                        作为一家专业的机构，经过严 格培训并具备认<br />可资格的分析师团队对每一位需求方的财务状<br />况进行实时评估，通过科学 的分析风险取向，<br />提供专业的服务。
                                        </div>
                                    </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <div className='jy-text-c'>
                                                <img src="https://img.jylc168.com/Pc/home/about/about-icon3.png" alt="" />
                                            </div>
                                            <h5>客户为先</h5>
                                            <div className="company-text">
                                            以客户的需求为依据， 结合客户的财富目标，<br />配置 符合各种风险偏好类型的产品。 把客户的<br />价值追求就是我们的 价值追求。
                                            </div>
                                        </Col>
                                        <Col span={12} >
                                            <div className='jy-text-c'>
                                                <img src="https://img.jylc168.com/Pc/home/about/about-icon4.png" alt="" />
                                            </div>
                                            <h5>守信服务</h5>
                                            <div className="company-text">
                                            做出睿智、理性的分析，以 匹配精确的产品，<br />建立守信的出借组合，以实现永续经营， 为<br />客户提供守信的服务。
                                            </div>
                                        </Col>
                                    </Row>

                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
   }
}
 export default About;  
  