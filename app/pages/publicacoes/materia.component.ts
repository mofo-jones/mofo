import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MateriaService } from './materia.service';

import { NgZone, Inject } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
    selector: 'materia',
    styles: [],
    template: require('./form.materia.html')
})
export class MateriaComponent {
    private form: FormGroup
    public submitted: boolean = false;

    public defaultPicture = 'assets/img/theme/no-photo.png';
    public back = '';

    public profile: any = {
        picture: 'assets/img/app/profile/Nasta.png'
    };

    public uploaderOptions: NgUploaderOptions = {
        url: 'http://localhost/kodeinside.com/index/index.php/Card/Card/img',
        autoUpload: true,
        calculateSpeed: true
    };

    constructor(private formBuilder: FormBuilder, private service: MateriaService) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group(
            {
                id: '',
                title: 'title',
                subtitle: 'subtitle',
                text: 'text',
                minitext: 'minitext',
                link: 'link',
                linktitle: 'linktitle',
                info: 'info',
                images: 'images',

                idPost: '',
                titlePost: 'titlePost',
                description: 'description',

                idCode: '',
                descriptionCode: 'descriptionCode',
                code: 'code'
            }
        );
    }
    
    onUploadCompleted(event: any) {
        let y = JSON.parse(event.response);
        this.form.value.images = y.data.name;
//        console.log(y.data.name, 'Nome da imagem:');
//        console.log(this.form.value.images, 'Form images:');
        this.back = 'rgba(87, 239, 30, 0.2)';
                console.log("Terminou o upload");

    }

    private onSubmit(frm: any) {
        this.service.save(frm).then(res => {
            // this.form.reset();
//            console.log(this.profile, 'sdcsdcsdc');
//            console.log(this.defaultPicture, 'dddddddd');
//            console.log(this.uploaderOptions);
        });
    }

}
