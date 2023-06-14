import request from "./axios";

export function getSubjectCategoryPage(data){
	return request({
		url: '/mall/cms-subject-category/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/cms-subject-category/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/mall/cms-subject-category/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/cms-subject-category/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/cms-subject-category/edit',
		method: 'post',
		data
	});
}

