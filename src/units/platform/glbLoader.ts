import { Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { DRACOLoader } from 'three/examples/jsm/Addons.js';
// import { IModel } from '../../type/base';
export const LOAD_EVENT = {
  LOADING: 'modelLoading',
  LOADED: 'modelLoaded',
  LOAD_FAIL: 'modelLoadFail'
};

export class GlbLoader extends Object3D{
  _loader:GLTFLoader; //加载器
  _booth:any;//模型信息
  _model:Object3D|undefined = undefined; // 模型

  constructor(){
    super();
    // this._booth = booth;
    const dracoLoader =new DRACOLoader();
    this._loader = new GLTFLoader();
    dracoLoader.setDecoderPath('./gltfdraco')
    dracoLoader.setDecoderConfig({ type:'js'});
    dracoLoader.preload();
    this._loader.setDRACOLoader(dracoLoader);
    this._loader.load('./model/tunnel.glb', this.onLoad, this.onLoading, this.onLoadError);
  }

  onLoad = (gltf:any)=>{
    const model = gltf.scene;
    this._model = model;
    this.add(model)
  };
  onLoading = (e:Event)=>{
    // console.log(111);
    // console.log(e);
// const eve = new CustomEvent(LOAD_EVENT.LOADING,{detail:e})
    const event = {type:LOAD_EVENT.LOADING,data:e};
    
    this.dispatchEvent(event)
  };
  onLoadError = (e:any)=>{
    console.log(e +"error");

  }
}