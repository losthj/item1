import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftme from '@containers/home/leftme';
import Seal from '@containers/home/seal';
import New from '@components/common/new';
import Paging from '@components/common/paging';



const numbers = [1, 2, 3,4,5,6,7,8,9,10];
class Policy extends Component {
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
                            <div className="vice-head">其他信息</div>
                            <div className="vice-header2">
                                <i></i> 政策法规
                            </div>
                            <New numbers={numbers}></New>
                            <Paging></Paging>
                            <Seal></Seal>
                         </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Policy;