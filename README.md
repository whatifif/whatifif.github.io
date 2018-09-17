## Project whatifif.github.io

My works on github.
This project is bootstraped with [ https://github.com/facebookincubator/create-react-app ](https://github.com/facebookincubator/create-react-app)

### Site
[ https://whatifif.github.io/ ]( https://whatifif.github.io/)

### Repo
[ https://github.com/whatifif/whatifif.github.io ](https://github.com/whatifif/whatifif.github.io)


### usefull code snippet for yup
https://github.com/jquense/yup  
I found that there is no 'equalTo' method in yup.   
This is a convenient method needed by everyone.  
yup needs to include this 'equalTo' method as a basic one.  

```javascript
yup.addMethod(yup.mixed, 'equalTo', function(ref, message) {
    const msg = message || '${path} should match ${ref.path}';
    return this.test('equalTo', msg, function (value) {
      let refValue = this.resolve(ref);
      return !refValue || !value || value === refValue;
    })
})
```
