import request from "./axios";

export function getSubjectPage(data){
	return request({
		url: '/mall/cms-subject/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/cms-subject/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/mall/cms-subject/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/cms-subject/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/cms-subject/edit',
		method: 'post',
		data
	});
}

