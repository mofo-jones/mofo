import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ArtigoFormService } from './artigo-form.service';

import { NgUploaderOptions } from 'ngx-uploader';
@Component({
    styles: [require('./artigo-form.component.scss')],
    template: require('./artigo-form.component.html')
})
export class ArtigoFormComponent {
    private form: FormGroup
    public submitted: boolean = false;

    public defaultPicture = 'assets/img/theme/no-photo.png';
    public back = '';

    public profile: any = {
//        picture: 'assets/img/app/profile/Nasta.png'
        picture: ''
    };

    public uploaderOptions: NgUploaderOptions = {
        url: 'http://localhost/kodeinside.com/index/index.php/Card/Card/img',
        autoUpload: true,
        calculateSpeed: true
    };

    constructor(private formBuilder: FormBuilder, private service: ArtigoFormService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.form = this.formBuilder.group(
            {
                id: '',
                title: 'this.title',
                subtitle: 'this.subtitle',
                text: 'this.text',
                minitext: 'this.minitext',
                link: 'this.link',
                linktitle: 'this.linktitle',
                info: 'this.info',
                images: 'this.images',
                idPost: '',
                titlePost: 'titlePost',
                description: 'description',
                idCode: '',
                descriptionCode: 'descriptionCode',
                code: 'code'
            }
        );

        this.route.params.subscribe(params => {
            if (params['id']) {
                this.service.get(params['id']).then(res => {
                    this.form.patchValue(
                        {
                            id: res.card.id,
                            title: res.card.title,
                            subtitle: res.card.subtitle,
                            text: res.card.text,
                            minitext: res.card.minitext,
                            link: res.card.link,
                            linktitle: res.card.linktitle,
                            info: res.card.info,
                            images: res.card.images
                        }
                    );
                    // carrega a imagem no component
                    this.profile = {
                        picture: res.card.images
                    };
                });
            }
        });

    }

    onUploadCompleted(event: any) {
        let y = JSON.parse(event.response);
        this.form.value.images = y.data.name;
    }

    private saveNew(frm: any) {
        this.service.save(frm).then(res => {
            this.onReset();
        });
    }

    private onReset() {
        this.form.reset();
        this.profile = {
            picture: ''
        };
    }

    private saveList(frm: any) {
        this.service.save(frm).then(res => {
            this.onReset();
            this.router.navigate(['pages/artigo/artigo-list']);
        });
    }

    private onList() {
        this.router.navigate(['pages/artigo/artigo-list']);
    }
}
