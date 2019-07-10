import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Signature extends Component {
  render() {
    return (
      <Fragment>
        <div className="chart-title" style={{margin:'30px 0'}}>
          电子签名 <span className="fz12" style={{color: '#666'}}>开启电子签名协议在具有同等法律效应的前提下，为您提供便捷的操作流程，节省您的宝贵时间</span>
        </div>
    
        <div className="visa-img">
          <div className="visa-intr1">专业的CA认证技术，保障电子合同具有完整的司法效力</div>
          <div className="visa-intr2">
              囧羊平台引进上上签电子签名服务，保证出借者在交易合同中电子签名的有效性， <br />
              为用户合法权益保驾护航。<Link to="/event/signature" target="_blank">了解更多</Link>
          </div>
          <div className="visa-intr3">
              守护互金时代的
          </div>
        </div>
        <div className="visa-info">
          <div className="visa-txt">开启电子签名后，您之后出借生成的每份协议，都将自动使用默认签名完成签署。</div>
          <div className="visa-con">
              <img src="https://openapi.bestsign.cn/openapi/v3/signatureImage/user/download/?account=JY1003&amp;developerId=1842471785862267494&amp;imageName=&amp;rtick=15532359811476&amp;signType=rsa&amp;sign=p11KGlXXhNTU%2Ba0eMQFeP7qLhvCLUh5r7r1pMjgGiPetAWbni%2F5YlvSyENS08dVcnwrOmldJza8mQNua%2FKXbBSLyUIZQk9MGK8f2N3ENqpRVt7SpmaHEKr%2BrdvIp9Bbl6k6uenOyDtm9JZ6vHyo9SZUQhzSGspGd%2FVuLg2ROIy0%3D" alt="" />
          </div>
          <div className="visa-bottom m-form">
            <Link className="text-golden" to="/index/ca" target="_blank">查看《快捷签署服务委托协议书》</Link>
            <div className="u-btn linear-golden tac">申请数字证书并授权</div>
            <div><img src="https://www.jylc168.com/Asset/User/common/image/account/icon-10.png" alt="" />由上上签为您提供第三方合同存证服务。</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Signature;
