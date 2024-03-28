import Node from './Node';

export default class LinkedList {
	constructor() {
		this.headNode = null;
		this.length = 0;
	}

	append(val) {
		let node = new Node(val);
		if (this.headNode == null) {
			this.headNode = node;
		} else {
			let curr = this.headNode;
			while (curr.next) {
				curr = curr.next;
			}
			curr.next = node;
		}
		this.length++;
	}

	prepend(val) {
		let newNode = this.headNode;
		this.headNode = new Node(val);
		this.headNode.next = newNode;
		this.length++;
	}

	get size() {
		return this.length;
	}

	get head() {
		return this.headNode;
	}

	get tail() {
		let curr = this.headNode;
		while (curr && curr.next) {
			curr = curr.next;
		}
		return curr;
	}

	at(index) {
		let i = 0;
		let curr = this.headNode;
		while (i <= index && curr) {
			if (i === index) {
				return curr;
			}
			curr = curr.next;
			i++;
		}
	}

	pop() {
		let curr = this.headNode;
		let popVal;
		while (curr.next.next) {
			curr = curr.next;
		}
		popVal = curr.next;
		curr.next = null;
		this.length--;
		return popVal;
	}

	contains(val) {
		let curr = this.headNode;
		while (curr) {
			if (curr.val === val) return true;
			curr = curr.next;
		}
		return false;
	}

	find(val) {
		let curr = this.headNode;
		let i = 0;
		while (curr) {
			if (curr.val === val) return i;
			i++;
			curr = curr.next;
		}
		return -1;
	}

	toString() {
		let res = '';
		let curr = this.headNode;
		while (curr) {
			res += `( ${curr.val} )`;
			if (curr.next) {
				res += ` --> `;
			}
			curr = curr.next;
		}
		res += ` --> null`;
		return res;
	}

	insertAt(val, index) {
		let curr = this.headNode;
		let i = 0;
		while (curr) {
			if (i === index) {
				let newNode = new Node(val);
				newNode.next = curr.next;
				curr.next = newNode;
				break;
			}
			i++;
			curr = curr.next;
		}
		this.length++;
	}

	removeAt(index) {
		let curr = this.headNode;
		let i = 0;
		if (index === 0) {
      this.headNode = this.headNode.next;
      this.length--;
		} else if (index > 0) {
			while (curr) {
				if (i === index - 1) {
					curr.next = curr.next.next;
          this.length--;
					break;
				}
				i++;
				curr = curr.next;
			}
		}
	}
}
