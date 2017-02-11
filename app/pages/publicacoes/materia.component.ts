import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MateriaService } from './materia.service';

@Component({
    selector: 'materia',
    styles: [],
    template: require('./form.materia.html')
})
export class MateriaComponent {
    private form: FormGroup
    public submitted: boolean = false;


    constructor(private formBuilder: FormBuilder, private service: MateriaService) { }


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


    private onSubmit(frm: any) {
        this.service.save(frm).then(res => {
//            this.form.reset();
        });
    }

}
