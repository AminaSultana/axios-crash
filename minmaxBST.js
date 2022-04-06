class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class BST{
    
    findMin(root){
        let curr = root;
        while(curr.left!=null){
            curr=curr.left;
        }
        return curr.data;
    }

    findMax(root){
        let curr=root;
        while(curr.right!=null){
            curr=curr.right;
        }
        return curr.data;
    }
}
