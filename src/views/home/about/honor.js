import React,{Component}  from 'react';
import '@assets/home/about.css';
import Leftmenu from '@containers/home/leftmenu';


class Honor extends Component {
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
                        <div className="vice-header">
                            <i></i> 荣誉资质
                        </div>
                        <div className="main-rp jy-text-c">
                            <img src="https://img.jylc168.com/Pc/home/about/honor.jpg" alt=""/>
                        </div>          
                        </div>
                    </div>

                </div>
            </div>
        )
   }
}
 export default Honor;  