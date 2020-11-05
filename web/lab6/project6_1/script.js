// У каждого объекта есть id, name (имя) и parent_id – id родителя.
// Написать скрипт, который расположит на странице
// данный массив в виде иерархического списка.

const list = [
	{id: 2, name: "Организация", parent_id: null},
	{id: 3, name: "Бухгалтерия", parent_id: 2},
	{id: 6, name: " Отдел охраны", parent_id: 2},
	{id: 7, name: "Караульная служба", parent_id: 6},
	{id: 8, name: "Бюро пропусков", parent_id: 6},
	{id: 12, name: "Патентный отдел", parent_id: 2},
	{id: 13, name: "Лётная служба", parent_id: 2},
	{id: 14, name: "Лётный отряд Боинг 737", parent_id: 13},
	{id: 17, name: "Лётный отряд Боинг 747", parent_id: 13},
	{id: 18, name: "1-ая авиационная эксадрилия Боинг 737", parent_id: 14},
	{id: 19, name: "2-ая авиационная эскадрилия Боинг 737", parent_id: 14},
	{id: 21, name: "Лётно-методический отдел", parent_id: 13}
]

document.addEventListener("DOMContentLoaded", () => {
	
	const getListContainer = (parentId) => {
		if (!parentId) {
			return document.getElementById('list')
		}
		
		const listItem = document.getElementById(`list_item_${parentId}`)
		let ulItem = listItem.querySelector('ul')
		// if ul el. not exist - create it
		if (!ulItem) {
			ulItem = document.createElement('ul')
			listItem.append(ulItem)
		}
		return ulItem
	}
	
	const createItem = (obj) => {
		const container = getListContainer(obj.parent_id)
		const el = `<li id="list_item_${obj.id}">${obj.name}</li>`
		container.insertAdjacentHTML('beforeend', el)
	}
	
	// iterate array of objects
	for (const item of list) {
		createItem(item)
	}
});
