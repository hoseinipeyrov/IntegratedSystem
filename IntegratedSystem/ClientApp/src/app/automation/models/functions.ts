export function EditorConfig(){
    let config: any = {
        toolbarGroups: [],
        format_tags: "",
    };

    config.toolbarGroups = [
        { name: 'clipboard', groups: ['undo'] },
        { name: 'basicstyles', groups: ['basicstyles'] },
        { name: 'paragraph', groups: ['list', 'indent',  'align','bidi'] },
        { name: 'colors' },
        '/',
        { name: 'styles' },
    ];

    config.format_tags = 'p;h1;h2;h3;pre';

    return config;
}