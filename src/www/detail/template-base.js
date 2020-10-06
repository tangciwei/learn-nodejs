const user = {
    name: '<script>'
}
const vm = require('vm');
const result = vm.runInNewContext('`<h1>${_(user.name)}</h2>`', {
    user,
    _(content) {
        if (!content) {
            return ''
        }
        return content.replace(/</g, '&lt;')
    }
})
console.log(result)