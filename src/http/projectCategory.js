import request from "./axios";

export function getProjectCategoryPage(data){
	return request({
		url: '/mall/pms-product-category/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/pms-product-category/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/mall/pms-product-category/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/pms-product-category/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/pms-product-category/edit',
		method: 'post',
		data
	});
}

