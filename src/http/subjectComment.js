import request from "./axios";

export function getSubjectCommentPage(data){
	return request({
		url: '/mall/cms-subject-comment/page',
		method: 'post',
        data
	});
}

export function getOne(id){
	return request({
		url: `/mall/cms-subject-comment/one/${id}`,
		method: 'get',
	});
}

export function delOne(id){
	return request({
		url: `/mall/cms-subject-comment/del/${id}`,
		method: 'get'
	});
}

export function addOne(data){
	return request({
		url: '/mall/cms-subject-comment/add',
		method: 'post',
		data
	});
}

export function updateOne(data){
	return request({
		url: '/mall/cms-subject-comment/edit',
		method: 'post',
		data
	});
}

