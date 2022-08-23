function main_slide() {
    const renderMainSlide = (movies) => {
        console.log("funct Main Slide Execute");

        const listMainSlide = document.querySelector('#top-slide');
        listMainSlide.innerHTML = '';
        const container = document.createElement('div');
        container.setAttribute('id', 'container');
        const indicator = document.createElement('div');
        indicator.setAttribute('id', 'indicator');
        const inner = document.createElement('div');
        inner.setAttribute('id', 'inner');
        indicator.append(inner);
        container.append(indicator);
        listMainSlide.append(container);
    }
}
export default main_slide;