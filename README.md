#Install with react-router-dom, bootstrap & redux & Firebase

- Firebase @7.4 & re-base@4.0

Go to firebase.com, create a project, get the SDK and create a database.
Complete the SDK in base.js and import in App.js (or any other .js file)

```
import firebase from 'firebase/app'
import base from './base'
```

Make a quick database with users tables.

In a componentDidMount(), try this :

```
const myBase = firebase.database();
const myRef = myBase.ref('users');
myRef.on('value', snapshot =>{
	console.log(snapshot.val())
});
```
To post into db:
```
base.post(`/users/${this.props.uid}/orders/${myVar}`, {data: {buy:true, title:this.props.order}});
```


Don't forget to add : "src/base.js" into your .gitignore!

#DEPLOY :D

$ cd my-dir
$ npm run build 
(you can serve locally to test with $serve -s build)
$ firebase login
$ firebase init 
select No to all, and use `build` directory.
You can edit this in firebase.json for config
And firebaserc for linking directory with firebase project.

(if you want to check out locally)
$ firebase serve --only hosting 

finally !!
$ firebase deploy

