const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };

a.next = b;
b.next = c;
c.next = d;

// 遍历链表
let p = a; // 新增一个指针
while (p) {
  console.log(p.val);
  p = p.next;
}

// 插入
const e = { val: 'e' };
// 把 e 插到 d 前面
c.next = e;
e.next = d;

// 删除
c.next = d;
