class Node{
    constructor(data){
        this.data=data;
        let right=null;
        let left=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root===null)
            this.root=newNode;
        else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){
        if(newNode.data<node.data){
            if(node.left===null)
                node.left=newNode;
            else{
                this.insertNode(node.left, newNode);
            }
        }
        else{
            if(node.right===null)
                node.right=newNode;
            else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(node, data){
        if(node===null)
            return null;
        else if(data<node.data){
            return this.search(node.left, data);
        }
        else if(data>node.data)
            return this.search(node.right, data);
        else
            return node;
    }
}

 let obj = new BST();
 obj.insert(10);
 obj.insert(20);
 obj.insert(13);
 obj.insert(27);
