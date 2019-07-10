import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftmenu from '@containers/home/leftmenu';
import News from '@components/common/news';
import Paging from '@components/common/paging';

const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
class Partner extends Component {
    render(){
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
                                <div className="vice-head">合作伙伴</div>
                                <News numbers={numbers}></News>
                                <Paging></Paging>
                            </div>
                           
                           
                        </div>
                    </div>

                </div>
            </div>
        )
   }
}
 export default Partner;  