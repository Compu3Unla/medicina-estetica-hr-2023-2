// JavaScript Document


const productContainers = [...document.querySelectorAll('product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')]
const preBtn = [...document.querySelectorAll('.pre-btn')]

productContainers.forEach((item, i)=>{
	let containerDimensiones= item.getBoundingClientRect();
	let containerWidth= containerDimensiones.width;
	
	nxtBtn[i].addEventListener('click',()=>{
		item.scrollleft+= containerWidth;
	})
	
	preBtn[i].addEventListener('click',()=>{
		item.scrollleft-= containerWidth;
	})
})