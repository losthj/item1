import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';


class Organize extends Component {
    render(){
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
                            <div className="vice-head">组织机构及从业人员概况</div>
                            <div className="vice-header2">
                                <i></i>组织机构
                            </div>
                            <div className="jy-text-c jy-mt-30">
                                <img src="https://img.jylc168.com/Pc/home/disclosure/framework.jpg" alt=""/>
                            </div>
                            <div className="vice-header2">
                                <i></i>从业人员概况
                            </div>
                            <div className="partners2">
                            囧羊平台在职员工67人，本科及大专学历者58人，硕士及硕士以上学历者2人。从年龄构架上来看，95%的员工年龄分布于20-40岁
                            </div>
                            <div className="jy-text-c jy-mt-30">
                                <img src="https://img.jylc168.com/Pc/home/disclosure/framework1.jpg" alt=""/>
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
export default Organize;