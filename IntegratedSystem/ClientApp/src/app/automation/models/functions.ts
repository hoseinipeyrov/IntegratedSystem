export function EditorConfig(){
    let config: any = {
        toolbarGroups: [],
        format_tags: "",
    };

    config.toolbarGroups = [
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection'] },
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
        { name: 'colors' },
        '/',
        { name: 'styles' },
    ];

    config.format_tags = 'p;h1;h2;h3;pre';

    return config;
}