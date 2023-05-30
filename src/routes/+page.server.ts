
export function load() {
    console.log('load data from +page.server.ts');
    
    const articles = [
        {
            id: 1,
            title: 'Article 1',
        },
        {
            id: 2,
            title: 'Article 2',
        }
    ];
    return {articles};
}