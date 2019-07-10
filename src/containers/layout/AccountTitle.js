import React from 'react';
import { Link } from 'react-router-dom';

const AccountTitle = () => (
  <div className="account-title">首页
    <Link to="/" className="separator">&gt;</Link>
    <Link to="/account" className="text-golden">账户首页</Link>
  </div>
)

export default AccountTitle;