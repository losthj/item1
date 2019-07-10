import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';

class Channel extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       currentIndex: 0
    //     }
    //     this.setCurrentIndex = this.setCurrentIndex.bind(this)
    //   }
    //   setCurrentIndex(event) {
    //     this.setState({
    //       currentIndex: parseInt(event.currentTarget.getAttribute('index'), 10)
    //     })
    //   }
    
    
    render(){
        // let categoryArr = ['2018年', '2017年', '2016年'];
        // let itemList = [];
        // for(let i = 0; i < categoryArr.length; i++) {
        // itemList.push(<li key={i} className={this.state.currentIndex === i ? 'active' : ''} index={i} onClick={this.setCurrentIndex}>{categoryArr[i]}</li>);
        // }


        return(
            <div className="main">
            <div className="bd-wrap">
                <div className="container">
                    <div className="bd-wrap-text">
                        信息披露  
                    </div> 
                </div>
            </div>
            <div className="container">
                <div className="page-container clearfix">
                    <div className="main-l jy-fl">
                        <Leftme></Leftme>
                    </div>
                    <div className="main-r jy-fl">
                        <div className="main-rp">
                            <div className="vice-head">审核信息</div>
                            <div className="vice-header2">
                                <i></i> 财务审计报告
                            </div>
                            <div className="reveal-lists">
                                <div className="auditing-dates">
                                <div className="auditing-line"></div>
                                    <ul className="clearfix"> 
                                       <li>
                                           <p> 2018年</p>
                                           <img src="https://img.jylc168.com/Pc/home/disclosure/audit2018.jpg" alt=""/>
                                       </li>
                                       <li>
                                           <p>2017年</p>
                                           <img src="https://img.jylc168.com/Pc/home/disclosure/audit2018.jpg" alt=""/>
                                       </li>
                                       <li>
                                           <p>2016年</p>
                                           <img src="https://img.jylc168.com/Pc/home/disclosure/audit2018.jpg" alt=""/>
                                       </li>
                                    </ul>
                                </div>
                            </div>
                           
                            <Seal></Seal>
                         </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Channel;