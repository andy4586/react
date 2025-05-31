function customeRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    if (typeof reactElement.children === 'string') {
        domElement.innerText = reactElement.children;
    }
    for (const prop in props) {
        if (prop == children) continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById('root')
customeRender(reactElement, mainContainer)