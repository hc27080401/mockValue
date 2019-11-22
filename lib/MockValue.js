class MockValue {
    addCommand(name, getter){
        this[name] = getter
    }
}

MockValue.addCommand = function(name, getter){
    this.prototype[name] = getter
}



// const mockValue = new MocklValue













module.exports = MockValue