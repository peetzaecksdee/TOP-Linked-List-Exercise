import LinkedList from './LinkedList';

const list = new LinkedList();

describe('LinkedList', () => {
	test('happy path', () => {
		expect(LinkedList);
	});
	test('append(value) adds a new node containing value to the end of the list', () => {
		list.append('node1');
		list.append('node2');
		expect(list.head.val).toBe('node1');
		expect(list.tail.val).toBe('node2');
	});
	test('prepend(value) adds a new node containing value to the start of the list', () => {
		list.prepend('preNode');
		expect(list.head.val).toBe('preNode');
		expect(list.tail.val).toBe('node2');
	});
	test('size returns the total number of nodes in the list', () => {
		expect(list.size).toBe(3);
	});
	test('at(index) returns the node at the given index', () => {
		expect(list.at(1).val).toBe('node1');
		expect(list.at(2).val).toBe('node2');
		expect(list.at(10)).toBe(undefined);
		expect(list.at(3)).toBe(undefined);
	});
	test('pop() removes the last element from the list', () => {
		expect(list.pop().val).toBe('node2');
		expect(list.size).toBe(2);
		expect(list.tail.val).toBe('node1');
	});
	test('contains(value) returns true if the passed in value is in the list and otherwise returns false', () => {
		expect(list.contains('preNode')).toBe(true);
		expect(list.contains('node1')).toBe(true);
		expect(list.contains('node2')).toBe(false);
	});
	test('find(value) returns the index of the node containing value, or null if not found', () => {
		expect(list.find('node1')).toBe(1);
		expect(list.find('preNode')).toBe(0);
		expect(list.find('node2')).toBe(-1);
	});
	test('toString() prints all LinkedList objects as strings to the console', () => {
		expect(list.toString()).toBe('( preNode ) --> ( node1 ) --> null');
		list.prepend('prePreNode');
		expect(list.size).toBe(3);
		expect(list.toString()).toBe(
			'( prePreNode ) --> ( preNode ) --> ( node1 ) --> null'
		);
	});
	test('insertAt(value, index) inserts a new node with the provided value at the given index', () => {
		list.insertAt('node0', 1);
		expect(list.size).toBe(4);
		expect(list.at(2).val).toBe('node0');
		expect(list.toString()).toBe(
			'( prePreNode ) --> ( preNode ) --> ( node0 ) --> ( node1 ) --> null'
		);
	});
	test('removeAt(index) removes a node at the given index', () => {
		list.removeAt(1);
		expect(list.size).toBe(3);
		expect(list.at(1).val).toBe('node0');
		expect(list.toString()).toBe(
			'( prePreNode ) --> ( node0 ) --> ( node1 ) --> null'
		);
		list.removeAt(0);
		expect(list.size).toBe(2);
		expect(list.at(1).val).toBe('node1');
		expect(list.toString()).toBe('( node0 ) --> ( node1 ) --> null');
		list.removeAt(-1);
		list.removeAt(3);
		expect(list.size).toBe(2);
		expect(list.at(1).val).toBe('node1');
		expect(list.toString()).toBe('( node0 ) --> ( node1 ) --> null');
	});
});
