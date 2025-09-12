/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let cur=head
    let dfs=(node)=>{
        if(node==null)return true
        return dfs(node.next)&&node.val==cur.val&&(cur=cur.next)
    }
    return dfs(cur)
};