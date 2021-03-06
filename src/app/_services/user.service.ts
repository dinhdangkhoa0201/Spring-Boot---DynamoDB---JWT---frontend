<<<<<<< HEAD
import {environment} from './../../environments/environment.prod';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {User} from '../_interfaces/user';
import {A} from '@angular/cdk/keycodes';
=======
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../_interfaces/user';
import { A } from '@angular/cdk/keycodes';
>>>>>>> 927f459a086855f1692623bcddae48da400b5cf8

const API_URL = environment.API_URL + '/api/user';
const API_URL_FILE = environment.API_URL + '/api/file';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  updatePassword(userId, oldPassword, newPassword): Observable<any> {
    console.log(userId);
    return this.http.post(`${API_URL + '/changePassword'}/${userId}`, {}, {
      params: {
        oldPassword,
        newPassword
      }
    });
  }

  resetPassword(userId, newPassword): Observable<any> {
    console.log(userId);
    return this.http.post(`${API_URL + '/resetPassword'}/${userId}`, {}, {
      params: {
        newPassword
      }
    });
  }

  updateInformationUser(userId, user): Observable<any> {
    console.log('user updateInformationUser', user);
    return this.http.post(`${API_URL + '/update'}/${userId}`, {
      userName: user.userName,
      gender: user.gender,
      birthday: user.birthday,
    });
  }

  findFriend(friendId): Observable<any> {
    return this.http.get(`${API_URL + '/findFriend?strFind=' + friendId}`);
  }

  addFriend(userId, friendId): Observable<any> {
    console.log('add friend: ownerId ', userId + ', friendId : ', friendId);
    return this.http.post(`${API_URL + '/addFriend/' + userId}`, {}, {
      params: {
<<<<<<< HEAD
        friendId
=======
        friendId: friendId
>>>>>>> 927f459a086855f1692623bcddae48da400b5cf8
      }
    });
  }

  getListInvites(userId): Observable<any> {
    return this.http.get(`${API_URL + '/invites/' + userId}`);
  }

  updatePhone(userId, phone): Observable<any> {
    return this.http.post(`${API_URL + '/updatePhone/' + userId}`, {}, {
      params: {
        phone
      }
    });
  }

  updateEmail(userId, email): Observable<any> {
    return this.http.post(`${API_URL + '/updateEmail/' + userId}`, {}, {
      params: {
        email
      }
    });
  }

  getListFriends(userId): Observable<any> {
    return this.http.get(`${API_URL + '/friends/' + userId}`);
  }

  getListOfSentInvitation(userId): Observable<any> {
    return this.http.get(`${API_URL + '/requests/' + userId}`);
  }

  checkSentInvitation(userId, friendId): Observable<any> {
    return this.http.get(`${API_URL + '/checkSentInvitation/' + userId + '?friendId=' + friendId}`);
  }

  checkReceivedInvitation(userId, friendId): Observable<any> {
    return this.http.get(`${API_URL + '/checkReceivedInvitation/' + userId + '?friendId=' + friendId}`);
  }

  checkStatusIsFriend(userId, friendId): Observable<any> {
    return this.http.get(`${API_URL + '/checkStatusIsFriend/' + userId + '?friendId=' + friendId}`);
  }

  acceptRequestAddFriend(userId, friendId): Observable<any> {
    return this.http.post(`${API_URL + '/acceptRequestAddFriend/' + userId}`, {}, {
      params: {
<<<<<<< HEAD
        friendId
=======
        friendId: friendId
>>>>>>> 927f459a086855f1692623bcddae48da400b5cf8
      }
    });
  }

  unFriend(userId, friendId): Observable<any> {
    return this.http.post(`${API_URL + '/unfriend/' + userId}`, {}, {
      params: {
<<<<<<< HEAD
        friendId
=======
        friendId: friendId
>>>>>>> 927f459a086855f1692623bcddae48da400b5cf8
      }
    });
  }

  deleteInvitationSent(userId, friendId): Observable<any> {
    return this.http.post(`${API_URL + '/deleteInvitationSent/' + userId}`, {}, {
      params: {
<<<<<<< HEAD
        friendId
=======
        friendId: friendId
>>>>>>> 927f459a086855f1692623bcddae48da400b5cf8
      }
    });
  }


  deleteInvitationReceived(userId, friendId): Observable<any> {
    return this.http.post(`${API_URL + '/deleteInvitationReceived/' + userId}`, {}, {
      params: {
<<<<<<< HEAD
        friendId
=======
        friendId: friendId
>>>>>>> 927f459a086855f1692623bcddae48da400b5cf8
      }
    });
  }

<<<<<<< HEAD
  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${API_URL_FILE}/upload-file`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

=======
>>>>>>> 927f459a086855f1692623bcddae48da400b5cf8
  uploadAvatar(file, userId): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('avatar', file, file.name);
    return this.http.post(`${API_URL}/uploadAvatar/${userId}`, formData);
  }
}
