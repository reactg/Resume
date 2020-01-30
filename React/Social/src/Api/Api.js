import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f009cb95-c021-4f1b-af49-c46fb14c2a91'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
        },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status){return instance.put('profile/status', {status: status});
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put('profile/photo', formData, {
            headers:{'Content-Type': 'multipart/form-data'}
        });
    },
    saveProfile(profile){
        return instance.put('profile' + profile); // На данный момент сервер не отдает данные по профайлу. Api /profile - отсутствует дает ошибку 404 (не находит нужный документ и не сейвит данные в профиле)
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout () {
        return instance.delete(`auth/login`);
    }
}



