function customRender(reactElement, container) {

    // const domElement = document.createElement(reactElement.type)

    // // Set text inside element
    // domElement.innerHTML = reactElement.children
    // // OR use textContent (better)
    // // domElement.textContent = reactElement.children

    // // Set attributes
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // // Append to container
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props ){
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// const { Children } = require("react")
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)