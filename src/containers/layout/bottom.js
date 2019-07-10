import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WebBottom = styled.div`
  position:relative;
  z-index:11;
  background-color: #424242;
  padding-top:30px;
  text-align:center;
  .footer-help-list{
    float:left;
    width:100px;
    margin-right:40px;
    h3{
      padding:20px 0 25px;
      line-height:24px;
      font-size: 16px;
      color: #a7a7a7;
    }
    li a {
      height:34px;
      line-height:34px;
      font-size: 14px;
      color:#838484;
    }
    a:hover {
      color:#dbc677
    }
    
  }
  .footer-code{
    float:left;
    width:180px;
    margin-right:30px
    dt {
      height:42px;
      margin:2px 0 14px;
      line-height:36px;
      color:#838484;
    }
    dd {
      width:180px;
      height:180px
    }
    .footer-erweima{
      width:180px;
    }
  }
  .footer-service {
    float:right;
    h2 {
      margin:15px 0 10px;
      font-family:Impact;
      font-size:36px;
      white-space:nowrap;
      color:#dbc677
    }
    .padding-sevice{
      color:#838484;
      padding:0 0 55px 14px;
    }
    ul li {
     float:left;
     margin-right:15px
    }
  }
  .footer-icon {
    width: 30px;
    height: 32px;
    margin-left: auto;
    margin-right: auto;
    text-indent: -9999px;
    background: url(https://img.jylc168.com/Pc/home/about/footer.png) no-repeat -4px 0
    &.footer-icon2{
      background-position:-45px 0;
    }
    &.footer-icon3{
      height:34px; background-position:-87px 0;
    }
    &.footer-icon4{
      width: 37px;
      height: 37px;
      margin:10px 0 0 81px;
      background:url(https://img.jylc168.com/Pc/home/about/footer1.png) no-repeat 0 0;
    }
  }
  .service-icon{
    display:block;
    width:45px;
    height:41px;
    line-height:30px;
    text-indent:-9999px;
    background:url(https://img.jylc168.com/Pc/home/about/footer2.png) 0 0 no-repeat
    &.service-icon3{
      background-position:-62px 0;
    }
    &.service-icon4{
      background-position:-125px 0;
    }
  }

`
const Line = styled.div`
  margin: 40px 0 30px;
  height:1px;
  background:url(https://img.jylc168.com/Pc/home/index/line.jpg) 50% 50% no-repeat;
`
const FotterLink = styled.div`
  line-height:24px;
  color:#838484;
  .yellow {
    color:#dbc677;
  }
  a {
    color:#838484;
  }
  .sperate {
    padding: 0 3px;
  }
`
const Aprove = styled.div`
  padding: 15px 0;
  img {
    height:34px;
    margin-right:10px;
    border-radius:3px;
    -webkit-filter: grayscale(1);
    :hover {
      -webkit-filter: grayscale(0);
    }
  }
`
const Bottom = () => (
  <WebBottom>
    <div className="container clearfix">
      <div className="footer-help-list jy-f-l">
        <div className="footer-icon1 footer-icon">
          关于我们
        </div>
        <h3>关于我们</h3>
        <ul>
          <li><Link to="/about/index">公司简介</Link></li>
          <li><Link to="/about/team">管理团队</Link></li>
          <li><Link to="/about/honor">荣誉资质</Link></li>
          <li><Link to="/about/contactus">联系我们</Link></li>
        </ul>
      </div>
      <div className="footer-help-list jy-f-l">
        <div className="footer-icon2 footer-icon">
          帮助中心
        </div>
        <h3> 帮助中心 </h3>
        <ul>
          <li><Link to="/help/guide">新手指引</Link></li>
          <li><Link to="/help/cs">联系客服</Link></li>
          <li><Link to="/help/faq">常见问题</Link></li>
          <li><Link to="/help/self_service">自助服务</Link></li>
        </ul>
      </div>
      <div className="footer-help-list jy-f-l">
        <div className="footer-icon3 footer-icon">
          信息披露
        </div>
        <h3>信息披露</h3>
        <ul>
          <li><Link to="/Disclosure/record.html">备案信息</Link></li>
          <li><Link to="/Disclosure/index.html">组织信息</Link></li>
          <li><Link to="/Disclosure/auditing.html">审核信息</Link></li>
          <li><Link to="/Disclosure/operational.html">经营数据</Link></li>
        </ul>
      </div>
      <div className="footer-code">
        <dl>
          <dt>关注微信服务号</dt>
          <dd><img className="footer-erweima" src="https://img.jylc168.com/Asset/Home/common2/img/bottom/fuwuhao.jpg" alt="" /></dd>
        </dl>
      </div>
      <div className="footer-code">
        <dl>
          <dt>关注微信订阅号</dt>
          <dd><img className="footer-erweima" src="https://img.jylc168.com/Asset/Home/common2/img/bottom/erweima.jpg" alt="" /></dd>
        </dl>
      </div>
      <div className="footer-service">
        <h2>
          <div className="footer-icon4 footer-icon">
            联系客服
          </div>
          <div>
               400-008-8782
          </div>
        </h2>
        <div className="padding-sevice">
          （工作时间 9：00-21：00）
        </div>
        <ul className="clearfix">
          <li><a href="https://weibo.com/021yang" target="_blank" rel="noopener noreferrer" className="service-icon3 service-icon" title="新浪微博">sina</a></li>
          <li><Link to="/about/contactus.html" className="service-icon4 service-icon" title="联系我们">email</Link></li>
        </ul>
      </div>
    </div>
    <Line />
    <FotterLink>
      <div>
        <span className="current-color">风险提示:网络借贷为自愿，出借资金须谨慎。风险意识记心上，本息损失皆自担</span>
      </div>
      <div>
        <a href="http://www.wdzj.com/" target="_blank" rel="noopener noreferrer">网贷之家</a>
        <span className="sperate">|</span>
        <a href="http://www.p2peye.com/" target="_blank" rel="noopener noreferrer">网贷天眼</a>
        <span className="sperate">|</span>
        <a href="https://www.jylc168.com/about/map.html">网站地图</a>
      </div>
      <div>Copyright © 2018 上海拙赢金融信息服务有限公司    沪ICP备15046973号-1  </div>
      <Aprove>
        <a id="___szfw_logo___" href="https://credit.szfw.org/CX11160008135520181204.html" title="诚信认证网站" target="_blank" rel="noopener noreferrer"><img src="https://img.jylc168.com/Asset/Home/common2/img/bottom/szfw.png" alt="诚信认证网站" /></a>
        <a href="https://ss.knet.cn/verifyseal.dll?sn=e151208310112617266per000000&amp;comefrom=trust" target="_blank" rel="noopener noreferrer" title="可信网站"><img src="https://www.jylc168.com/Asset/Home/common2/img/bottom/icon_kxwz.jpg" alt="" /></a>
        <a href="http://www.itrust.org.cn/Home/Index/itrust_certifi?wm=1A1GB01500" target="_blank" rel="noopener noreferrer" title="ICP网站征信证书"><img src="https://www.jylc168.com/Asset/Home/common2/img/bottom/icon_icpc.jpg" alt="" /></a>
        <a href="http://www.miitbeian.gov.cn" target="_blank" rel="noopener noreferrer" title="工信部备案查询"><img src="https://img.jylc168.com/Asset/Home/common2/img/bottom/icon_icp.jpg" alt="" /></a>
        <a href="http://www.bugbank.cn/cert/58bd6f665278a6ef3487b0e6" target="_blank" rel="noopener noreferrer" title="ICP网站征信证书"><img src="https://img.jylc168.com/Asset/Home/common2/img/bottom/bugbank.png" alt="" /></a>
        <a href="http://www.anquan.org/authenticate/cert/?site=www.jylc168.com&amp;at=business " target="_blank" rel="noopener noreferrer" title="安全联盟"><img src="https://img.jylc168.com/Asset/Home/common2/img/bottom/hyyz.png" alt="" /></a>
      </Aprove>
    </FotterLink>
  </WebBottom>
)

export default Bottom;