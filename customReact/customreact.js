function customeRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    if (typeof reactElement.children === 'string') {
        domElement.innerText = reactElement.children;
    }
    if (reactElement.props) {
        if (reactElement.props.href) {
            domElement.setAttribute('href', reactElement.props.href);
        }
        if (reactElement.props.target) {
            domElement.setAttribute('target', reactElement.props.target);
        }
    }
    container.appendChild(domElement);
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