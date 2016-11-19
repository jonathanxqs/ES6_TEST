class SkinnedMesh extends THREE.Mesh {//使用extends来表示继承
  
  constructor(geometry, materials) {

    super(geometry, materials);//父类的构造函数  Three.Mesh constructor

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  
  update(camera) {
    //...
    super.update();
  }
  get boneCount() {
    return this.bones.length;
  }
  set matrixType(matrixType) {
    this.idMatrix = SkinnedMesh[matrixType]();
  }
  static defaultMatrix() {//静态方法
    return new THREE.Matrix4();
  }
  
}