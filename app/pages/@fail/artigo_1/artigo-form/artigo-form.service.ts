import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';

// Variáveis globais do sistema
import globalVars = require('../../../globalVars');

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArtigoFormService {

    private cardSaveUrl = globalVars.host + 'card/card/save';
    private cardGetUrl = globalVars.host + 'card/card/get';
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    private options: RequestOptions;

    constructor(private http: Http) {
        this.options = new RequestOptions({ headers: this.headers, method: "post" })
    }

    public save(card: any) {
        let post = 'data=' + JSON.stringify(card);
        return this.http
            .post(this.cardSaveUrl, post, this.options)
            .toPromise()
            .then(res => {
                console.log('Service > Card', res.json().data);
                return res.json().data;
            })
            .catch(res => this.handleError(res));
    }

        public get(id: any) {
            let post = 'data=' + JSON.stringify({ 'id': id });
            return this.http.post(this.cardGetUrl, post, this.options).toPromise().then(res => res.json().data);
        }

    //    public delete(id: any) {
    //        console.log('chamada para deletar o ID:', id);
    //        console.log('DeleteURL:', this.taskDeleteUrl);
    //        let post = 'data=' + JSON.stringify({ 'id': id });
    //        return this.http.post(this.clienteShutOffUrl, post, this.options).toPromise().then(response => response.json().data);
    //    }

    //    public getCard(id: number): Promise<any> {
    //        let post = 'data=' + JSON.stringify({ 'id': id });
    //        return this.http.post(this.clienteSaveUrl, post, this.options).toPromise().then(response => response.json().data.cliente);
    //    }

    // não sei se é o melhor lugar... aqui ou em contato
    //    public getCountCard(id: number): Promise<any> {
    //        let post = 'data=' + JSON.stringify({ 'id': id });
    //        return this.http.post(this.contatoCountUrl, post, this.options).toPromise().then(response => response.json().data.countContato);
    //    }

    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}
