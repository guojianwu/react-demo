import React from 'react';
import axios from 'axios'
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { Toast, } from 'antd-mobile';
import { uuid, getOssToken } from "./util/until";
import "./css/app.css"
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cropImg:"",
      cropBlob:null,
      imgs:[],
      img:'',
      minContainerHeight:window.outerHeight*0.94,
      minContainerWidth:window.outerWidth,
      showCropper:false
    }
  }
  _crop(){
    this.setState({
      cropImg:this.refs.cropper.getCroppedCanvas().toDataURL()
    })
  }
  _toBlob=()=>{
   Toast.loading("裁剪中...", 0)
   this.refs.cropper.getCroppedCanvas().toBlob((blob) => {
      var fileExt = "." + blob.type.split("/")[1];
      this.outputimg=blob;
      getOssToken
          .call(this, null)
          .then(res => {
            let param = new FormData(); // 创建form对象

            var key = "resource/test/avatar/" + uuid() + fileExt;
            param.append("policy", res.policy); // 添加form表单中其他数据
            param.append("host", res.host); // 添加form表单中其他数据
            param.append("OSSAccessKeyId", res.OSSAccessKeyId); // 添加form表单中其他数据
            param.append("success_action_status", "200"); // 添加form表单中其他数据
            param.append("signature", res.signature); // 添加form表单中其他数据
            param.append("expire_time", res.expire_time); // 添加form表单中其他数据
            param.append("key", key); // 添加form表单中其他数据
            param.append("file", blob); // 通过append向form对象添加数据

            let config = {
              headers: { "Content-Type": "multipart/form-data" }
            };
            axios.post(res.host, param, config).then(response => {
              var imgs=this.state.imgs;
              imgs.push(res.host + "/" + key);
              this.setState({
                imgs
              })
              this.toggleCropper();
              Toast.hide()
            });
          })
          .catch(err => {});
    })
    
  }
  changeImg=(e)=>{
    Toast.loading("加载中...", 0)
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    var self = this;
    reader.onload = function(e) {
      self.setState({
        img:this.result
      });
      self.toggleCropper();
    };
  }
  readyCropper=()=>{
    Toast.hide()
  }
  toggleCropper=()=>{
    this.setState((preState)=>({
      showCropper:!preState.showCropper
    }))
  }
  renderCropper=()=>{
    var {minContainerHeight,minContainerWidth,showCropper,img} =this.state;
    if(showCropper){
      return (
        <div className="my-cropper">
          <Cropper
            minContainerWidth={minContainerWidth}
            minContainerHeight={minContainerHeight}
            viewMode={1}
            ref='cropper'
            src={img}
            style={{height: 400, width: '100%'}}
            zoomOnWheel={false}
            zoomOnTouch={false}
            zoomable={false}
            aspectRatio={16 / 9}
            guides={false}
            background={false}
            ready={this.readyCropper}
            />
            <div className="btn-box">
              <span className="btn-item" onClick={this._toBlob.bind(this)}>确定</span>
              <span className="btn-item cancel-btn" onClick={this.toggleCropper}>取消</span>
            </div>
         </div>
      )
    }
    return null;
  }
  
  render(){
    return (
      <div className="App">
        <div>
          <input type="file" onChange={this.changeImg}/>
          <button onClick={this.toggleCropper}>继续裁剪</button>
        </div>
        {this.renderCropper()}
        <div>
          {this.state.imgs.map((v,k)=>{
            return (
              <div key={k}>
                <img style={{width:'100vw'}} src={v} alt=""/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
