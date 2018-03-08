function BinaryTree(){
		var Node=function(key){
			this.key=key;
			this.left=null;
			this.right=null;
		}
		//定义一个根节点
		var root=null;

		var insertNode=function(node,newNode){
			if (node.key>newNode.key){
				//如果该节点的左节点为空，则直接将新节点赋值进去
				if (node.left===null){
					node.left=newNode
				}else{//如果该节点的左节点不为空，则重新执行insertNode函数，将该节点已有的左节点作为新的根节点传入，并在此执行上述判断
					insertNode(node.left,newNode)
				}
			}else {
				if (node.right===null){
					node.right=newNode
				}else {
					insertNode(node.right,newNode)
				}
			}
		}
		// 如果根节点为空，就将新节点填进去作为根节点使用
		// 如果根节点不为空，执行insertNode函数，将新节点填写进去，根据大小判断填入左右节点
		this.insert=function(key){
			var newNode =new Node(key);
			if (root===null){
				root=newNode;
			}else {
				insertNode(root,newNode)
			}
		}


		var inOrderTraverseNode=function(node,callback){
			if (node!==null){
				inOrderTraverseNode(node.right,callback);
				callback(node.key);
				inOrderTraverseNode(node.left,callback);
			}
		}

		this.inOrderTraverse=function(callcack){
			inOrderTraverseNode(root,callback);
		}
	}




	var nodes=[8,3,10,1,6,14,4,7,13];
	var binaryTree=new BinaryTree();
	nodes.forEach(function(a){
		binaryTree.insert(a)
	})
	var callback=function(key){
		console.log (key);
	}
	binaryTree.inOrderTraverse(callback);