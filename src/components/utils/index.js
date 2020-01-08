export function num1to9(props, propName, componentName) {
    if (typeof props[propName] != 'number') {
        return new Error('Invalid type of `' + propName + '` supplied to `' + componentName + '`. Validation failed.');
    } else if (props[propName] < 0 || props[propName] > 9) {
        return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Validation failed.');
    }
}