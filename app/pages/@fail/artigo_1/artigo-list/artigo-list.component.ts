import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ArtigoListService } from './artigo-list.service';
import { CustomEditorComponent } from './custom-editor.component';

@Component({
    selector: 'basic-example-data',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./artigo-list.component.scss')],
    providers: [ArtigoListService],
    template: require('./artigo-list.html')

})
export class ArtigoListComponent {

    public search = '';

    settings = {
        hideSubHeader: true,
        mode: 'external',
        noDataMessage: 'Nenhuma informação para ser exibida!',
        edit: {
            editButtonContent: '<i class="ion-edit"></i>',
        },
        delete: {
            deleteButtonContent: '<i class="ion-trash-a"></i>',
        },
        columns: {
            id: {
                title: 'ID'
            },
            title: {
                title: 'Titulo',

            },
            subtitle: {
                title: 'Sub-Titulo', filter: false,
            },
            text: {
                title: 'Texto', filter: false,
            },
            minitext: {
                title: 'Mini Texto', filter: false
            },
            link: {
                title: 'Link', filter: false
            },
            linktitle: {
                title: 'Titulo do Link', filter: false
            },
            info: {
                title: 'Informação', filter: false,
            },
            images: {
                title: 'Imagem', filter: false,
                type: 'html',
                valuePrepareFunction: (value: any) => {
                    let img =  '<img src="' + value + '" width="50px" height="50px" />';
                    return img;
                },

            }
        },
        actions: { columnTitle: 'Ações', delete: true, edit: true, add: false }
    };


    constructor(protected source: ArtigoListService, private route: ActivatedRoute, private router: Router) { }

    public ngAfterViewInit(): void {
        //        this.route.params.subscribe(params => {
        //            console.log(params);
        //        });
    }

    public onNew(): void { this.router.navigate(['/pages/artigo/artigo-form']); }
    public onEdit(row: any): void { this.router.navigate(['/pages/artigo/artigo-form', row.data.id]); }

    public onDelete(row: any): void { }

    public onSearch(query: string = ''): void {
        this.source.setFilter([
            {
                field: 'id',
                search: query
            },
            {
                field: 'title',
                search: query
            },
            {
                field: 'subtitle',
                search: query
            },
            {
                field: 'text',
                search: query
            },
            {
                field: 'minitext',
                search: query
            },
            {
                field: 'link',
                search: query
            },
            {
                field: 'linktitle',
                search: query
            },
            {
                field: 'info',
                search: query
            },
            {
                field: 'images',
                search: query
            }
        ], false);

    }
}