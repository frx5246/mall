import request from "./axios";

export function getProjectPage(data){
	return request({
		url: '/mall/pms-product/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/pms-product/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/mall/pms-product/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/pms-product/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/pms-product/edit',
		method: 'post',
		data
	});
}

