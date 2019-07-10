import React from 'react';
import ContentLoader, { Facebook, Instagram } from 'react-content-loader'

export const LoadingFacebook = () => (
  <Facebook />
)
export const LoadingInstagram = () => (
  <Instagram />
)
export const LoadingList = props => (
  <ContentLoader 
    rtl
    height={100}
    width={200}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="15" rx="3" ry="3" width="200" height="6.4" /> 
    <rect x="0" y="35" rx="3" ry="3" width="200" height="6.4" /> 
    <rect x="0" y="55" rx="3" ry="3" width="200" height="6.4" /> 
  </ContentLoader>
)

export const LoadingText = () => (
  <div style={{width:'100%',minHeight:'500px',position:'relative'}}><div style={{textAlign:'center',color:'#ccc',lineHeight:'100px'}}>loading...</div>
  </div>
)

